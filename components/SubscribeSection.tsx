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
    <section className="w-full bg-orange-200 py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 my-8 md:my-10 mx-auto max-w-screen-2xl">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12">
          {/* LEFT TEXT */}
          <div className="text-center lg:text-left w-full lg:w-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#094a4f] italic leading-tight">
              Subscribe Now!
            </h2>
            <p className="mt-3 md:mt-4 text-[#094a4f] text-base sm:text-lg md:text-xl leading-relaxed">
              Sign up to receive weekly travel deals & latest updates.
            </p>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg lg:max-w-xl mt-6 lg:mt-0"
          >
            <div className="flex flex-col sm:flex-row items-center bg-white rounded-full p-2 sm:p-2.5 shadow-lg border border-[#0D6269]/10">
              <input
                type="email"
                name="EMAIL"
                required
                placeholder="Email address..."
                className="w-full sm:flex-1 px-4 sm:px-5 py-3.5 text-gray-700 outline-none bg-transparent text-base sm:text-lg placeholder-gray-500"
              />

              <button
                type="submit"
                className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto bg-[#0D6269] hover:bg-[#083A3F] text-white px-8 sm:px-10 py-3.5 rounded-full font-medium text-base sm:text-lg transition-all duration-300 min-h-[48px] sm:min-h-[56px] flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
              >
                Subscribe
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#0D6269] mt-4 text-center lg:text-left opacity-90">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}