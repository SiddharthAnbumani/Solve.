import Spline from "@splinetool/react-spline";

export default function About(){
    return (
        <div className=" bg-white w-screem">
             <div className="flex border-b border-black/10">
          <div className="w-8/12 flex justify-center items-center">
            <h1 className="text-5xl font-helvetica-medium uppercase">About SOLVE.</h1>
          </div>
          <div className="w-6/12 h-full">
            <Spline scene="/spline/spiral.splinecode" />
          </div>
        </div>
         <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center px-10 py-24">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-inter-bold uppercase text-center mb-12 tracking-tight">
        Where Non-Linear Becomes Seamless.
      </h1>

      {/* Intro Text */}
      <p className="text-xl md:text-2xl font-helvetica-light text-center max-w-5xl leading-relaxed mb-20 text-zinc-700">
        At <span className="font-helvetica-medium">Solve.</span>, we believe every human action is non-linear — 
        unpredictable, emotional, and beautifully chaotic. Yet, systems thrive in the linear — 
        structured, ordered, and precise.
      </p>

      {/* Divider Line */}
      <div className="w-24 h-[1px] bg-zinc-300 mb-20"></div>

      {/* Core Content */}
      <div className="max-w-6xl space-y-10 text-black text-lg md:text-xl font-helvetica-light leading-relaxed">
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
          carries one simple belief: <span className="font-helvetica-medium text-black">
          Structure can be emotional. Systems can be human.</span>
        </p>
      </div>

      {/* Vision / Mission / Philosophy */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl">
        {/* Vision */}
        <div className="border border-zinc-200 rounded-3xl p-10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-helvetica mb-4 uppercase">Our Vision</h2>
          <p className="text-black font-helvetica-light leading-relaxed">
            To transform the non-linear nature of modern work into elegant, sequential systems 
            that empower people and businesses to grow effortlessly.
          </p>
        </div>

        {/* Mission */}
        <div className="border border-zinc-200 rounded-3xl p-10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-helvetica mb-4 uppercase">Our Mission</h2>
          <p className="text-black font-helvetica-light leading-relaxed">
            To bridge creativity and computation — building adaptive digital ecosystems that bring 
            order to chaos without sacrificing personality or freedom.
          </p>
        </div>

        {/* Philosophy */}
        <div className="border border-zinc-200 rounded-3xl p-10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-helvetica mb-4 uppercase">Our Philosophy</h2>
          <p className="text-black font-helvetica-light leading-relaxed">
            We see systems not as code, but as language — the grammar of progress. 
            Every <span className="font-helvetica-medium">Solve.</span> product carries a rhythm 
            where precision meets purpose, and where every non-linear idea finds its sequential expression.
          </p>
        </div>
      </div>

      {/* Closing Line */}
      <div className="mt-24 text-center">
        <p className="text-3xl md:text-4xl font-helvetica-medium bg-gradient-to-r from-black via-zinc-700 to-black bg-clip-text text-transparent">
          Structure Can Be Emotional. Systems Can Be Human.
        </p>
      </div>
    </div>
        </div>
    )
}