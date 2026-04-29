"use client";

import { useState } from "react";

export default function CabForm() {
  const today = new Date().toISOString().split("T")[0];
  const [pickup, setPickup] = useState("Delhi");
  const [drop, setDrop] = useState("Noida");
  const [date, setDate] = useState(today);

  return (
    <div className="relative z-30">
      <div className="grid md:grid-cols-4 gap-4">
        <div className="input-glass">
          <span>Pickup Location</span>
          <input
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="glass-input"
          />
        </div>

        <div className="input-glass">
          <span>Drop Location</span>
          <input
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            className="glass-input"
          />
        </div>

        <div className="input-glass">
          <span>Date</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="glass-input"
          />
        </div>

        <button className="search-btn">
          Book Cab
        </button>
      </div>
    </div>
  );
}
