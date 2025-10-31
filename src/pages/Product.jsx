import Spline from "@splinetool/react-spline";

export default function Product(){
    return (
        <div className="w-screen">
            {/* Section Header */}
            <div className="flex justify-center bg-white pt-15 w-full">
                <div className="w-8/12 flex flex-col items-center">
                <h1 className="text-4xl font-helvetica uppercase tracking-wide text-center mb-6">
                    Smart Systems. Smarter Workflows.
                </h1>
                <p className="text-black text-xl text-center w-[80%] mb-16 font-helvetica-light text-justify">
                    Explore the Solve Product Suite, a collection of intelligent, customizable systems 
                    designed to automate communication, streamline operations, and enhance customer experience.
                </p>
                </div>
               
                {/* <div className="w-150 h-150">
                    <Spline scene="https://prod.spline.design/VqZ0wjSH22tbl2M2/scene.splinecode" />
                </div> */}
                <div className="w-4/12 h-150">
                    <Spline scene="/spline/product_ord.splinecode" />
                </div>

            </div>

{/* Operations Business */}
<div className="pt-15 pb-30 bg-black text-white">
  <div className="flex flex-col justify-center w-full my-10 items-center">
    <h1 className="text-4xl font-helvetica uppercase text-center mb-6">
      Solve. Operations System
    </h1>
    <p className="text-zinc-300 text-xl text-center mb-16 font-helvetica-light px-10 w-[80%]">
      A powerful, adaptive management system that brings your entire workflow together — 
      from registrations and finances to attendance and analytics. 
      Designed to fit how your business operates, not the other way around.
    </p>
  </div>

  <div className="px-10 flex flex-col items-center">
    {/* Applications Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">

      {/* Application: Sports Academies */}
      <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
        <h2 className="text-2xl font-helvetica mb-4">Sports Academies & Clubs</h2>
        <p className="text-zinc-700 text-base leading-relaxed">
          Manage member registrations, attendance tracking, staff schedules, and payments — all through one unified dashboard designed for efficiency.
        </p>
      </div>

      {/* Application: Gyms & Fitness Centers */}
      <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
        <h2 className="text-2xl font-helvetica mb-4">Gyms & Fitness Centers</h2>
        <p className="text-zinc-700 text-base leading-relaxed">
          Track memberships, renewals, staff shifts, and client progress — your complete gym management system built to grow with you.
        </p>
      </div>

      {/* Application: Swimming Pools */}
      <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
        <h2 className="text-2xl font-helvetica mb-4">Swimming Pools & Training Centers</h2>
        <p className="text-zinc-700 text-base leading-relaxed">
          Simplify operations by managing lane bookings, attendance, staff rosters, and payments — all in a connected, easy-to-navigate dashboard.
        </p>
      </div>

      {/* Application: Academies & Institutes */}
      <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
        <h2 className="text-2xl font-helvetica mb-4">Academies & Institutes</h2>
        <p className="text-zinc-700 text-base leading-relaxed">
          Handle admissions, attendance, staff, and financial records — a smarter system for learning environments and education centers.
        </p>
      </div>

      {/* Application: Small Businesses */}
      <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
        <h2 className="text-2xl font-helvetica mb-4">Small Businesses</h2>
        <p className="text-zinc-700 text-base leading-relaxed">
          Manage employees, payments, and clients with an all-in-one dashboard — built to automate repetitive admin tasks and save time.
        </p>
      </div>

      {/* Application: Clubs & Communities */}
      <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
        <h2 className="text-2xl font-helvetica mb-4">Clubs & Communities</h2>
        <p className="text-zinc-700 text-base leading-relaxed">
          Keep members engaged, track payments, and manage activities — everything your community needs to stay organized in one place.
        </p>
      </div>

      {/* Application: Schools & Training Programs */}
      <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
        <h2 className="text-2xl font-helvetica mb-4">Schools & Training Programs</h2>
        <p className="text-zinc-700 text-base leading-relaxed">
          Automate student registration, attendance, progress tracking, and staff coordination in one cohesive platform.
        </p>
      </div>

      {/* Application: Co-working Spaces */}
      <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
        <h2 className="text-2xl font-helvetica mb-4">Co-working & Shared Spaces</h2>
        <p className="text-zinc-700 text-base leading-relaxed">
          Manage memberships, bookings, and billing with real-time data — all while improving team coordination and client communication.
        </p>
      </div>

      {/* Application: Event Organizers */}
      <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
        <h2 className="text-2xl font-helvetica mb-4">Event Organizers & Clubs</h2>
        <p className="text-zinc-700 text-base leading-relaxed">
          Handle registrations, attendance, schedules, and payments for your events — all through one simple operational system.
        </p>
      </div>

    </div>
  </div>
</div>


{/* Whatsapp Systems Section */}
            <div className="pb-30">
                <div className="flex flex-col justify-center w-full my-10 flex flex-col items-center">
                     <h1 className="text-4xl font-helvetica uppercase text-center mb-6 ">
                        Solve. Whatsapp Systems
                    </h1>
                <p className="text-black text-xl text-center mb-16 font-helvetica-light px-10 w-[80%] ">
                        With over 2 billion users worldwide, WhatsApp is where your customers already are.
Solve WhatsApp Systems helps businesses connect faster, respond smarter, and stay within reach — making communication effortless for both clients and teams.
                    </p>
                </div>
                <div className="bg-white text-black px-10 flex flex-col items-center">
                    {/* Product Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
                        {/* Solve Chat AI */}
                        <div className="border border-zinc-200 rounded-2xl bg-gradient-to-bl from-zinc-50 via-white to-zinc-100 p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-300/50 transition-all duration-300">
                            <h2 className="text-2xl font-helvetica mb-4">Solve Chat AI</h2>
                            <p className="text-zinc-700 text-base leading-relaxed">
                                A ChatGPT for your business — intelligent, conversational, and always available.
                                Engage customers 24/7 through AI-powered WhatsApp conversations.
                            </p>
                        </div>

                        {/* Solve Enquiry System */}
                        <div className="border border-zinc-200 rounded-2xl bg-gradient-to-bl from-zinc-50 via-white to-zinc-100 p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-300/50 transition-all duration-300">
                            <h2 className="text-2xl font-helvetica mb-4">Solve Enquiry System</h2>
                            <p className="text-zinc-700 text-base leading-relaxed">
                                Answer questions instantly, automate responses, and manage customer enquiries 
                                seamlessly through WhatsApp.
                            </p>
                        </div>

                        {/* Solve Booking AI */}
                        <div className="border border-zinc-200 rounded-2xl bg-gradient-to-bl from-zinc-50 via-white to-zinc-100 p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-300/50 transition-all duration-300">
                            <h2 className="text-2xl font-helvetica mb-4">Solve Booking AI</h2>
                            <p className="text-zinc-700 text-base leading-relaxed">
                                Conversations that convert to bookings — AI-assisted scheduling and confirmations 
                                right inside WhatsApp.
                            </p>
                        </div>

                        {/* Solve Booking System */}
                        <div className="border border-zinc-200 rounded-2xl bg-gradient-to-bl from-zinc-50 via-white to-zinc-100 p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-300/50 transition-all duration-300">
                            <h2 className="text-2xl font-helvetica mb-4">Solve Booking System</h2>
                            <p className="text-zinc-700 text-base leading-relaxed">
                                Streamline your scheduling process with a structured WhatsApp booking system 
                                built for simplicity and reliability.
                            </p>
                        </div>

                        {/* Solve Registration System */}
                        <div className="border border-zinc-200 rounded-2xl bg-gradient-to-bl from-zinc-50 via-white to-zinc-100 p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-300/50 transition-all duration-300">
                            <h2 className="text-2xl font-helvetica mb-4">Solve Registration System</h2>
                            <p className="text-zinc-700 text-base leading-relaxed">
                                Smart WhatsApp registration system for gyms, academies, and organizations —
                                manage sign-ups, attendance, and onboarding with ease.
                            </p>
                        </div>

                        {/* Solve Feedback System */}
                        <div className="border border-zinc-200 rounded-2xl bg-gradient-to-bl from-zinc-50 via-white to-zinc-100 p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-300/50 transition-all duration-300">
                            <h2 className="text-2xl font-helvetica mb-4 ">Solve Feedback System</h2>
                            <p className="text-zinc-700 text-base leading-relaxed">
                                Collect and analyze feedback directly through WhatsApp — turn customer insights 
                                into smarter business decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


{/* Adaptive Systems Section */}
<div className="bg-black text-white py-24 px-10 flex flex-col items-center">
      {/* Section Header */}
      <h1 className="text-4xl font-helvetica-light uppercase tracking-wide text-center mb-4">
        Solve Adaptive Systems
      </h1>
      <p className="text-white text-lg text-center max-w-3xl mb-6 font-helvetica-light">
        Custom-built business systems designed to fit your workflow — not force you to fit theirs.
      </p>
      <p className="text-white text-center text-base max-w-2xl mb-20 italic">
        When no existing system fits — we build one that does.
      </p>

      {/* Process Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl mb-20">
        {/* Step 1 */}
        <div className="flex flex-col items-start p-8 rounded-2xl border border-zinc-200 bg-white hover:shadow-lg transition-all duration-300">
          <span className="text-5xl font-bold text-zinc-900 mb-3">01</span>
          <h2 className="text-xl font-helvetica-light mb-2">Understand</h2>
          <p className="text-zinc-600 leading-relaxed">
            We start by understanding your workflow, pain points, and what success looks like for you.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-start p-8 rounded-2xl border border-zinc-200 bg-white hover:shadow-lg transition-all duration-300">
          <span className="text-5xl font-bold text-zinc-900 mb-3">02</span>
          <h2 className="text-xl font-helvetica-light mb-2">Design</h2>
          <p className="text-zinc-600 leading-relaxed">
            Our team maps out a solution — simple, scalable, and tailored to your goals.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-start p-8 rounded-2xl border border-zinc-200 bg-white hover:shadow-lg transition-all duration-300">
          <span className="text-5xl font-bold text-zinc-900 mb-3">03</span>
          <h2 className="text-xl font-helvetica-light mb-2">Develop</h2>
          <p className="text-zinc-600 leading-relaxed">
            We build your custom system with clean architecture, automation, and intuitive UX.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-start p-8 rounded-2xl border border-zinc-200 bg-white hover:shadow-lg transition-all duration-300">
          <span className="text-5xl font-bold text-zinc-900 mb-3">04</span>
          <h2 className="text-xl font-helvetica-light mb-2">Deliver</h2>
          <p className="text-zinc-600 leading-relaxed">
            Your adaptive system goes live — ready to streamline your operations and grow with your business.
          </p>
        </div>
      </div>

      {/* CTA / Quote Form */}
      <div className="w-full max-w-3xl bg-white border border-zinc-200 rounded-2xl p-10 shadow-sm flex flex-col items-center">
        <h3 className="text-2xl font-helvetica-light text-center mb-4">Ready to build your system?</h3>
        <p className="text-zinc-600 text-center mb-8 max-w-xl">
          Let’s discuss your project goals and craft a solution tailored for your business.
        </p>

        {/* Placeholder Form (no backend yet) */}
        <form className="w-full flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-1/2 border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-zinc-800 placeholder:text-zinc-400 placeholder:text-center"
          />
          <input
            type="text"
            placeholder="Project details or goals"
            className="w-full md:w-1/2 border border-zinc-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-zinc-800"
          />
          <button
            type="button"
            className="mt-2 md:mt-0 bg-black text-white px-4 w-50 py-3 rounded-lg hover:bg-zinc-900 transition-all"
          >
            Get a Quote →
          </button>
        </form>
      </div>
    </div>

{/* end */}
            </div>

    )
}