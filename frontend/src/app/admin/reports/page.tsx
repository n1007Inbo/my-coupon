"use client";

import React, { useState, useEffect, useMemo } from "react";
import styles from "./Reports.module.css";
import initialLedger from "@/data/pnl_ledger.json";

export default function ReportsDashboard() {
  // 1. Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");

  // 2. Control states
  const [selectedWebsite, setSelectedWebsite] = useState<"ALL" | "PromoRegistry" | "CouponFlock">("PromoRegistry");
  const [timeframe, setTimeframe] = useState<"DAILY" | "WEEKLY" | "MONTHLY" | "CUSTOM">("DAILY");
  const [currency, setCurrency] = useState<"USD" | "PKR">("USD");

  // 3. Custom Date Range
  const [startDate, setStartDate] = useState("2026-10-01");
  const [endDate, setEndDate] = useState("2026-10-14");

  // 4. Ledger Data State
  const [ledger, setLedger] = useState(initialLedger);

  // 5. Modal State for Editing / Adding Revenue
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeniedModalOpen, setIsDeniedModalOpen] = useState(false);
  const [selectedBrandForEdit, setSelectedBrandForEdit] = useState<string>("");
  const [formApprovedUsd, setFormApprovedUsd] = useState("");
  const [formDeniedUsd, setFormDeniedUsd] = useState("");
  const [formNotes, setFormNotes] = useState("");

  // Denied Commission Form State
  const [deniedBrand, setDeniedBrand] = useState("");
  const [deniedOrderNum, setDeniedOrderNum] = useState("");
  const [deniedOrderVal, setDeniedOrderVal] = useState("");
  const [deniedAmountUsd, setDeniedAmountUsd] = useState("");
  const [deniedReason, setDeniedReason] = useState("");

  // Rate
  const rate = ledger.usdPkrRate || 278;

  // Hydrate auth & local overrides
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("pnl_auth") === "true") {
        setIsAuthenticated(true);
      }
      try {
        const stored = localStorage.getItem("pnl_ledger_overrides");
        if (stored) {
          setLedger(JSON.parse(stored));
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "methew2026" || pin === "admin123" || pin === "dippy2026") {
      setIsAuthenticated(true);
      setPinError("");
      sessionStorage.setItem("pnl_auth", "true");
    } else {
      setPinError("Invalid Passcode. Enter correct PIN.");
    }
  };

  // Filter campaigns strictly by selected website (Never mixed!)
  const filteredCampaigns = useMemo(() => {
    if (selectedWebsite === "ALL") return ledger.campaigns;
    return ledger.campaigns.filter((c: any) => c.website.toLowerCase().includes(selectedWebsite.toLowerCase()));
  }, [ledger.campaigns, selectedWebsite]);

  // Filter daily logs
  const filteredDailyLogs = useMemo(() => {
    return ledger.dailyLogs.filter((log: any) => {
      const matchWeb = selectedWebsite === "ALL" || log.website.toLowerCase().includes(selectedWebsite.toLowerCase());
      if (timeframe === "CUSTOM") {
        return matchWeb && log.date >= startDate && log.date <= endDate;
      }
      return matchWeb;
    });
  }, [ledger.dailyLogs, selectedWebsite, timeframe, startDate, endDate]);

  // Filter weekly logs
  const filteredWeeklyLogs = useMemo(() => {
    if (selectedWebsite === "ALL") return ledger.weeklyLogs;
    return ledger.weeklyLogs.filter((w: any) => w.website.toLowerCase().includes(selectedWebsite.toLowerCase()));
  }, [ledger.weeklyLogs, selectedWebsite]);

  // Filter monthly logs
  const filteredMonthlyLogs = useMemo(() => {
    if (selectedWebsite === "ALL") return ledger.monthlyLogs;
    return ledger.monthlyLogs.filter((m: any) => m.website.toLowerCase().includes(selectedWebsite.toLowerCase()));
  }, [ledger.monthlyLogs, selectedWebsite]);

  // Filter Denied commissions
  const filteredDenied = useMemo(() => {
    if (selectedWebsite === "ALL") return ledger.deniedCommissions;
    return ledger.deniedCommissions.filter((d: any) => d.website.toLowerCase().includes(selectedWebsite.toLowerCase()));
  }, [ledger.deniedCommissions, selectedWebsite]);

  // KPI Computations based on current filtered campaigns
  const totalSpendUsd = useMemo(() => filteredCampaigns.reduce((acc: number, c: any) => acc + (c.spendUsd || 0), 0), [filteredCampaigns]);
  const totalSpendPkr = useMemo(() => filteredCampaigns.reduce((acc: number, c: any) => acc + (c.spendPkr || 0), 0), [filteredCampaigns]);
  const totalApprovedUsd = useMemo(() => filteredCampaigns.reduce((acc: number, c: any) => acc + (c.approvedRevUsd || 0), 0), [filteredCampaigns]);
  const totalApprovedPkr = useMemo(() => filteredCampaigns.reduce((acc: number, c: any) => acc + (c.approvedRevPkr || 0), 0), [filteredCampaigns]);
  const totalDeniedUsd = useMemo(() => filteredCampaigns.reduce((acc: number, c: any) => acc + (c.deniedRevUsd || 0), 0), [filteredCampaigns]);
  const totalDeniedPkr = useMemo(() => filteredCampaigns.reduce((acc: number, c: any) => acc + (c.deniedRevPkr || 0), 0), [filteredCampaigns]);
  const netProfitUsd = totalApprovedUsd - totalSpendUsd;
  const netProfitPkr = totalApprovedPkr - totalSpendPkr;
  const overallRoas = totalSpendUsd > 0 ? (totalApprovedUsd / totalSpendUsd).toFixed(2) : "0.00";
  const activeCount = filteredCampaigns.filter((c: any) => c.status === "ENABLED").length;

  const formatCurrency = (usdVal: number, pkrVal: number) => {
    if (currency === "USD") {
      return `$${usdVal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `PKR ${Math.round(pkrVal).toLocaleString("en-US")}`;
  };

  // Save updated revenue for brand
  const handleSaveBrandRevenue = (e: React.FormEvent) => {
    e.preventDefault();
    const appr = parseFloat(formApprovedUsd) || 0;
    const denied = parseFloat(formDeniedUsd) || 0;

    const updated = {
      ...ledger,
      campaigns: ledger.campaigns.map((c: any) => {
        if (c.brand === selectedBrandForEdit) {
          const newApprUsd = appr;
          const newApprPkr = appr * rate;
          const newDeniedUsd = denied;
          const newDeniedPkr = denied * rate;
          const newNetUsd = newApprUsd - c.spendUsd;
          const newNetPkr = newApprPkr - c.spendPkr;
          const newRoas = c.spendUsd > 0 ? parseFloat((newApprUsd / c.spendUsd).toFixed(2)) : 0;
          return {
            ...c,
            approvedRevUsd: newApprUsd,
            approvedRevPkr: newApprPkr,
            deniedRevUsd: newDeniedUsd,
            deniedRevPkr: newDeniedPkr,
            netProfitUsd: newNetUsd,
            netProfitPkr: newNetPkr,
            roas: newRoas,
            notes: formNotes || c.notes
          };
        }
        return c;
      })
    };

    setLedger(updated);
    localStorage.setItem("pnl_ledger_overrides", JSON.stringify(updated));
    setIsModalOpen(false);
  };

  // Save new denied order
  const handleSaveDeniedOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const deniedLoss = parseFloat(deniedAmountUsd) || 0;
    const newEntry = {
      id: `denied-${Date.now()}`,
      brand: deniedBrand,
      website: selectedWebsite === "ALL" ? "PromoRegistry" : selectedWebsite,
      account: selectedWebsite === "PromoRegistry" ? "DealNest (304-128-5276)" : "Methew (932-283-7982)",
      platform: "Affiliate Portal",
      orderNumber: deniedOrderNum || "#UNSPECIFIED",
      referralId: "DIRECT",
      orderDate: new Date().toISOString().split("T")[0],
      orderValueUsd: parseFloat(deniedOrderVal) || 0,
      commissionRate: "Standard",
      deniedUsd: deniedLoss,
      deniedPkr: deniedLoss * rate,
      status: "DENIED",
      reason: deniedReason || "Cancelled by customer / fraud flag",
      action: "Logged for audit follow-up"
    };

    const updated = {
      ...ledger,
      deniedCommissions: [newEntry, ...ledger.deniedCommissions]
    };

    setLedger(updated);
    localStorage.setItem("pnl_ledger_overrides", JSON.stringify(updated));
    setIsDeniedModalOpen(false);
    setDeniedBrand("");
    setDeniedOrderNum("");
    setDeniedAmountUsd("");
    setDeniedReason("");
  };

  // Export CSV
  const handleExportCsv = () => {
    const headers = ["Brand", "Website", "Account", "Status", "Clicks", "Spend (PKR)", "Spend (USD)", "Approved (USD)", "Denied (USD)", "Net Profit (USD)", "ROAS", "Diagnosis"];
    const rows = filteredCampaigns.map((c: any) => [
      `"${c.brand}"`,
      `"${c.website}"`,
      `"${c.account}"`,
      `"${c.status}"`,
      c.clicks,
      c.spendPkr,
      c.spendUsd.toFixed(2),
      c.approvedRevUsd.toFixed(2),
      c.deniedRevUsd.toFixed(2),
      c.netProfitUsd.toFixed(2),
      c.roas,
      `"${c.verdict.replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `MediaBuyer_Report_${selectedWebsite}_${timeframe}_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <div style={{ fontSize: "36px", marginBottom: "12px" }}>🔒</div>
          <h2 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}>Media Buyer P&L Dashboard</h2>
          <p style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "20px" }}>
            Enter your secret PIN to access live cost, revenue, and daily accounting reports.
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter PIN (e.g. methew2026)"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className={styles.textInput}
              style={{ textAlign: "center", letterSpacing: "2px", marginBottom: "12px" }}
              autoFocus
            />
            {pinError && <div style={{ color: "#ef4444", fontSize: "12px", marginBottom: "12px" }}>{pinError}</div>}
            <button type="submit" className={styles.actionBtn} style={{ width: "100%", justifyContent: "center" }}>
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.titleArea}>
          <h1>
            <span>📈 Financial & Media-Buyer Reports</span>
            <span className={styles.liveBadge}>● Live Data</span>
          </h1>
          <p style={{ color: "#64748b", fontSize: "13px", margin: "4px 0 0 0" }}>
            Independent multi-website tracking for CouponFlock and PromoRegistry
          </p>
        </div>

        <div className={styles.controlsBar}>
          {/* Website Isolation Switcher */}
          <div className={styles.websiteSelector}>
            <button
              onClick={() => setSelectedWebsite("PromoRegistry")}
              className={`${styles.webTab} ${selectedWebsite === "PromoRegistry" ? styles.webTabActivePromo : ""}`}
            >
              🟣 PromoRegistry
            </button>
            <button
              onClick={() => setSelectedWebsite("CouponFlock")}
              className={`${styles.webTab} ${selectedWebsite === "CouponFlock" ? styles.webTabActiveCoupon : ""}`}
            >
              🟠 CouponFlock
            </button>
            <button
              onClick={() => setSelectedWebsite("ALL")}
              className={`${styles.webTab} ${selectedWebsite === "ALL" ? styles.webTabActiveAll : ""}`}
            >
              🌐 All Websites
            </button>
          </div>

          {/* Timeframe Switcher */}
          <div className={styles.timeframeSelector}>
            <button onClick={() => setTimeframe("DAILY")} className={`${styles.timeTab} ${timeframe === "DAILY" ? styles.timeTabActive : ""}`}>
              Daily
            </button>
            <button onClick={() => setTimeframe("WEEKLY")} className={`${styles.timeTab} ${timeframe === "WEEKLY" ? styles.timeTabActive : ""}`}>
              Weekly
            </button>
            <button onClick={() => setTimeframe("MONTHLY")} className={`${styles.timeTab} ${timeframe === "MONTHLY" ? styles.timeTabActive : ""}`}>
              Monthly
            </button>
            <button onClick={() => setTimeframe("CUSTOM")} className={`${styles.timeTab} ${timeframe === "CUSTOM" ? styles.timeTabActive : ""}`}>
              Custom Date
            </button>
          </div>

          {/* Currency Toggle */}
          <div className={styles.currencyToggle}>
            <button onClick={() => setCurrency("USD")} className={`${styles.currBtn} ${currency === "USD" ? styles.currBtnActive : ""}`}>
              USD ($)
            </button>
            <button onClick={() => setCurrency("PKR")} className={`${styles.currBtn} ${currency === "PKR" ? styles.currBtnActive : ""}`}>
              PKR (Rs)
            </button>
          </div>

          {/* Export CSV */}
          <button onClick={handleExportCsv} className={styles.actionBtn} style={{ background: "#059669" }}>
            📥 Export CSV
          </button>
        </div>
      </header>

      {/* Custom Date Range Bar (if selected) */}
      {timeframe === "CUSTOM" && (
        <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "12px", background: "#111827", padding: "12px 18px", borderRadius: "12px", border: "1px solid #1e293b" }}>
          <span style={{ fontSize: "13px", fontWeight: "600", color: "#94a3b8" }}>Select Date Horizon:</span>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className={styles.customDateInput} />
          <span style={{ color: "#64748b" }}>to</span>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className={styles.customDateInput} />
          <span style={{ fontSize: "12px", color: "#38bdf8", marginLeft: "auto" }}>
            Showing custom metrics between {startDate} and {endDate}
          </span>
        </div>
      )}

      {/* Top 6 KPI Cards */}
      <div className={styles.kpiGrid}>
        <div className={styles.kpiCard}>
          <div className={styles.kpiLabel}>Total Ad Spend ({currency})</div>
          <div className={styles.kpiValue} style={{ color: "#f87171" }}>
            {formatCurrency(totalSpendUsd, totalSpendPkr)}
          </div>
          <div className={styles.kpiSub}>Google Ads verified media cost</div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiLabel}>Approved Revenue ({currency})</div>
          <div className={styles.kpiValue} style={{ color: "#34d399" }}>
            {formatCurrency(totalApprovedUsd, totalApprovedPkr)}
          </div>
          <div className={styles.kpiSub}>Realized affiliate commissions</div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiLabel}>Net Profit / Loss ({currency})</div>
          <div className={`${styles.kpiValue} ${netProfitUsd >= 0 ? styles.kpiPositive : styles.kpiNegative}`}>
            {netProfitUsd >= 0 ? "+" : ""}{formatCurrency(netProfitUsd, netProfitPkr)}
          </div>
          <div className={styles.kpiSub}>Bottom-line financial result</div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiLabel}>Denied Revenue Loss</div>
          <div className={`${styles.kpiValue} ${styles.kpiWarning}`}>
            {formatCurrency(totalDeniedUsd, totalDeniedPkr)}
          </div>
          <div className={styles.kpiSub}>Rejected/Cancelled orders (Loss)</div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiLabel}>Overall ROAS</div>
          <div className={styles.kpiValue} style={{ color: "#60a5fa" }}>
            {overallRoas}x
          </div>
          <div className={styles.kpiSub}>Return on ad spend</div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiLabel}>Active Live Brands</div>
          <div className={styles.kpiValue} style={{ color: "#a78bfa" }}>
            {activeCount} Live
          </div>
          <div className={styles.kpiSub}>Campaigns currently running</div>
        </div>
      </div>

      {/* MAIN VIEW: BRAND-WISE PERFORMANCE BREAKDOWN */}
      <div className={styles.cardSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <span>🏬 Brand Performance Breakdown</span>
            <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "400" }}>
              ({selectedWebsite === "ALL" ? "Consolidated All Websites" : `Strictly ${selectedWebsite}`})
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setIsDeniedModalOpen(true)}
              className={styles.actionBtn}
              style={{ background: "#dc2626", fontSize: "12px", padding: "6px 12px" }}
            >
              + Log Denied Order
            </button>
            <button
              onClick={() => {
                setSelectedBrandForEdit(filteredCampaigns[0]?.brand || "");
                setFormApprovedUsd("");
                setFormDeniedUsd("");
                setFormNotes("");
                setIsModalOpen(true);
              }}
              className={styles.actionBtn}
              style={{ fontSize: "12px", padding: "6px 12px" }}
            >
              + Update Brand Revenue
            </button>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Brand Name</th>
                <th>Website</th>
                <th>Status</th>
                <th>Account</th>
                <th>Clicks</th>
                <th>Ad Spend</th>
                <th>Approved Rev</th>
                <th>Denied Rev</th>
                <th>Net P&L</th>
                <th>ROAS</th>
                <th>Verdict / Diagnosis</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCampaigns.map((c: any) => (
                <tr key={c.id}>
                  <td style={{ fontWeight: "700", color: "#f8fafc" }}>{c.brand}</td>
                  <td>
                    <span style={{ color: c.website === "PromoRegistry" ? "#818cf8" : "#fbbf24", fontWeight: "600" }}>
                      {c.website}
                    </span>
                  </td>
                  <td>
                    <span className={c.status === "ENABLED" ? styles.statusLive : styles.statusPaused}>
                      {c.status === "ENABLED" ? "● LIVE" : "⏸️ PAUSED"}
                    </span>
                  </td>
                  <td style={{ fontSize: "12px", color: "#94a3b8" }}>{c.account.split(" ")[0]}</td>
                  <td>{c.clicks}</td>
                  <td style={{ color: "#f87171", fontWeight: "600" }}>
                    {formatCurrency(c.spendUsd, c.spendPkr)}
                  </td>
                  <td style={{ color: "#34d399", fontWeight: "600" }}>
                    {formatCurrency(c.approvedRevUsd, c.approvedRevPkr)}
                  </td>
                  <td style={{ color: c.deniedRevUsd > 0 ? "#f87171" : "#64748b" }}>
                    {formatCurrency(c.deniedRevUsd, c.deniedRevPkr)}
                  </td>
                  <td style={{ fontWeight: "700", color: c.netProfitUsd >= 0 ? "#10b981" : "#ef4444" }}>
                    {c.netProfitUsd >= 0 ? "+" : ""}{formatCurrency(c.netProfitUsd, c.netProfitPkr)}
                  </td>
                  <td>{c.roas}x</td>
                  <td style={{ fontSize: "12px", maxWidth: "260px", whiteSpace: "normal" }}>{c.verdict}</td>
                  <td>
                    <button
                      onClick={() => {
                        setSelectedBrandForEdit(c.brand);
                        setFormApprovedUsd(c.approvedRevUsd.toString());
                        setFormDeniedUsd(c.deniedRevUsd.toString());
                        setFormNotes(c.notes);
                        setIsModalOpen(true);
                      }}
                      style={{ background: "#1e293b", border: "1px solid #334155", color: "#38bdf8", padding: "4px 8px", borderRadius: "6px", fontSize: "11px", cursor: "pointer" }}
                    >
                      ✏️ Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TIMEFRAME VIEWS (DAILY / WEEKLY / MONTHLY) */}
      <div className={styles.cardSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <span>
              {timeframe === "DAILY" && "📅 Daily Ledger (Day-by-Day)"}
              {timeframe === "WEEKLY" && "📆 Weekly Rollup (Week-by-Week)"}
              {timeframe === "MONTHLY" && "🗓️ Monthly Summary (Month-by-Month)"}
              {timeframe === "CUSTOM" && "🎯 Custom Date Ledger"}
            </span>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          {timeframe === "DAILY" || timeframe === "CUSTOM" ? (
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Website</th>
                  <th>Brand</th>
                  <th>Clicks</th>
                  <th>Ad Spend</th>
                  <th>Approved Rev</th>
                  <th>Denied Rev</th>
                  <th>Net P&L</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {filteredDailyLogs.map((log: any, idx: number) => {
                  const netUsd = log.approvedUsd - log.spendUsd;
                  const netPkr = (log.approvedUsd * rate) - log.spendPkr;
                  return (
                    <tr key={idx}>
                      <td style={{ fontWeight: "600" }}>{log.date}</td>
                      <td style={{ color: log.website === "PromoRegistry" ? "#818cf8" : "#fbbf24" }}>{log.website}</td>
                      <td style={{ fontWeight: "700" }}>{log.brand}</td>
                      <td>{log.clicks}</td>
                      <td style={{ color: "#f87171" }}>{formatCurrency(log.spendUsd, log.spendPkr)}</td>
                      <td style={{ color: "#34d399" }}>{formatCurrency(log.approvedUsd, log.approvedUsd * rate)}</td>
                      <td style={{ color: log.deniedUsd > 0 ? "#f87171" : "#64748b" }}>
                        {formatCurrency(log.deniedUsd, log.deniedUsd * rate)}
                      </td>
                      <td style={{ fontWeight: "700", color: netUsd >= 0 ? "#10b981" : "#ef4444" }}>
                        {netUsd >= 0 ? "+" : ""}{formatCurrency(netUsd, netPkr)}
                      </td>
                      <td style={{ fontSize: "12px", color: "#94a3b8" }}>{log.notes}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : timeframe === "WEEKLY" ? (
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Week Horizon</th>
                  <th>Website</th>
                  <th>Ad Spend</th>
                  <th>Approved Rev</th>
                  <th>Denied Loss</th>
                  <th>Net P&L</th>
                  <th>ROAS</th>
                  <th>Strategic Notes</th>
                </tr>
              </thead>
              <tbody>
                {filteredWeeklyLogs.map((w: any, idx: number) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: "700", color: "#f8fafc" }}>{w.week}</td>
                    <td style={{ color: w.website === "PromoRegistry" ? "#818cf8" : "#fbbf24" }}>{w.website}</td>
                    <td style={{ color: "#f87171" }}>{formatCurrency(w.spendUsd, w.spendPkr)}</td>
                    <td style={{ color: "#34d399" }}>{formatCurrency(w.approvedUsd, w.approvedPkr)}</td>
                    <td style={{ color: w.deniedUsd > 0 ? "#f87171" : "#64748b" }}>{formatCurrency(w.deniedUsd, w.deniedPkr)}</td>
                    <td style={{ fontWeight: "700", color: w.netProfitUsd >= 0 ? "#10b981" : "#ef4444" }}>
                      {w.netProfitUsd >= 0 ? "+" : ""}{formatCurrency(w.netProfitUsd, w.netProfitPkr)}
                    </td>
                    <td>{w.roas}x</td>
                    <td style={{ fontSize: "12px", color: "#94a3b8" }}>{w.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Website</th>
                  <th>Ad Spend</th>
                  <th>Approved Rev</th>
                  <th>Denied Loss</th>
                  <th>Net P&L</th>
                  <th>ROAS</th>
                  <th>Accountant Summary</th>
                </tr>
              </thead>
              <tbody>
                {filteredMonthlyLogs.map((m: any, idx: number) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: "700", color: "#f8fafc" }}>{m.month}</td>
                    <td style={{ color: m.website === "PromoRegistry" ? "#818cf8" : "#fbbf24" }}>{m.website}</td>
                    <td style={{ color: "#f87171" }}>{formatCurrency(m.spendUsd, m.spendPkr)}</td>
                    <td style={{ color: "#34d399" }}>{formatCurrency(m.approvedUsd, m.approvedPkr)}</td>
                    <td style={{ color: m.deniedUsd > 0 ? "#f87171" : "#64748b" }}>{formatCurrency(m.deniedUsd, m.deniedPkr)}</td>
                    <td style={{ fontWeight: "700", color: m.netProfitUsd >= 0 ? "#10b981" : "#ef4444" }}>
                      {m.netProfitUsd >= 0 ? "+" : ""}{formatCurrency(m.netProfitUsd, m.netProfitPkr)}
                    </td>
                    <td>{m.roas}x</td>
                    <td style={{ fontSize: "12px", color: "#94a3b8" }}>{m.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* 🚫 DENIED COMMISSIONS AUDIT SECTION */}
      <div className={styles.cardSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <span>🚫 Denied & Disputed Commissions Audit Log</span>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Order #</th>
                <th>Order Date</th>
                <th>Brand Name</th>
                <th>Website</th>
                <th>Platform</th>
                <th>Order Value</th>
                <th>Lost Commission</th>
                <th>Status</th>
                <th>Merchant Reason / Note</th>
                <th>Action Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredDenied.map((d: any) => (
                <tr key={d.id}>
                  <td style={{ fontWeight: "700", color: "#f87171" }}>{d.orderNumber}</td>
                  <td>{d.orderDate}</td>
                  <td style={{ fontWeight: "600" }}>{d.brand}</td>
                  <td>{d.website}</td>
                  <td>{d.platform}</td>
                  <td>${d.orderValueUsd.toFixed(2)}</td>
                  <td style={{ color: "#f87171", fontWeight: "700" }}>
                    {formatCurrency(d.deniedUsd, d.deniedPkr)}
                  </td>
                  <td>
                    <span className={styles.badgeDenied}>DENIED</span>
                  </td>
                  <td style={{ fontSize: "12px", color: "#cbd5e1" }}>{d.reason}</td>
                  <td style={{ fontSize: "12px", color: "#38bdf8" }}>{d.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL: EDIT BRAND REVENUE */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "12px", color: "#f8fafc" }}>
              Update Revenue for: {selectedBrandForEdit}
            </h3>
            <form onSubmit={handleSaveBrandRevenue}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Approved Revenue ($ USD):</label>
                <input
                  type="number"
                  step="0.01"
                  value={formApprovedUsd}
                  onChange={(e) => setFormApprovedUsd(e.target.value)}
                  className={styles.textInput}
                  placeholder="e.g. 20.09"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Denied Revenue ($ USD):</label>
                <input
                  type="number"
                  step="0.01"
                  value={formDeniedUsd}
                  onChange={(e) => setFormDeniedUsd(e.target.value)}
                  className={styles.textInput}
                  placeholder="e.g. 14.76"
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Accountant Diagnosis / Notes:</label>
                <input
                  type="text"
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  className={styles.textInput}
                  placeholder="e.g. 3 sales tracked on UpPromote"
                />
              </div>

              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", marginTop: "20px" }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{ background: "#374151", color: "white", border: "none", padding: "8px 16px", borderRadius: "8px", cursor: "pointer" }}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.actionBtn}>
                  Save & Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: LOG DENIED ORDER */}
      {isDeniedModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "12px", color: "#f87171" }}>
              Log Denied / Rejected Commission
            </h3>
            <form onSubmit={handleSaveDeniedOrder}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Brand Name:</label>
                <select
                  value={deniedBrand}
                  onChange={(e) => setDeniedBrand(e.target.value)}
                  className={styles.textInput}
                  required
                >
                  <option value="">Select Brand</option>
                  {filteredCampaigns.map((c: any) => (
                    <option key={c.id} value={c.brand}>{c.brand} ({c.website})</option>
                  ))}
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Order Number:</label>
                <input
                  type="text"
                  value={deniedOrderNum}
                  onChange={(e) => setDeniedOrderNum(e.target.value)}
                  className={styles.textInput}
                  placeholder="e.g. #218620"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Order Total Sale ($ USD):</label>
                <input
                  type="number"
                  step="0.01"
                  value={deniedOrderVal}
                  onChange={(e) => setDeniedOrderVal(e.target.value)}
                  className={styles.textInput}
                  placeholder="e.g. 122.99"
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Denied Commission Loss ($ USD):</label>
                <input
                  type="number"
                  step="0.01"
                  value={deniedAmountUsd}
                  onChange={(e) => setDeniedAmountUsd(e.target.value)}
                  className={styles.textInput}
                  placeholder="e.g. 14.76"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Merchant Reason:</label>
                <input
                  type="text"
                  value={deniedReason}
                  onChange={(e) => setDeniedReason(e.target.value)}
                  className={styles.textInput}
                  placeholder="e.g. Cancelled order / invalid coupon"
                />
              </div>

              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", marginTop: "20px" }}>
                <button
                  type="button"
                  onClick={() => setIsDeniedModalOpen(false)}
                  style={{ background: "#374151", color: "white", border: "none", padding: "8px 16px", borderRadius: "8px", cursor: "pointer" }}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.actionBtn} style={{ background: "#dc2626" }}>
                  Log Denied Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
