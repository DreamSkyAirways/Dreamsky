"use client";
import { useState } from "react";
import { Loader2, X, Check } from "lucide-react";

const LOCATIONS = [
  "Delhi (DEL)",
  "Mumbai (BOM)",
  "Bangalore (BLR)",
  "Hyderabad (HYD)",
  "Kolkata (CCU)",
];

const generateMockFlights = (from: string, to: string, count: number = 15) =>
  Array.from({ length: count }).map((_, i) => ({
    id: i,
    airline: ["Dream Sky", "IndiVibe", "Air Blaze", "FlyHigh", "Vistara Neo"][i % 5],
    from,
    to,
    depart: `${6 + (i % 12)}:${(i % 4) * 15 || "00"} ${i % 2 ? "AM" : "PM"}`,
    arrive: `${8 + (i % 12)}:${(i % 4) * 20 + 30 || "30"} ${i % 3 ? "AM" : "PM"}`,
    duration: `${2 + (i % 3)}h ${20 + (i % 4) * 10}m`,
    baggage: "15kg",
    price: 4200 + i * 280 + (i % 5) * 400,
  }));

export default function FlightForm() {
  const today = new Date().toISOString().split("T")[0];

  const [tripType, setTripType] = useState<"oneway" | "round">("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState(today);
  const [returnDate, setReturnDate] = useState(today);

  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);

  const [allFlights, setAllFlights] = useState<any[]>([]);
  const [visibleFlights, setVisibleFlights] = useState<any[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [searching, setSearching] = useState(false);

  const [selectedFlight, setSelectedFlight] = useState<any | null>(null);
  const [loadingFlight, setLoadingFlight] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    passengers: 1,
  });

  const searchFlights = () => {
    if (!from || !to) return alert("Please select From & To");
    setSearching(true);
    setAllFlights([]);
    setVisibleFlights([]);
    setShowMore(false);

    setTimeout(() => {
      const flights = generateMockFlights(from, to, 15);
      setAllFlights(flights);
      setVisibleFlights(flights.slice(0, 5));
      setShowMore(flights.length > 5);
      setSearching(false);
    }, 900);
  };

  const loadMoreFlights = () => {
    setVisibleFlights(allFlights);
    setShowMore(false);
  };

  const handleSelectFlight = (flight: any) => {
    setSelectedFlight(flight);
    setLoadingFlight(true);
    setTimeout(() => {
      setLoadingFlight(false);
      setShowBookingForm(true);
    }, 30000); // 30 seconds loading
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const submitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      alert("Please fill all required fields");
      return;
    }
    setShowBookingForm(false);
    setShowVerification(true);
  };

  const confirmBooking = () => {
    setShowVerification(false);
    setLoadingFlight(true);
    setTimeout(() => {
      setLoadingFlight(false);
      setShowSuccess(true);
    }, 2500);
  };

  const cancelProcess = () => {
    setSelectedFlight(null);
    setShowBookingForm(false);
    setShowVerification(false);
    setShowSuccess(false);
    setLoadingFlight(false);
    setUserDetails({ name: "", email: "", phone: "", passengers: 1 });
  };

  return (
    <div className="relative z-30 space-y-6 max-w-5xl mx-auto text-white">
      {/* Main Search Form */}
      {!selectedFlight && (
        <>
          <div className="flex gap-8 text-base">
            {["oneway", "round"].map((t) => (
              <label key={t} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={tripType === t}
                  onChange={() => setTripType(t as any)}
                  className="accent-[#0D6269] w-5 h-5"
                />
                <span className="font-medium">{t === "oneway" ? "One Way" : "Round Trip"}</span>
              </label>
            ))}
          </div>

          <div className={`grid gap-4 ${tripType === "round" ? "md:grid-cols-5" : "md:grid-cols-4"}`}>
            <div className="input-glass relative">
              <span className="text-white/90">From</span>
              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                onFocus={() => setShowFrom(true)}
                className="glass-input text-white placeholder:text-white/50"
                placeholder="Select city"
              />
              {showFrom && (
                <div className="absolute top-full left-0 w-full bg-[#0f172a] border border-white/30 rounded-xl mt-1 z-40 shadow-2xl">
                  {LOCATIONS.map((loc) => (
                    <div
                      key={loc}
                      onClick={() => { setFrom(loc); setShowFrom(false); }}
                      className="px-5 py-3 text-white hover:bg-white/10 cursor-pointer"
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="input-glass relative">
              <span className="text-white/90">To</span>
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                onFocus={() => setShowTo(true)}
                className="glass-input text-white placeholder:text-white/50"
                placeholder="Select city"
              />
              {showTo && (
                <div className="absolute top-full left-0 w-full bg-[#0f172a] border border-white/30 rounded-xl mt-1 z-40 shadow-2xl">
                  {LOCATIONS.map((loc) => (
                    <div
                      key={loc}
                      onClick={() => { setTo(loc); setShowTo(false); }}
                      className="px-5 py-3 text-white hover:bg-white/10 cursor-pointer"
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="input-glass">
              <span className="text-white/90">Departure</span>
              <input
                type="date"
                value={departDate}
                min={today}
                onChange={(e) => setDepartDate(e.target.value)}
                className="glass-input text-white"
              />
            </div>

            {tripType === "round" && (
              <div className="input-glass">
                <span className="text-white/90">Return</span>
                <input
                  type="date"
                  value={returnDate}
                  min={departDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="glass-input text-white"
                />
              </div>
            )}

            <button
              onClick={searchFlights}
              disabled={searching}
              className="search-btn flex items-center justify-center gap-2 text-white disabled:opacity-60"
            >
              {searching ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Searching...
                </>
              ) : (
                "Search Flights"
              )}
            </button>
          </div>
        </>
      )}

      {/* Flight Results */}
      {visibleFlights.length > 0 && !selectedFlight && (
        <div className="space-y-6 mt-12">
          <h3 className="text-2xl font-semibold text-white">
            {allFlights.length} Flights Found • {from} → {to}
          </h3>

          <div className="space-y-4">
            {visibleFlights.map((f) => (
              <div
                key={f.id}
                onClick={() => handleSelectFlight(f)}
                className="flex justify-between items-center bg-[#0f172a]/90 border border-white/20 hover:border-[#0D6269] rounded-2xl px-6 py-5 cursor-pointer transition-all hover:shadow-xl hover:shadow-[#0D6269]/20"
              >
                <div>
                  <p className="font-bold text-lg">{f.airline}</p>
                  <p className="text-white/90 mt-1">{f.from} → {f.to}</p>
                  <p className="text-white/70 text-sm mt-1">
                    {f.depart} – {f.arrive} • {f.duration}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white/80 text-sm">Cabin: {f.baggage}</p>
                  <p className="text-2xl font-bold text-[#0D6269] mt-1">
                    ₹{f.price.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {showMore && (
            <button
              onClick={loadMoreFlights}
              className="mx-auto block px-8 py-4 bg-[#0D6269]/90 hover:bg-[#0D6269] rounded-xl font-semibold text-white transition text-lg"
            >
              Explore More Flights
            </button>
          )}
        </div>
      )}

      {/* Booking Overlay */}
      {selectedFlight && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#0f172a] border border-white/20 rounded-3xl p-8 max-w-lg w-full text-white relative">
            <button
              onClick={cancelProcess}
              className="absolute top-5 right-5 text-white/70 hover:text-white"
            >
              <X size={24} />
            </button>

            {loadingFlight ? (
              <div className="text-center space-y-6 py-12">
                <Loader2 className="h-16 w-16 text-[#0D6269] animate-spin mx-auto" />
                <h2 className="text-2xl font-semibold">Preparing your booking...</h2>
                <p className="text-white/80">
                  {selectedFlight.airline} • {selectedFlight.from} → {selectedFlight.to}
                  <br />
                  ₹{selectedFlight.price.toLocaleString("en-IN")}
                </p>
              </div>
            ) : showBookingForm ? (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center">Your Details</h2>
                <form onSubmit={submitBooking} className="space-y-5">
                  <div>
                    <label className="block text-white/90 mb-2 font-medium">Full Name *</label>
                    <input
                      name="name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 bg-[#1e293b] border border-white/30 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#0D6269]"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2 font-medium">Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={userDetails.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 bg-[#1e293b] border border-white/30 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#0D6269]"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2 font-medium">Phone *</label>
                    <input
                      name="phone"
                      type="tel"
                      value={userDetails.phone}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 bg-[#1e293b] border border-white/30 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-[#0D6269]"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2 font-medium">Passengers</label>
                    <input
                      name="passengers"
                      type="number"
                      min="1"
                      value={userDetails.passengers}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3 bg-[#1e293b] border border-white/30 rounded-xl text-white focus:outline-none focus:border-[#0D6269]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#0D6269] hover:bg-[#0b5259] rounded-xl font-bold text-lg mt-4"
                  >
                    Continue
                  </button>
                </form>
              </>
            ) : showVerification ? (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center">Confirm Details</h2>
                <div className="space-y-4 text-white/90 mb-8">
                  <p><strong className="text-white">Name:</strong> {userDetails.name}</p>
                  <p><strong className="text-white">Email:</strong> {userDetails.email}</p>
                  <p><strong className="text-white">Phone:</strong> {userDetails.phone}</p>
                  <p><strong className="text-white">Passengers:</strong> {userDetails.passengers}</p>
                  <p><strong className="text-white">Flight:</strong> {selectedFlight.airline} • ₹{selectedFlight.price.toLocaleString("en-IN")}</p>
                </div>
                <button
                  onClick={confirmBooking}
                  className="w-full py-4 bg-[#0D6269] hover:bg-[#0b5259] rounded-xl font-bold text-lg flex items-center justify-center gap-2"
                >
                  <Check size={20} />
                  Confirm Booking
                </button>
                <button
                  onClick={() => { setShowVerification(false); setShowBookingForm(true); }}
                  className="w-full py-4 bg-transparent border border-white/40 hover:bg-white/10 rounded-xl font-medium mt-3"
                >
                  Edit Details
                </button>
              </>
            ) : showSuccess ? (
              <div className="text-center space-y-6 py-8">
                <div className="text-6xl">🎉</div>
                <h2 className="text-3xl font-bold text-[#0D6269]">Request Sent!</h2>
                <p className="text-white/90 text-lg">
                  Our team will contact you shortly for your booking:
                  <br />
                  <strong className="text-white">{selectedFlight.airline} – ₹{selectedFlight.price.toLocaleString("en-IN")}</strong>
                </p>
                <button
                  onClick={cancelProcess}
                  className="px-10 py-4 bg-[#0D6269] hover:bg-[#0b5259] rounded-xl font-bold text-lg mt-4"
                >
                  Back to Search
                </button>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}