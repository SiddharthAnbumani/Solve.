// import Spline from "@splinetool/react-spline";

// export default function About(){
//     return (
//         <div className=" bg-white w-screem">
//              <div className="flex border-b border-black/10">
//           <div className="w-8/12 flex justify-center items-center">
//             <h1 className="text-5xl font-helvetica-medium uppercase">About SOLVE.</h1>
//           </div>
//           <div className="w-6/12 h-full">
//             <Spline scene="/spline/spiral.splinecode" />
//           </div>
//         </div>
//          <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center px-10 py-24">
//       {/* Heading */}
//       <h1 className="text-3xl md:text-4xl font-inter-bold uppercase text-center mb-12 tracking-tight">
//         Where Non-Linear Becomes Seamless.
//       </h1>

//       {/* Intro Text */}
//       <p className="text-xl md:text-2xl font-helvetica-light text-center max-w-5xl leading-relaxed mb-20 text-zinc-700">
//         At <span className="font-helvetica-medium">Solve.</span>, we believe every human action is non-linear — 
//         unpredictable, emotional, and beautifully chaotic. Yet, systems thrive in the linear — 
//         structured, ordered, and precise.
//       </p>

//       {/* Divider Line */}
//       <div className="w-24 h-[1px] bg-zinc-300 mb-20"></div>

//       {/* Core Content */}
//       <div className="max-w-6xl space-y-10 text-black text-lg md:text-xl font-helvetica-light leading-relaxed">
//         <p className="text-justify">
//           Our work lives at the intersection of those two worlds.
//           We take what’s non-sequential and human, and translate it into what’s sequential and scalable.
//           Because when creativity meets clarity, when emotion meets automation — that’s when true efficiency begins.
//         </p>

//         <p className="text-justify">
//           We don’t just create tools; we build digital systems that think, adapt, and evolve — 
//           systems that learn your flow, understand your intent, and work quietly in the background 
//           so you can focus on what matters.
//         </p>

//         <p className="text-justify">
//           Every project we design — whether an operational dashboard, automation suite, or digital interface — 
//           carries one simple belief: <span className="font-helvetica-medium text-black">
//           Structure can be emotional. Systems can be human.</span>
//         </p>
//       </div>

//       {/* Vision / Mission / Philosophy */}
//       <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl">
//         {/* Vision */}
//         <div className="border border-zinc-200 rounded-3xl p-10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
//           <h2 className="text-2xl font-helvetica mb-4 uppercase">Our Vision</h2>
//           <p className="text-black font-helvetica-light leading-relaxed">
//             To transform the non-linear nature of modern work into elegant, sequential systems 
//             that empower people and businesses to grow effortlessly.
//           </p>
//         </div>

//         {/* Mission */}
//         <div className="border border-zinc-200 rounded-3xl p-10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
//           <h2 className="text-2xl font-helvetica mb-4 uppercase">Our Mission</h2>
//           <p className="text-black font-helvetica-light leading-relaxed">
//             To bridge creativity and computation — building adaptive digital ecosystems that bring 
//             order to chaos without sacrificing personality or freedom.
//           </p>
//         </div>

//         {/* Philosophy */}
//         <div className="border border-zinc-200 rounded-3xl p-10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
//           <h2 className="text-2xl font-helvetica mb-4 uppercase">Our Philosophy</h2>
//           <p className="text-black font-helvetica-light leading-relaxed">
//             We see systems not as code, but as language — the grammar of progress. 
//             Every <span className="font-helvetica-medium">Solve.</span> product carries a rhythm 
//             where precision meets purpose, and where every non-linear idea finds its sequential expression.
//           </p>
//         </div>
//       </div>

//       {/* Closing Line */}
//       <div className="mt-24 text-center">
//         <p className="text-3xl md:text-4xl font-helvetica-medium bg-gradient-to-r from-black via-zinc-700 to-black bg-clip-text text-transparent">
//           Structure Can Be Emotional. Systems Can Be Human.
//         </p>
//       </div>
//     </div>
//         </div>
//     )
// }

import Spline from "@splinetool/react-spline";

export default function About() {
  return (
    <div className="bg-white w-screen overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row border-b border-black/10  sm:mt-20 lg:mt-0">
        <div className="w-full lg:w-8/12 flex justify-center items-center py-10 sm:py-16 lg:py-0 ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-helvetica-medium uppercase text-center lg:text-left px-4">
            About SOLVE.
          </h1>
        </div>
        <div className="w-full lg:w-6/12 h-72 sm:h-96 lg:h-100">
          <Spline scene="/spline/landing_cubes.splinecode" />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 py-16 sm:py-24">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-inter-bold uppercase text-center mb-8 sm:mb-12 tracking-tight">
          Where Non-Linear Becomes Seamless.
        </h1>

        {/* Intro Text */}
        <p className="text-lg sm:text-xl md:text-2xl font-helvetica-light text-center max-w-5xl leading-relaxed mb-16 sm:mb-20 text-zinc-700">
          At <span className="font-helvetica-medium">Solve.</span>, we believe every human action is non-linear — 
          unpredictable, emotional, and beautifully chaotic. Yet, systems thrive in the linear — 
          structured, ordered, and precise.
        </p>

        {/* Divider Line */}
        <div className="w-20 sm:w-24 h-[1px] bg-zinc-300 mb-16 sm:mb-20"></div>

        {/* Core Content */}
        <div className="max-w-6xl space-y-8 sm:space-y-10 text-black text-base sm:text-lg md:text-xl font-helvetica-light leading-relaxed px-2">
          <p className="text-justify">
            Our work lives at the intersection of those two worlds.
            We take what’s non-sequential and human, and translate it into what’s sequential and scalable.
            Because when creativity meets clarity, when emotion meets automation — that’s when true efficiency begins.
          </p>

          <p className="text-justify">
            We don’t just create tools; we build digital systems that think, adapt, and evolve — 
            systems that learn your flow, understand your intent, and work quietly in the background 
            so you can focus on what matters.
          </p>

          <p className="text-justify">
            Every project we design — whether an operational dashboard, automation suite, or digital interface — 
            carries one simple belief:{" "}
            <span className="font-helvetica-medium text-black">
              Structure can be emotional. Systems can be human.
            </span>
          </p>
        </div>

        {/* Vision / Mission / Philosophy */}
        <div className="mt-20 sm:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 w-full max-w-6xl px-2">
          {/* Vision */}
          <div className="border border-zinc-200 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-helvetica mb-3 sm:mb-4 uppercase">
              Our Vision
            </h2>
            <p className="text-black font-helvetica-light leading-relaxed text-justify">
              To transform the non-linear nature of modern work into elegant, sequential systems 
              that empower people and businesses to grow effortlessly.
            </p>
          </div>

          {/* Mission */}
          <div className="border border-zinc-200 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-helvetica mb-3 sm:mb-4 uppercase">
              Our Mission
            </h2>
            <p className="text-black font-helvetica-light leading-relaxed text-justify">
              To bridge creativity and computation — building adaptive digital ecosystems that bring 
              order to chaos without sacrificing personality or freedom.
            </p>
          </div>

          {/* Philosophy */}
          <div className="border border-zinc-200 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <h2 className="text-xl sm:text-2xl font-helvetica mb-3 sm:mb-4 uppercase">
              Our Philosophy
            </h2>
            <p className="text-black font-helvetica-light leading-relaxed text-justify">
              We see systems not as code, but as language — the grammar of progress. 
              Every <span className="font-helvetica-medium">Solve.</span> product carries a rhythm 
              where precision meets purpose, and where every non-linear idea finds its sequential expression.
            </p>
          </div>
        </div>

        {/* Closing Line */}
        <div className="mt-20 sm:mt-24 text-center px-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-helvetica-medium bg-gradient-to-r from-black via-zinc-700 to-black bg-clip-text text-transparent leading-snug">
            Structure Can Be Emotional. Systems Can Be Human.
          </p>
        </div>
      </div>
    </div>
  );
}
