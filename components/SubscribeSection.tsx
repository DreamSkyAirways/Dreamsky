"use client";

import Swal from "sweetalert2";

export default function SubscribeSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Swal.fire({
      title: "Subscribed!",
      text: "Thank you! You'll receive every update travel deals & updates soon.",
      icon: "success",
      confirmButtonText: "Great!",
      confirmButtonColor: "#0D6269",
      background: "#ffffff",
      color: "#094a4f",
      customClass: {
        popup: "rounded-3xl shadow-2xl border border-[#0D6269]/20",
        confirmButton: "hover:bg-[#083A3F] transition font-semibold px-8 py-3",
      },
      timer: 3500,
      timerProgressBar: true,
    });
  };

  return (
    <section className="w-full my-8 md:my-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* ── Main card ─────────────────────────────────────────────────── */}
        <div
          className="
            relative overflow-hidden
            bg-orange-200
            rounded-3xl
            px-6 sm:px-10 md:px-14 lg:px-16
            py-10 sm:py-12 md:py-14
            shadow-[0_8px_40px_rgba(13,98,105,0.13)]
            border border-orange-300/60
          "
        >

          {/* Decorative circle — top-right */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -top-16 -right-16
              w-64 h-64 rounded-full
              bg-[#0D6269]/8
              blur-2xl
            "
          />

          {/* Decorative circle — bottom-left */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -bottom-14 -left-14
              w-52 h-52 rounded-full
              bg-orange-300/50
              blur-2xl
            "
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-14">

            {/* ── LEFT: text block ───────────────────────────────────────── */}
            <div className="text-center lg:text-left w-full lg:w-auto shrink-0">

              {/* Eyebrow label */}
              <span
                className="
                  inline-flex items-center gap-1.5
                  bg-[#0D6269]/10 text-[#094a4f]
                  text-xs font-semibold uppercase tracking-widest
                  px-4 py-1.5 rounded-full mb-4
                "
              >
                ✈ Travel Updates
              </span>

              <h2
                className="
                  text-3xl sm:text-4xl md:text-5xl
                  font-extrabold text-[#094a4f] italic leading-tight
                "
              >
                Subscribe Now!
              </h2>

              <p
                className="
                  mt-3 md:mt-4
                  text-[#094a4f]/80
                  text-base sm:text-lg md:text-xl
                  leading-relaxed
                  max-w-sm mx-auto lg:mx-0
                "
              >
                Sign up to receive weekly travel deals &amp; latest updates.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-5">
                {[
                  {  text: "No spam, ever" },
                  {  text: "Weekly digest" },
                  { text: "Unsubscribe anytime" },
                ].map(({  text }) => (
                  <span
                    key={text}
                    className="
                      flex items-center gap-1.5
                      text-xs font-medium text-[#094a4f]/70
                    "
                  >
                    {/* <span>{icon}</span> */}
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* ── RIGHT: form ────────────────────────────────────────────── */}
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg lg:max-w-xl"
            >
              {/* Input + button pill */}
              <div
                className="
                  flex flex-col sm:flex-row items-stretch sm:items-center
                  bg-white
                  rounded-2xl sm:rounded-full
                  p-2 sm:p-2
                  shadow-[0_4px_24px_rgba(13,98,105,0.14)]
                  border border-[#0D6269]/12
                  gap-2 sm:gap-0
                "
              >
                {/* Email icon + input */}
                <div className="flex items-center flex-1 px-2">
                  <svg
                    className="w-5 h-5 text-[#0D6269]/50 shrink-0 mr-2"
                    fill="none" stroke="currentColor" strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round" strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <input
                    type="email"
                    name="EMAIL"
                    required
                    placeholder="Enter your email address..."
                    className="
                      w-full py-3 sm:py-3.5
                      text-gray-700
                      outline-none bg-transparent
                      text-sm sm:text-base
                      placeholder-gray-400
                    "
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="
                    w-full sm:w-auto
                    bg-[#0D6269] hover:bg-[#083A3F]
                    text-white
                    px-7 sm:px-9 py-3.5
                    rounded-xl sm:rounded-full
                    font-semibold text-sm sm:text-base
                    transition-all duration-300
                    shadow-md hover:shadow-lg
                    active:scale-95
                    whitespace-nowrap
                    flex items-center justify-center gap-2
                  "
                >
                  Subscribe
                  <svg
                    className="w-4 h-4"
                    fill="none" stroke="currentColor" strokeWidth="2.2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Social proof strip */}
              <div
                className="
                  flex items-center justify-center lg:justify-start
                  gap-3 mt-4
                "
              >
                {/* Avatar stack */}
                <div className="flex -space-x-2">
                  {["bg-[#0D6269]", "bg-[#094a4f]", "bg-orange-400", "bg-[#0D6269]/70"].map(
                    (bg, i) => (
                      <span
                        key={i}
                        className={`
                          inline-block w-6 h-6 rounded-full ${bg}
                          border-2 border-orange-200
                          text-white text-[9px] font-bold
                          flex items-center justify-center
                        `}
                      >
                        {["A", "B", "C", "D"][i]}
                      </span>
                    )
                  )}
                </div>
                <p className="text-xs text-[#094a4f]/70 font-medium">
                  Join <strong className="text-[#094a4f]">5,000+</strong> travellers already subscribed
                </p>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}