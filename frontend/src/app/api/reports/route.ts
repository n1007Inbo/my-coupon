import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src/data/pnl_ledger.json");

export async function GET() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const content = fs.readFileSync(dataFilePath, "utf8");
      return NextResponse.json(JSON.parse(content));
    }
    return NextResponse.json({ error: "Ledger file not found" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let currentData: any = {};
    if (fs.existsSync(dataFilePath)) {
      currentData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    }

    if (body.type === "UPDATE_CAMPAIGN") {
      const idx = currentData.campaigns.findIndex((c: any) => c.id === body.campaign.id);
      if (idx !== -1) {
        currentData.campaigns[idx] = { ...currentData.campaigns[idx], ...body.campaign };
      } else {
        currentData.campaigns.push(body.campaign);
      }
    } else if (body.type === "ADD_DAILY_LOG") {
      currentData.dailyLogs.unshift(body.log);
    } else if (body.type === "ADD_DENIED_ORDER") {
      currentData.deniedCommissions.unshift(body.deniedOrder);
    }

    currentData.updatedAt = new Date().toISOString();
    fs.writeFileSync(dataFilePath, JSON.stringify(currentData, null, 2), "utf8");
    return NextResponse.json({ success: true, data: currentData });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
