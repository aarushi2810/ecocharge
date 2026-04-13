import React, { useEffect, useMemo, useState } from "react";
import "../styles/page.css";
import {
  getPredictionAnalytics,
  getPredictionHistory,
  getTodayGeneration,
  subscribeToPredictionHistory
} from "../utils/predictionHistory";

const formatBestDay = (value) => {
  if (!value || value === "N/A") {
    return "No data";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short"
  }).format(new Date(value));
};

export default function Home() {
  const [history, setHistory] = useState(() => getPredictionHistory());

  useEffect(() => subscribeToPredictionHistory(setHistory), []);

  const analytics = useMemo(() => getPredictionAnalytics(history), [history]);
  const todayGeneration = useMemo(() => getTodayGeneration(history), [history]);

  return (
    <div className="page-home">
      <section className="home-hero">
        <div className="home-copy">
          <span className="dashboard-section-label">Predict. Share.</span>
          <h1>Power Your Community.</h1>
          <p>
            Solar prediction engine for societies and apartment complexes.
            Estimate production, track generation history, and trade surplus
            energy with your neighbours - turning wasted kilowatts into
            community revenue.
          </p>

        </div>

        <div className="home-preview dashboard-card">
          <div className="preview-orb" />
          <div className="preview-topline">
            <span>Today's generation</span>
            <strong>{todayGeneration.toFixed(1)} kWh</strong>
          </div>
          <div className="preview-grid">
            <div>
              <span>Live load</span>
              <strong>{analytics.latestOutput.toFixed(2)} kW</strong>
            </div>
            <div>
              <span>Predictions</span>
              <strong>{analytics.totalPredictions}</strong>
            </div>
            <div>
              <span>Share offers</span>
              <strong>14 active</strong>
            </div>
            <div>
              <span>Best day</span>
              <strong>{formatBestDay(analytics.bestDay)}</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
