// import Spline from "@splinetool/react-spline";
// import { NavLink } from "react-router-dom";

// export default function Services(){
//     return (
//         <div className="w-screen">
//             <div className="w-full flex justify-center">
                
//             <div className="w-/612 h-100 bg-white flex flex-col items-center">
//                 <h1 className="text-4xl font-helvetica uppercase tracking-wide text-center mb-6 pt-25">
//                     Developed with Precision and Accuracy.
//                 </h1>
//                 <p className="text-black text-xl text-center w-[80%] mb-16 font-helvetica-light text-justify">
//                     Your vision deserves precision. We design and develop digital systems that bring structure, speed, and reliability to your business.
//                 </p>
//             </div>
//             <div className="w-6/12 h-100">
//                 <Spline scene="/spline/reduce_orb.splinecode" />
//             </div>
//             </div>

//             {/* Web Studio */}
//             <div className="pt-15 pb-30 bg-black text-white">
//             <div className="flex flex-col justify-center w-full my-10 items-center">
//                 <h1 className="text-4xl font-inter-bold uppercase text-center mb-6">
//                 Web Studio
//                 </h1>
//                 <p className="text-zinc-300 text-xl text-center mb-16 font-helvetica-light px-10 w-[80%]">
//                 Where we build the website you want — from elegant portfolios to dynamic web platforms. 
//                 WebStudio turns your ideas into beautiful, fast, and functional digital experiences.
//                 </p>
//             </div>

//             <div className="px-10 flex flex-col items-center">
//                 {/* Project Types Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">

//                 {/* Portfolio Websites */}
//                 <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
//                     <h2 className="text-2xl font-helvetica mb-4">Portfolio Websites</h2>
//                     <p className="text-zinc-700 text-base leading-relaxed">
//                     Clean, minimal, and personal — perfect for individuals and creators looking to 
//                     showcase their work, story, and brand identity online.
//                     </p>
//                 </div>

//                 {/* Business Websites */}
//                 <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
//                     <h2 className="text-2xl font-helvetica mb-4">Business Websites</h2>
//                     <p className="text-zinc-700 text-base leading-relaxed">
//                     Professional websites designed for brands, startups, and organizations — built to 
//                     engage clients and convert visitors into leads.
//                     </p>
//                 </div>

//                 {/* E-Commerce Platforms */}
//                 <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
//                     <h2 className="text-2xl font-helvetica mb-4">E-Commerce Platforms</h2>
//                     <p className="text-zinc-700 text-base leading-relaxed">
//                     From product catalogs to payment integrations — we build complete online stores 
//                     that are secure, scalable, and easy to manage.
//                     </p>
//                 </div>

//                 {/* Full-Stack Web Apps */}
//                 <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
//                     <h2 className="text-2xl font-helvetica mb-4">Full-Stack Web Apps</h2>
//                     <p className="text-zinc-700 text-base leading-relaxed">
//                     Custom-built applications for automation, dashboards, or management — powered by 
//                     React, Node.js, and modern frameworks for reliability and performance.
//                     </p>
//                 </div>

//                 {/* Landing Pages */}
//                 <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
//                     <h2 className="text-2xl font-helvetica mb-4">Landing Pages</h2>
//                     <p className="text-zinc-700 text-base leading-relaxed">
//                     High-impact, fast-loading landing pages built to capture attention and 
//                     drive conversions for your product or campaign.
//                     </p>
//                 </div>

//                 {/* Management Dashboards */}
//                 <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
//                     <h2 className="text-2xl font-helvetica mb-4">Management Dashboards</h2>
//                     <p className="text-zinc-700 text-base leading-relaxed">
//                     Data-driven web dashboards tailored for your operations — giving you real-time 
//                     insights, control, and automation in one clean interface.
//                     </p>
//                 </div>

//                 {/* Web Systems Integration */}
//                 <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
//                     <h2 className="text-2xl font-helvetica mb-4">Web System Integration</h2>
//                     <p className="text-zinc-700 text-base leading-relaxed">
//                     Combine your website with internal tools — from CRM to payment APIs — 
//                     for smoother workflows and unified business systems.
//                     </p>
//                 </div>

//                 {/* Product Showcases */}
//                 <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
//                     <h2 className="text-2xl font-helvetica mb-4">Product Showcases</h2>
//                     <p className="text-zinc-700 text-base leading-relaxed">
//                     Display your products or services beautifully with interactive, responsive layouts 
//                     that highlight what makes your brand unique.
//                     </p>
//                 </div>

//                 {/* Web Revamps */}
//                 <div className="border border-zinc-200 rounded-2xl bg-white text-black p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300">
//                     <h2 className="text-2xl font-helvetica mb-4">Website Revamps</h2>
//                     <p className="text-zinc-700 text-base leading-relaxed">
//                     Have an existing website? We refresh outdated designs and improve performance, 
//                     ensuring your online presence stays modern and fast.
//                     </p>
//                 </div>

//                 </div>
//             </div>
//             </div>

// {/* end */}
// {/* Digital Marketing  */}
// <div className="">
//       <div className="bg-white text-black py-24 px-6 flex flex-col items-center">
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl font-inter-bold uppercase tracking-wide mb-4">
//           Solve. Digital Marketing Systems
//         </h1>
//         <p className="text-zinc-700 max-w-3xl mx-auto text-lg font-helvetica-light">
//           From creative design to intelligent automation — we manage your entire
//           digital presence with precision and consistency. Our goal is simple:
//           help your brand grow, engage, and perform.
//         </p>
//       </div>

//       {/* Services Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
//         {/* Content Creation */}
//         <div className="bg-gradient-to-bl from-zinc-50 via-white to-zinc-100 rounded-2xl p-8 border border-zinc-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
//           <h2 className="text-2xl font-helvetica mb-3">
//             Content Creation & Design
//           </h2>
//           <p className="text-zinc-700 text-base leading-relaxed">
//             Visual storytelling through design. We create stunning, on-brand
//             posts, banners, and campaigns that represent your business perfectly.
//           </p>
//           <p className="text-sm text-zinc-500 mt-4">
//             Canva · Brand Templates · Story Design
//           </p>
//         </div>

//         {/* Social Media Management */}
//         <div className="bg-gradient-to-bl from-zinc-50 via-white to-zinc-100 rounded-2xl p-8 border border-zinc-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
//           <h2 className="text-2xl font-helvetica mb-3">
//             Social Media Management
//           </h2>
//           <p className="text-zinc-700 text-base leading-relaxed">
//             From posting to engagement — we handle your brand’s presence across
//             all platforms with consistent tone, timing, and strategy.
//           </p>
//           <p className="text-sm text-zinc-500 mt-4">
//             Instagram · LinkedIn · Facebook · X
//           </p>
//         </div>

//         {/* Google & Meta Ads */}
//         <div className="bg-gradient-to-bl from-zinc-50 via-white to-zinc-100 rounded-2xl p-8 border border-zinc-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
//           <h2 className="text-2xl font-helvetica mb-3">
//             Google & Meta Ad Campaigns
//           </h2>
//           <p className="text-zinc-700 text-base leading-relaxed">
//             Drive measurable traffic and leads through strategic paid ad
//             campaigns — optimized for reach, conversion, and performance.
//           </p>
//           <p className="text-sm text-zinc-500 mt-4">
//             Google Ads · Meta Business Suite
//           </p>
//         </div>

//         {/* Multi-Platform Automation */}
//         <div className="bg-gradient-to-bl from-zinc-50 via-white to-zinc-100 rounded-2xl p-8 border border-zinc-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
//           <h2 className="text-2xl font-helvetica mb-3">
//             Multi-Platform Automation
//           </h2>
//           <p className="text-zinc-700 text-base leading-relaxed">
//             Post across all social handles simultaneously through our custom-built
//             Node system. Schedule, track, and manage everything from one dashboard.
//           </p>
//           <p className="text-sm text-zinc-500 mt-4">
//             Automation · API Integration · Node.js
//           </p>
//         </div>

//         {/* Analytics & Insights */}
//         <div className="bg-gradient-to-bl from-zinc-50 via-white to-zinc-100 rounded-2xl p-8 border border-zinc-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
//           <h2 className="text-2xl font-helvetica mb-3">
//             Analytics & Insights
//           </h2>
//           <p className="text-zinc-700 text-base leading-relaxed">
//             Track what matters. We build systems that report engagement, ad
//             performance, and campaign metrics in real time.
//           </p>
//           <p className="text-sm text-zinc-500 mt-4">
//             Google Analytics · Meta Pixel
//           </p>
//         </div>

//         {/* Brand Strategy & Consulting */}
//         <div className="bg-gradient-to-bl from-zinc-50 via-white to-zinc-100 rounded-2xl p-8 border border-zinc-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
//           <h2 className="text-2xl font-helvetica mb-3">
//             Brand Strategy & Consulting
//           </h2>
//           <p className="text-zinc-700 text-base leading-relaxed">
//             Every brand needs direction. We design your digital roadmap —
//             messaging, consistency, and positioning that connects with your audience.
//           </p>
//           <p className="text-sm text-zinc-500 mt-4">
//             Storytelling · Positioning · Messaging
//           </p>
//         </div>
//       </div>
//     </div>
//     <div className="">
//      <div className="bg-black text-white h-100 flex flex-col justify-center items-center text-center px-6">
//   <h3 className="text-3xl md:text-4xl font-inter-bold mb-6">
//     Let’s Automate Your Marketing.
//   </h3>
  
//   <p className="text-zinc-300 max-w-2xl mx-auto mb-10 font-helvetica-light text-lg leading-relaxed">
//     From creation to conversion — we build digital marketing systems that
//     save you time and scale your reach.
//   </p>
  
//   <NavLink
//     to="/contact"
//     className="inline-block px-10 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-all duration-300"
//   >
//     Get in Touch →
//   </NavLink>
// </div>
//     </div>
// </div>
//         </div>
//     )
// }

import Spline from "@splinetool/react-spline";
import { NavLink } from "react-router-dom";

export default function Services() {
  return (
    <div className="w-screen">
      {/* Top Section */}
      <div className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center mt-20 px-4">
        {/* Left Content */}
        <div className="w-full lg:w-6/12 h-auto bg-white flex flex-col items-center  pt-10 md:pt-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-helvetica uppercase tracking-wide text-center mb-6 pt-6 md:pt-10">
            Developed with Precision and Accuracy.
          </h1>
          <p className="text-black text-base sm:text-lg md:text-xl text-center w-[90%] md:w-[80%] mb-10 font-helvetica-light">
            Your vision deserves precision. We design and develop digital
            systems that bring structure, speed, and reliability to your
            business.
          </p>
        </div>

        {/* Right Spline */}
        <div className="w-full lg:w-6/12 h-80 sm:h-[400px] md:h-100 mt-6 md:mt-0 flex justify-center">
          <Spline scene="/spline/reduce_orb.splinecode" />
        </div>
      </div>

      {/* Web Studio */}
      <div className="pt-15 pb-30 bg-black text-white">
        <div className="flex flex-col justify-center w-full my-10 items-center px-4">
          <h1 className="text-3xl sm:text-4xl font-inter-bold uppercase text-center mb-6">
            Web Studio
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg md:text-xl text-center mb-16 font-helvetica-light w-[90%] md:w-[80%]">
            Where we build the website you want — from elegant portfolios to
            dynamic web platforms. WebStudio turns your ideas into beautiful,
            fast, and functional digital experiences.
          </p>
        </div>

        <div className="px-4 md:px-10 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full max-w-7xl">
            {[
              {
                title: "Portfolio Websites",
                desc: "Clean, minimal, and personal — perfect for individuals and creators looking to showcase their work, story, and brand identity online.",
              },
              {
                title: "Business Websites",
                desc: "Professional websites designed for brands, startups, and organizations — built to engage clients and convert visitors into leads.",
              },
              {
                title: "E-Commerce Platforms",
                desc: "From product catalogs to payment integrations — we build complete online stores that are secure, scalable, and easy to manage.",
              },
              {
                title: "Full-Stack Web Apps",
                desc: "Custom-built applications for automation, dashboards, or management — powered by React, Node.js, and modern frameworks for reliability and performance.",
              },
              {
                title: "Landing Pages",
                desc: "High-impact, fast-loading landing pages built to capture attention and drive conversions for your product or campaign.",
              },
              {
                title: "Management Dashboards",
                desc: "Data-driven web dashboards tailored for your operations — giving you real-time insights, control, and automation in one clean interface.",
              },
              {
                title: "Web System Integration",
                desc: "Combine your website with internal tools — from CRM to payment APIs — for smoother workflows and unified business systems.",
              },
              {
                title: "Product Showcases",
                desc: "Display your products or services beautifully with interactive, responsive layouts that highlight what makes your brand unique.",
              },
              {
                title: "Website Revamps",
                desc: "Have an existing website? We refresh outdated designs and improve performance, ensuring your online presence stays modern and fast.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="border border-zinc-200 rounded-2xl bg-white text-black p-6 sm:p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-500/40 transition-all duration-300"
              >
                <h2 className="text-xl sm:text-2xl font-helvetica mb-3">
                  {card.title}
                </h2>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Digital Marketing */}
      <div className="bg-white text-black py-16 sm:py-20 md:py-24 px-4 md:px-6 flex flex-col items-center">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-inter-bold uppercase tracking-wide mb-4">
            Solve. Digital Marketing Systems
          </h1>
          <p className="text-zinc-700 max-w-3xl mx-auto text-base sm:text-lg font-helvetica-light">
            From creative design to intelligent automation — we manage your
            entire digital presence with precision and consistency. Our goal is
            simple: help your brand grow, engage, and perform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full max-w-7xl">
          {[
            {
              title: "Content Creation & Design",
              desc: "Visual storytelling through design. We create stunning, on-brand posts, banners, and campaigns that represent your business perfectly.",
              tools: "Canva · Brand Templates · Story Design",
            },
            {
              title: "Social Media Management",
              desc: "From posting to engagement — we handle your brand’s presence across all platforms with consistent tone, timing, and strategy.",
              tools: "Instagram · LinkedIn · Facebook · X",
            },
            {
              title: "Google & Meta Ad Campaigns",
              desc: "Drive measurable traffic and leads through strategic paid ad campaigns — optimized for reach, conversion, and performance.",
              tools: "Google Ads · Meta Business Suite",
            },
            {
              title: "Multi-Platform Automation",
              desc: "Post across all social handles simultaneously through our custom-built Node system. Schedule, track, and manage everything from one dashboard.",
              tools: "Automation · API Integration · Node.js",
            },
            {
              title: "Analytics & Insights",
              desc: "Track what matters. We build systems that report engagement, ad performance, and campaign metrics in real time.",
              tools: "Google Analytics · Meta Pixel",
            },
            {
              title: "Brand Strategy & Consulting",
              desc: "Every brand needs direction. We design your digital roadmap — messaging, consistency, and positioning that connects with your audience.",
              tools: "Storytelling · Positioning · Messaging",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gradient-to-bl from-zinc-50 via-white to-zinc-100 rounded-2xl p-6 sm:p-8 border border-zinc-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-xl sm:text-2xl font-helvetica mb-3">
                {card.title}
              </h2>
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                {card.desc}
              </p>
              <p className="text-xs sm:text-sm text-zinc-500 mt-4">
                {card.tools}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="bg-black text-white py-16 sm:py-20 flex flex-col justify-center items-center text-center px-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-inter-bold mb-6">
          Let’s Automate Your Marketing.
        </h3>

        <p className="text-zinc-300 max-w-2xl mx-auto mb-8 sm:mb-10 font-helvetica-light text-base sm:text-lg leading-relaxed">
          From creation to conversion — we build digital marketing systems that
          save you time and scale your reach.
        </p>

        <NavLink
          to="/contact"
          className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-all duration-300"
        >
          Get in Touch →
        </NavLink>
      </div>
    </div>
  );
}
