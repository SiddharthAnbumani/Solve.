import Spline from "@splinetool/react-spline";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="text-5xl min-h-[40rem] flex flex-col md:flex-row border-b-2">
        <div className="w-full md:w-1/2 flex justify-center items-center h-[25rem] md:h-[40rem]">
          <Spline scene="/spline/landing_cubes.splinecode" />
        </div>

        <div className="w-full md:w-1/2 font-helvetica-light text-4xl sm:text-5xl md:text-7xl uppercase flex flex-col justify-center items-start p-6 md:p-12">
          <p>bring Systems to your Business.</p>
          <p className="text-2xl md:text-3xl text-center my-3 font-inter-medium text-zinc-950">
            Systemize. Scale. Succeed.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 mt-5 w-full sm:w-auto">
            <NavLink
              to=""
              className="bg-black text-white rounded-lg text-lg py-2 px-5 text-center hover:scale-105 transition-all duration-300"
            >
              Get a Free Consultation
            </NavLink>
            <NavLink
              to="/products"
              className="bg-white text-black rounded-lg text-lg py-2 px-5 text-center hover:scale-105 transition-all duration-300 border-2 border-black"
            >
              Discover How It Works
            </NavLink>
          </div>
        </div>
      </div>

      {/* BLACK INFO SECTION */}
      <div className="w-full bg-black text-white flex flex-col md:flex-row min-h-[35rem] border-b-2">
        <div className="w-full md:w-8/12 flex flex-col justify-center items-center font-helvetica-light p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl uppercase text-center md:text-left">
            We Build Systems That Think for You.
          </h1>

          <div className="w-full md:w-[90%] mt-6 space-y-4">
            <p className="text-lg sm:text-xl leading-7 text-center md:text-left">
              Solve AI Systems helps businesses streamline operations with automation, AI tools,
              and intelligent management systems. Our mission is simple — to turn your daily
              business challenges into smooth, scalable systems that save time and drive growth.
            </p>

            <p className="italic text-gray-300 text-lg sm:text-xl font-noto-serif-light text-center md:text-left">
              “You do not rise to the level of your goals. You fall to the level of your systems.”
            </p>

            <p className="text-lg sm:text-xl uppercase font-helvetica text-center md:text-left">
              That’s exactly what we believe — the right systems create lasting success.
            </p>
          </div>
        </div>

        <div className="w-full md:w-4/12 flex justify-center items-center p-8">
          <button className="bg-white text-black rounded-lg text-xl py-4 px-5 w-full sm:w-80 hover:scale-105 transition-all duration-300 border-2 border-black">
            See How Our Systems Help Other Businesses
          </button>
        </div>
      </div>

      {/* SMART SYSTEMS SECTION */}
      <div className="bg-white text-black font-helvetica flex flex-col items-center justify-start py-12 border-b-2">
        <h1 className="text-4xl sm:text-5xl uppercase font-helvetica-light mb-10 text-center">
          Smart Systems. Real Impact.
        </h1>

        <div className="flex flex-col space-y-10 md:space-y-16">
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-10 md:space-y-0">
            {/* CARD 1 */}
            <div className="w-10/12 md:w-4/12 border-2 border-black rounded-2xl h-auto p-6 hover:scale-105 transition duration-300">
              <h1 className="text-2xl uppercase font-inter-bold text-center mb-4">
                Full Web Solutions
              </h1>
              <p className="text-lg text-center leading-6">
                We build complete digital ecosystems — from elegant portfolio websites to powerful
                full-stack applications built for performance and scalability.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="w-10/12 md:w-4/12 bg-gradient-to-bl from-black via-zinc-950 to-black text-white rounded-2xl h-auto p-6 hover:scale-105 transition duration-300">
              <h1 className="text-2xl uppercase font-inter-bold text-center mb-4">
                Operations System
              </h1>
              <p className="text-lg text-center leading-6 font-helvetica-light">
                Simplify operations — manage registrations, finances, and staff from one unified
                dashboard built for efficiency.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 space-y-10 md:space-y-0">
            {/* CARD 3 */}
            <div className="w-10/12 md:w-4/12 bg-gradient-to-bl from-black via-zinc-950 to-black text-white rounded-2xl h-auto p-6 hover:scale-105 transition duration-300">
              <h1 className="text-2xl uppercase font-inter-bold text-center mb-4">
                WhatsApp AI System
              </h1>
              <p className="text-lg text-center leading-6 font-helvetica-light">
                Automate conversations and capture leads 24/7 with intelligent AI-powered WhatsApp
                bots that think and respond like humans.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="w-10/12 md:w-4/12 border-2 border-black rounded-2xl h-auto p-6 hover:scale-105 transition duration-300">
              <h1 className="text-2xl uppercase font-inter-bold text-center mb-4">
                Adaptive Systems
              </h1>
              <p className="text-lg text-center leading-6">
                Every business is unique — we create adaptive systems built around your workflow,
                automating processes and integrating tools that power your daily operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WORKFLOW SECTION */}
      <div className="bg-black text-white font-helvetica-light flex flex-col items-center py-16 px-6">
        <h1 className="text-4xl sm:text-5xl uppercase text-center font-helvetica-light">
          We Solve. You Scale.
        </h1>

        <p className="text-lg sm:text-2xl mt-6 text-center max-w-4xl">
          Our process simplifies complexity — we understand, design, and deliver intelligent
          systems that let you focus on growth, not operations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-10 w-full max-w-7xl">
          {["Understand", "Design", "Build", "Integrate", "Optimize"].map((stage, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl p-6 hover:scale-105 transition-all duration-500"
            >
              <h3 className="text-xl font-semibold mb-2">{stage}</h3>
              <p className="text-md leading-5">
                {index === 0
                  ? "We start by understanding your business, its goals, and challenges."
                  : index === 1
                  ? "We map out intelligent workflows tailored to your process."
                  : index === 2
                  ? "We develop adaptive AI-driven systems designed to automate and scale."
                  : index === 3
                  ? "We deploy and connect your system seamlessly with existing tools."
                  : "We refine continuously — making your systems smarter as you grow."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA SECTION */}
      <div className="bg-white border-t border-black py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl uppercase font-helvetica-light">
          Let’s Build Your System Together.
        </h1>

        <p className="text-xl sm:text-2xl mt-6 max-w-4xl mx-auto font-helvetica-light">
          We’re here to help businesses build smarter systems — and we’d love to show you how.
          Explore who we are, what we build, and how we can Solve for you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-10 space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-black text-white rounded-lg text-lg py-4 px-6 hover:scale-105 transition-all duration-300 w-full sm:w-80">
            Get a Free Consultation
          </button>
          <NavLink
            to="/products"
            className="bg-white text-black rounded-lg text-lg py-4 px-6 hover:scale-105 transition-all duration-300 w-full sm:w-80 border-2 border-black"
          >
            Discover How It Works
          </NavLink>
        </div>
      </div>
    </div>
  );
}


// import Spline from "@splinetool/react-spline";
// import PageBannerPlusText from "../components/BannerPlusText";
// import VideoPlusText from "../components/VideoPlusText";
// import { NavLink } from "react-router-dom";

// export default function Home(){
//     return (
//         <div className="">
//             <div className="text-5xl h-175 flex border-b-2 ">
//                 <div className="w-1/2 flex justify-center items-center h-175 ">
//                     <Spline scene="/spline/landing2.spline" />
//                     {/* <Spline scene="/spline/solve-landing-2.spline" className=""/> */}
//                 </div>
//                 <div className="w-1/2 font-helvetica-light text-7xl uppercase flex flex-col justify-center items-start ">
//                     <p>
//                         bring Systems to your Business .
//                     </p> 
//                     <p className="text-3xl text-center my-3 font-inter-medium text-zinc-950"> 
//                         Systemize. Scale. Succeed.
//                     </p>
//                     {/* <p className="text-lg w-[80%] my-3 font-helvetica text-zinc-950 normal-case leading-6"> 
//                         Empower your brand with intelligent automation, Custom management systems, and AI-driven chat solutions built to scale effortlessly.
//                     </p> */}
//                     <div className="flex space-x-2 mt-3">
//                         <NavLink to='' className="bg-black text-white rounded-lg text-lg py-2 px-5 hover:scale-105 transition-all duration-300">
//                             Get a Free Consultation
//                         </NavLink>
//                         <NavLink to='/products' className="bg-white text-black rounded-lg text-lg py-2 px-5 hover:scale-105 transition-all duration-300 border-2 border-black">
//                             Discover How It Works
//                         </NavLink>
//                     </div>
//                 </div>
//             </div>
//             {/* <div className="text-white bg-red-500 h-100">
               
//             </div> */}
//             <div className="w-screen bg-black h-135 flex">
//                 <div className="w-8/12 text-white flex flex-col justify-center items-center font-helvetica-light">
//                     <h1 className="text-5xl  uppercase px-10 font-helvetica-light">
//                         We Build Systems That Think for You.
//                     </h1>
//                     <div className="w-[95%]">
//                         <p className="px-10 text-xl mx-5 mt-10 hyphens-auto">
//                             Solve AI Systems helps businesses streamline operations with automation, AI tools, 
//                             and intelligent management systems. Our mission is simple — to turn your daily business 
//                             challenges into smooth, scalable systems that save time and drive growth.
//                         </p>
//                         {/* <p className="text-lg mt-6 px-10 mx-5 uppercase leading-5">
//                             Like James Clear says:
//                         </p> */}
//                         <p className="italic text-xl text-gray-300 px-10 mx-5 mt-2 font-noto-serif-light">
//                         Like James Clear says: “You do not rise to the level of your goals. You fall to the level of your systems.”
//                         </p>
//                         <p className="text-xl mt-6 px-10 mx-5 uppercase font-helvetica">
//                         That’s exactly what we believe, the right systems create lasting success.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="w-4/12 flex justify-center items-center p-15">
//                     <button className="bg-white text-black rounded-lg text-xl py-4 px-3 w-200 hover:scale-105 transition-all duration-300 border-2 border-black">
//                         See How Our Systems Help Other Businesses 
//                     </button>
//                 </div>
//             </div>

//             <div className="h-250 bg-white text-black font-helvetica border-1 flex flex-col items-center justify-start">
//                 <h1 className="text-5xl uppercase pt-10 my-5 px-10 font-helvetica-light">
//                     Smart Systems. Real Impact.
//                 </h1>
//                 <div className="space-y-10 mt-10">
//                 <div className="flex justify-center space-x-10 w-screen">
//                     <div className="w-4/12 pt-5 pb-10  h-80 rounded-2xl hover:scale-102 transition-all duration-400 border-2 border-black flex flex-col items-center justify-between">
//                         <h1 className="text-2xl  uppercase pt-10 px-5 font-inter-bold">
//                             Full Web Solutions
//                         </h1>
//                         <div className="flex flex-col items-center">
//                             <p className="text-xl px-10 leading-6 hyphens-auto">
//                             We build complete digital ecosystems<br/>
//                             </p>
//                             <p className="text-lg px-6 font-helvetica-light hyphens-auto leading-6 my-2">
//                             from elegant portfolio websites to powerful full-stack web applications.
//                             Designed for performance, scalability, and brand impact.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="w-4/12 h-80 rounded-2xl hover:scale-102 transition-all duration-400 border-2 border-black/10 bg-gradient-to-bl from-black via-zinc-950 to-black text-white flex flex-col items-center justify-between pb-10 px-5 ">
//                         <h1 className="text-2xl  uppercase pt-10 px-5 font-inter-bold">
//                             Operations System
//                         </h1>
//                         <div className=" flex flex-col items-center">
//                             <p className="text-xl px-10 leading-6 hyphens-auto">
//                                 All your business needs. One dashboard.
//                             </p>
//                             <p className="text-lg px-6 font-helvetica-light hyphens-auto leading-6 my-2">
//                             Simplify operations for businesses and organizations — manage registrations, attendance, finances, 
//                             and staff from one unified, easy-to-use dashboard built for efficiency.
//                             </p>
//                         </div>
               
//                     </div>
//                 </div>
//                 <div className="flex justify-center space-x-10 w-screen">
//                     <div className="w-4/12 h-80 rounded-2xl hover:scale-102 transition-all duration-400 border-2 border-black/10 bg-gradient-to-bl from-black via-zinc-950 to-black text-white flex flex-col items-center justify-between pb-10 px-5 ">
//                         <h1 className="text-2xl  uppercase pt-10 px-4 font-inter-bold">
//                             WhatsApp AI System
//                         </h1>
//                         <div className=" flex flex-col items-center">
//                             <p className="text-xl px-10 leading-6 hyphens-auto">
//                                 Automate conversations. Amplify engagement.
//                             </p>
//                             <p className="text-lg px-6 font-helvetica-light hyphens-auto leading-6 my-2">
//                                 Automate customer conversations, handle enquiries, and capture leads 24/7 with intelligent AI-powered WhatsApp bots that think and respond like humans.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="w-4/12 h-80 rounded-2xl hover:scale-102 transition-all duration-400 border-2 border-black flex flex-col items-center justify-between pb-10 px-5  ">
//                         <h1 className="text-2xl  uppercase pt-10 px-5 font-inter-bold">
//                             Adaptive Systems
//                         </h1>
//                         <div className=" flex flex-col items-center">
//                             <p className="text-xl px-5 leading-6 hyphens-auto">
//                                 Built around your business, not the other way around.
//                             </p>
//                             <p className="text-lg px-6 font-helvetica-light hyphens-auto leading-6 my-2">
//                              Every business is unique — we create adaptive systems built around your workflow, 
//                             automating processes and integrating tools that power your daily operations.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>

//             {/* Work Flow Content */}
//             <div className="h-125 bg-black text-white font-helvetica-light w-screen flex flex-col items-center ">
//                 <h1 className="text-5xl uppercase pt-10 px-10 font-helvetica-light text-white">
//                     We Solve. You Scale.
//                 </h1>
//                 <p className="px-10 text-2xl mx-5 mt-10 hyphens-auto">       
//                     Our process is built to simplify complexity — we understand, design, and deliver intelligent systems that let you focus on growth, not operations
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-[90%] my-10">
//                 <div className="bg-white text-black rounded-2xl p-6 hover:scale-105 transition-all duration-500">
//                     <h3 className="text-xl font-helvetica-bold mb-2">Understand</h3>
//                     <p className="text-black text-md leading-5">
//                         We start by understanding your business, its goals, and the real challenges behind daily operations.
//                     </p>
//                 </div>
//                 <div className="bg-white text-black rounded-2xl p-6 hover:scale-105 transition-all duration-500">
//                     <h3 className="text-xl font-semibold mb-2">Design</h3>
//                     <p className="text-black text-md leading-5">
//                         We map out intelligent workflows and system architecture tailored to your process.
//                     </p>
//                 </div>
//                 <div className="bg-white text-black rounded-2xl p-6 hover:scale-105 transition-all duration-500">
//                     <h3 className="text-xl font-semibold mb-2">Build</h3>
//                     <p className="text-black text-md leading-5">
//                         We develop adaptive AI-driven systems designed to automate and scale efficiently.
//                     </p>
//                 </div>
//                 <div className="bg-white text-black rounded-2xl p-6 hover:scale-105 transition-all duration-500">
//                     <h3 className="text-xl font-semibold mb-2">Integrate</h3>
//                     <p className="text-black text-md leading-5">
//                         We deploy and connect your system seamlessly with your existing tools and platforms.
//                     </p>
//                 </div>
//                 <div className="bg-white text-blackrounded-2xl p-6 hover:scale-105 transition-all duration-500">
//                     <h3 className="text-xl text-black font-semibold mb-2">Optimize</h3>
//                     <p className="text-black text-md leading-5">
//                         We refine continuously — making your systems smarter and more efficient as your business grows.
//                     </p>
//                 </div>
//                 </div>
//             </div>

//             <div className="h-100 bg-white border-b-2">
//                    <h1 className="text-5xl uppercase pt-15 px-10 font-helvetica-light text-black text-center">
//                     Let’s Build Your System Together.
//                     </h1>
//                     <div className="w-full flex items-center justify-center mt-20">
//                         <div className="w-8/12">
//                             <p className="px-10 text-3xl hyphens-auto font-helvetica-light ">
//                                 We’re here to help businesses build smarter systems — and we’d love to show you how.
//                                 Explore who we are, what we build, and how we can Solve for you.
//                             </p>
//                         </div>
//                         <div className="w-4/12 flex flex-col space-y-3 items-center">
//                         <button className="bg-black text-white rounded-lg text-lg py-4 px-5 hover:scale-105 transition-all duration-300 w-80">
//                             Get a Free Consultation
//                         </button>
//                         <NavLink to='/products' className="bg-white text-center text-black rounded-lg text-lg py-4 px-5 hover:scale-105 transition-all duration-300 w-80 border-2 border-black">
//                             Discover How It Works
//                         </NavLink>
//                         </div>
//                     </div>
//             </div>
//         </div>
//     )
// } 
