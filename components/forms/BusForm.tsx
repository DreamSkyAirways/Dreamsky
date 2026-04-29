"use client";

import { useState } from "react";

export default function BusForm() {
  const today = new Date().toISOString().split("T")[0];
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Jaipur");
  const [date, setDate] = useState(today);

  return (
    <div className="relative z-30">
      <div className="grid md:grid-cols-4 gap-4">
        <div className="input-glass">
          <span>From</span>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="glass-input"
          />
        </div>

        <div className="input-glass">
          <span>To</span>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="glass-input"
          />
        </div>

        <div className="input-glass">
          <span>Journey Date</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="glass-input"
          />
        </div>

        <button className="search-btn">
          Search Bus
        </button>
      </div>
    </div>
  );
}
