import Spline from "@splinetool/react-spline";
import PageBannerPlusText from "../components/BannerPlusText";
import VideoPlusText from "../components/VideoPlusText";

export default function Home(){
    return (
        <div className="">
            <div className="text-5xl h-175 flex border-b-2 ">
                <div className="w-1/2 flex justify-center items-center h-175">
                    <Spline scene="/spline/landing2.spline" />
                </div>
                <div className="w-1/2 font-helvetica-light text-7xl uppercase flex flex-col justify-center items-start ">
                    <p>
                        bring Systems to your Business .
                    </p> 
                    <p className="text-3xl text-center my-3 font-helvetica text-zinc-950"> 
                        Systemize. Scale. Succeed.
                    </p>
                    {/* <p className="text-lg w-[80%] my-3 font-helvetica text-zinc-950 normal-case leading-6"> 
                        Empower your brand with intelligent automation, Custom management systems, and AI-driven chat solutions built to scale effortlessly.
                    </p> */}
                    <div className="flex space-x-2 mt-3">
                        <button className="bg-black text-white rounded-lg text-lg py-2 px-5 hover:scale-105 transition-all duration-300">
                            Get a Free Consultation
                        </button>
                        <button className="bg-white text-black rounded-lg text-lg py-2 px-5 hover:scale-105 transition-all duration-300 border-2 border-black">
                            Discover How It Works
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="text-white bg-red-500 h-100">
               
            </div> */}
            <div className="w-screen bg-black h-135 flex">
                <div className="w-8/12 text-white flex flex-col justify-center items-center font-helvetica-light">
                    <h1 className="text-5xl  uppercase px-10 font-helvetica-light">
                        We Build Systems That Think for You.
                    </h1>
                    <div className="w-[95%]">
                        <p className="px-10 text-xl mx-5 mt-10 hyphens-auto">
                            Solve AI Systems helps businesses streamline operations with automation, AI tools, 
                            and intelligent management systems. Our mission is simple — to turn your daily business 
                            challenges into smooth, scalable systems that save time and drive growth.
                        </p>
                        {/* <p className="text-lg mt-6 px-10 mx-5 uppercase leading-5">
                            Like James Clear says:
                        </p> */}
                        <p className="italic text-xl text-gray-300 px-10 mx-5 mt-2 font-noto-serif-light">
                        Like James Clear says: “You do not rise to the level of your goals. You fall to the level of your systems.”
                        </p>
                        <p className="text-xl mt-6 px-10 mx-5 uppercase font-helvetica">
                        That’s exactly what we believe, the right systems create lasting success.
                        </p>
                    </div>
                </div>
                <div className="w-4/12 flex justify-center items-center p-15">
                    <button className="bg-white text-black rounded-lg text-xl py-2 px-3 w-200 hover:scale-105 transition-all duration-300 border-2 border-black">
                        See How Our Systems Help Other Businesses 
                    </button>
                </div>
            </div>

            <div className="h-250 bg-white text-black font-helvetica border-1 flex flex-col items-center justify-start">
                <h1 className="text-5xl uppercase pt-10 my-5 px-10 font-helvetica-light">
                    Smart Systems. Real Impact.
                </h1>
                <div className="space-y-10 mt-10">
                <div className="flex justify-center space-x-10 w-screen">
                    <div className="w-4/12 h-80 rounded-2xl hover:scale-102 transition-all duration-400 border-2 border-black flex flex-col items-center">
                        <h1 className="text-2xl  uppercase pt-10 px-5 font-helvetica">
                            Full Web Solutions
                        </h1>
                    </div>
                    <div className="w-4/12 h-80 rounded-2xl hover:scale-102 transition-all duration-400 border-2 border-black/10 bg-gradient-to-bl from-black via-zinc-950 to-black text-white flex justify-center">
                        <h1 className="text-2xl  uppercase pt-10 px-5 font-helvetica-light">
                            Sports Facility Management System
                            
                        </h1>
                    </div>
                </div>
                <div className="flex justify-center space-x-10 w-screen">
                    <div className="w-4/12 h-80 rounded-2xl hover:scale-102 transition-all duration-400 border-2 border-black/10 bg-gradient-to-bl from-black via-zinc-950 to-black text-white flex justify-center">
                        <h1 className="text-2xl  uppercase pt-10 px-5 font-helvetica-light">
                            WhatsApp AI Chatbot for Businesses
                        </h1>
                    </div>
                    <div className="w-4/12 h-80 rounded-2xl hover:scale-102 transition-all duration-400 border-2 border-black flex justify-center ">
                        <h1 className="text-2xl  uppercase pt-10 px-5 font-helvetica">
                            Adaptive Systems
                        </h1>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
} 