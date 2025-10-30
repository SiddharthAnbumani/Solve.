import PageBannerPlusText from "../components/BannerPlusText";
import VideoPlusText from "../components/VideoPlusText";

export default function Home(){
    return (
        <div className="">
            <div className="text-5xl h-175 flex border-b-2 ">
                <div className="w-1/2 flex justify-center items-center h-175">
                    {/* <img src="/circuit.png" alt="" className="grayscale h-150"/> */}
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
            <div className="w-screen bg-black h-125 flex">
                <div className="w-8/12 text-white flex flex-col justify-center items-center font-helvetica-light">
                    <h1 className="text-5xl  uppercase pt-10 px-10 font-helvetica-light">
                        We Build Systems That Think for You.
                    </h1>
                    <div className="w-[95%]">
                        <p className="px-10 text-xl mx-5 mt-10 hyphens-auto">
                            Solve AI Systems helps businesses streamline operations with automation, AI tools, 
                            and intelligent management systems. Our mission is simple — to turn your daily business 
                            challenges into smooth, scalable systems that save time and drive growth.
                        </p>
                        <p className="text-lg mt-6 px-10 mx-5 uppercase leading-5">
                            Like James Clear says:
                        </p>
                        <p className="italic text-2xl text-gray-300 px-10 mx-5 font-noto-serif-light">
                        “You do not rise to the level of your goals. You fall to the level of your systems.”
                        </p>
                        <p className="text-xl mt-6 px-10 mx-5 uppercase font-helvetica">
                        That’s exactly what we believe, the right systems create lasting success.
                        </p>
                    </div>
                </div>
                <div className="w-4/12 flex justify-center items-end p-15">
                    <button className="bg-white text-black rounded-lg text-xl py-2 px-3 w-200 hover:scale-105 transition-all duration-300 border-2 border-black">
                        See How Our Systems Help Other Businesses 
                    </button>
                </div>
            </div>
        </div>
    )
} 