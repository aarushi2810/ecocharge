import React from "react";
import { Link } from "react-router-dom";
import "../styles/page.css";

export default function Home() {
  return (
    <div className="page-home">
      <section className="home-hero">
        <div className="home-copy">
          <span className="dashboard-section-label">EcoCharge platform</span>
          <h1>Monitor, predict, and exchange solar energy in one dark dashboard.</h1>
          <p>
            EcoCharge brings present generation, forecasting, and neighborhood
            energy sharing into a single experience with modern analytics and a
            marketplace-first interface.
          </p>

          <div className="home-actions">
            <Link to="/dashboard" className="energy-button">
              Open Dashboard
            </Link>
            <Link to="/share-energy" className="secondary-energy-button">
              Explore Energy Market
            </Link>
          </div>
        </div>

        <div className="home-preview dashboard-card">
          <div className="preview-orb" />
          <div className="preview-topline">
            <span>Today's generation</span>
            <strong>18.6 kWh</strong>
          </div>
          <div className="preview-grid">
            <div>
              <span>Live load</span>
              <strong>0.8 kW</strong>
            </div>
            <div>
              <span>Predictions</span>
              <strong>128</strong>
            </div>
            <div>
              <span>Share offers</span>
              <strong>14 active</strong>
            </div>
            <div>
              <span>Best day</span>
              <strong>11 Apr</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
