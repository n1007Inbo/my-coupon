"use client";

import React, { useState, useEffect, useCallback } from "react";
import styles from "./Dashboard.module.css";

interface BrandStats {
  id: string;
  name: string;
  clicks: number;
  spend: number;
  conversions: number;
  revenue: number;
  roi: number;
  status: string;
  recommendation: string;
}

interface Summary {
  totalSpend: number;
  totalRevenue: number;
  netProfit: number;
  avgRoi: number;
}

interface DashboardPayload {
  startDate: string;
  endDate: string;
  summary: Summary;
  brands: BrandStats[];
  dataSource: string;
}

export default function AdminDashboard() {
  // Authentication states
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Date Range states
  const todayStr = new Date().toISOString().split("T")[0];
  const past30DaysStr = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
  
  const [startDate, setStartDate] = useState(past30DaysStr);
  const [endDate, setEndDate] = useState(todayStr);

  // Data states
  const [data, setData] = useState<DashboardPayload | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Authentication barrier
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123" || password === "promoai") {
      setIsAuthenticated(true);
      setLoginError("");
      sessionStorage.setItem("dashboard_auth", "true");
    } else {
      setLoginError("Incorrect Access Password.");
    }
  };

  // Hydrate auth status
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isAuth = sessionStorage.getItem("dashboard_auth") === "true";
      if (isAuth) {
        setIsAuthenticated(true);
      }
    }
  }, []);

  // Fetch Dashboard Stats API
  const fetchStats = useCallback(async (forcedMock = false) => {
    setIsLoading(true);
    setError(null);
    try {
      let url = `/api/dashboard?start_date=${startDate}&end_date=${endDate}`;
      if (forcedMock) url += "&mock=true";
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Server returned error: ${response.statusText}`);
      }
      const payload: DashboardPayload = await response.json();
      setData(payload);
    } catch (err: any) {
      console.error("Dashboard fetch error:", err);
      setError(err.message || "Failed to load dashboard statistics.");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [startDate, endDate]);

  // Fetch when authenticated and dates change
  useEffect(() => {
    if (isAuthenticated) {
      fetchStats();
    }
  }, [isAuthenticated, fetchStats]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchStats();
  };

  // CSV Report Exporter
  const handleExportCSV = () => {
    if (!data || data.brands.length === 0) return;
    try {
      const headers = ["Brand Name", "Status", "Clicks", "Conversions", "Spend (PKR)", "Revenue (PKR)", "Net Profit (PKR)", "ROI %", "AI Recommendation"];
      const rows = data.brands.map(b => [
        b.name,
        b.status,
        b.clicks,
        b.conversions,
        b.spend,
        b.revenue,
        (b.revenue - b.spend).toFixed(2),
        b.roi + "%",
        b.recommendation.replace(/,/g, ";") // Escape comma
      ]);

      const csvContent = "data:text/csv;charset=utf-8," 
        + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
      
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `PromoRegistry_Arbitrage_Report_${data.startDate}_to_${data.endDate}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      alert("Failed to export report CSV: " + err);
    }
  };

  // Direct login block UI
  if (!isAuthenticated) {
    return (
      <div className={styles.dashboardContainer}>
        <div className={styles.loginContainer}>
          <form onSubmit={handleLogin} className={styles.loginCard}>
            <div className={styles.loginLogoWrapper}>
              <span>🤖</span>
              <span>Promo<span style={{ color: "var(--primary-blue)" }}>Registry</span> AI</span>
            </div>
            
            <div>
              <h3 style={{ margin: "4px 0", fontSize: "1.1rem" }}>Arbitrage Dashboard</h3>
              <p className={styles.loginSubtitle}>
                Enter the secret portal access key to view Google Ads & CSL (ConvertSocial) reports.
              </p>
            </div>

            <input
              type="password"
              placeholder="Enter Portal Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.loginInput}
              autoFocus
            />

            <button type="submit" className={styles.loginButton}>
              Authenticate Access
            </button>

            {loginError && (
              <div className={styles.loginError}>
                ⚠️ {loginError}
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardContent}>
        
        {/* Header section with badge */}
        <header className={styles.dashboardHeader}>
          <div className={styles.titleSection}>
            <div className={styles.titleRow}>
              <h1 className={styles.pageTitle}>AI Arbitrage ROI Dashboard</h1>
              <span className={styles.liveBadge}>
                <span className={styles.liveDot}></span>
                <span>API Connection Active</span>
              </span>
            </div>
            <p className={styles.pageSubtitle}>
              Real-time Google Ads campaign costs matched with ConvertSocial affiliate commissions.
            </p>
          </div>

          {/* Date controls and refresh toolbar */}
          <div className={styles.toolbarSection}>
            <div className={styles.datePickerWrapper}>
              <span>From:</span>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={styles.dateInput}
              />
              <span>To:</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className={styles.dateInput}
              />
            </div>

            <button 
              onClick={handleRefresh} 
              disabled={isLoading || isRefreshing}
              className={styles.refreshButton}
            >
              <span>🔄</span>
              <span>{isRefreshing ? "Syncing..." : "Sync Data"}</span>
            </button>
          </div>
        </header>

        {error && (
          <div className={styles.loginError} style={{ margin: 0, textAlign: "left" }}>
            ⚠️ <strong>Backend Error:</strong> {error}. Using simulated mock-ups temporarily.
            <button 
              onClick={() => fetchStats(true)} 
              style={{
                marginLeft: "20px",
                backgroundColor: "#f87171",
                color: "#0f172a",
                border: "none",
                padding: "2px 10px",
                borderRadius: "4px",
                fontWeight: 700,
                fontSize: "0.8rem",
                cursor: "pointer"
              }}
            >
              Force Fallback Mock
            </button>
          </div>
        )}

        {/* Dynamic Summary Cards */}
        {isLoading || !data ? (
          <div className={styles.summaryGrid}>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
          </div>
        ) : (
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCard}>
              <span className={styles.cardIcon}>💸</span>
              <span className={styles.cardLabel}>Ad Spend</span>
              <span className={styles.cardValue} style={{ color: "#f87171" }}>
                {data.summary.totalSpend.toLocaleString()} <span style={{ fontSize: "1rem" }}>PKR</span>
              </span>
              <span className={styles.cardSubtext}>Google Ads Costs</span>
            </div>

            <div className={styles.summaryCard}>
              <span className={styles.cardIcon}>💰</span>
              <span className={styles.cardLabel}>CSL Revenue</span>
              <span className={styles.cardValue} style={{ color: "#34d399" }}>
                {data.summary.totalRevenue.toLocaleString()} <span style={{ fontSize: "1rem" }}>PKR</span>
              </span>
              <span className={styles.cardSubtext}>Affiliate Commissions</span>
            </div>

            <div className={styles.summaryCard}>
              <span className={styles.cardIcon}>📈</span>
              <span className={styles.cardLabel}>Net Profit</span>
              <span className={styles.cardValue} style={{ color: data.summary.netProfit >= 0 ? "#10b981" : "#ef4444" }}>
                {data.summary.netProfit.toLocaleString()} <span style={{ fontSize: "1rem" }}>PKR</span>
              </span>
              <span className={styles.cardSubtext}>
                {data.summary.netProfit >= 0 ? "🟢 Profitable Campaign Run" : "🔴 Loss Incurred"}
              </span>
            </div>

            <div className={styles.summaryCard}>
              <span className={styles.cardIcon}>🚀</span>
              <span className={styles.cardLabel}>Average ROI</span>
              <span className={styles.cardValue} style={{ color: data.summary.avgRoi >= 50 ? "#34d399" : data.summary.avgRoi >= 0 ? "#fbbf24" : "#ef4444" }}>
                {data.summary.avgRoi.toFixed(2)}%
              </span>
              <span className={styles.cardSubtext}>Return on Ad Spend (ROAS)</span>
            </div>
          </div>
        )}

        {/* Dynamic Table Section */}
        {isLoading || !data ? (
          <div className={styles.skeletonTable}></div>
        ) : (
          <section className={styles.reportSection}>
            <div className={styles.reportHeader}>
              <div>
                <h3 className={styles.sectionTitle}>Campaign Metrics By Brand</h3>
                <p style={{ color: "#64748b", fontSize: "0.82rem", margin: "4px 0" }}>
                  Data source: {data.dataSource} | Period: {data.startDate} to {data.endDate}
                </p>
              </div>

              <div className={styles.tableActions}>
                <button onClick={handleExportCSV} className={styles.actionBtn}>
                  <span>📥</span>
                  <span>Export CSV Report</span>
                </button>
              </div>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.performanceTable}>
                <thead>
                  <tr>
                    <th>Brand / Campaign</th>
                    <th>Status</th>
                    <th>Clicks</th>
                    <th>Conversions</th>
                    <th>Cost (Spend)</th>
                    <th>CSL Revenue</th>
                    <th>ROI</th>
                    <th>AI Recommendation & Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.brands.map((b) => (
                    <tr key={b.id}>
                      <td>
                        <div className={styles.brandInfo}>
                          <span className={styles.brandName}>{b.name}</span>
                          <span className={styles.brandId}>Ref: {b.id}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`${styles.badge} ${b.status === "ACTIVE" ? styles.badgeActive : styles.badgePaused}`}>
                          {b.status}
                        </span>
                      </td>
                      <td style={{ fontWeight: 600 }}>{b.clicks}</td>
                      <td style={{ fontWeight: 600 }}>{b.conversions}</td>
                      <td style={{ color: "#f87171", fontWeight: 700 }}>
                        {b.spend > 0 ? b.spend.toLocaleString() : "0"} PKR
                      </td>
                      <td style={{ color: "#34d399", fontWeight: 700 }}>
                        {b.revenue > 0 ? b.revenue.toLocaleString() : "0"} PKR
                      </td>
                      <td style={{ 
                        fontWeight: 800, 
                        color: b.roi > 50 ? "#34d399" : b.roi > 0 ? "#fbbf24" : b.spend > 0 ? "#f87171" : "#64748b" 
                      }}>
                        {b.spend > 0 ? `${b.roi}%` : "—"}
                      </td>
                      <td>
                        <div className={styles.recommendationCol}>
                          {b.recommendation}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
