import Spline from "@splinetool/react-spline";
import { CheckCircleIcon } from "lucide-react";


export default function Pricing(){
    return (
        <div className="h-screen w-screen bg-white">
            <div className="flex border-b-1">
                <div className="w-8/12 flex justify-center items-center">
                    <h1 className="text-8xl font-helvetica-light uppercase">
                        Pricing
                    </h1>
                </div>
                <div className="w-6/12 h-100 ">
                    <Spline scene="/spline/knots_no_zoom.splinecode" />
                </div>
            </div>
            {/* Pricing Fields */}
            <div className=" bg-black text-white flex flex-col items-center justify-center">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* ===== Basic Plan ===== */}
                <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Top section */}
                <div className="bg-gradient-to-b from-white to-zinc-200 text-black p-8 flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-2">Basic Plan</h2>
                    <h3 className="text-5xl font-bold mb-2">$10</h3>
                    <p className="text-zinc-600 mb-6 text-center">
                    Basic features for up to 100 attempts a month
                    </p>
                    <button className="border border-black hover:bg-black hover:text-white transition-all px-6 py-2 rounded-full font-medium">
                    Current plan
                    </button>
                </div>

                {/* Bottom section */}
                <div className="bg-black text-zinc-400 p-8">
                    <h4 className="text-sm mb-4 uppercase tracking-wide text-white font-helvetica-medium">
                    Features
                    </h4>
                    <ul className="space-y-3">
                    <li className="flex items-center">
                        <CheckCircleIcon size={18} className="text-white mr-2" /> Access to basic features
                    </li>
                    <li className="flex items-center">
                        <CheckCircleIcon size={18} className="text-white  mr-2" /> Basic reporting & analytics
                    </li>
                    <li className="flex items-center">
                        <CheckCircleIcon size={18} className="text-white  mr-2" /> Up to 10 individual users
                    </li>
                    <li className="flex items-center">
                        <CheckCircleIcon  size={18} className="text-white  mr-2" /> 200 GB data per user
                    </li>
                    <li className="flex items-center">
                        <CheckCircleIcon size={18} className="text-white  mr-2" /> Chat & email support
                    </li>
                    </ul>
                </div>
                </div>

        {/* ===== Business Plan ===== */}
        <div className="rounded-3xl overflow-hidden border border-zinc-600 shadow-2xl scale-105 transition-all duration-300">
          <div className="bg-gradient-to-b from-white to-zinc-200 text-black p-8 flex flex-col items-center relative">
            <span className="bg-black text-white text-xs px-3 py-1 rounded-full mb-3 absolute top-4 right-4">
              Popular
            </span>
            <h2 className="text-xl font-semibold mb-2">Business Plan</h2>
            <h3 className="text-5xl font-bold mb-2">$234</h3>
            <p className="text-zinc-600 mb-6 text-center">
              Best for growing businesses with automation needs
            </p>
            <button className="bg-black text-white hover:bg-zinc-800 transition-all px-6 py-2 rounded-full font-medium">
              Join today
            </button>
          </div>

          <div className="bg-black text-zinc-400 p-8">
            <h4 className="text-sm mb-4 uppercase tracking-wide text-white font-helvetica-medium">Features</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircleIcon size={18} className="text-white mr-2" /> Access to basic features
              </li>
              <li className="flex items-center">
                <CheckCircleIcon size={18} className="text-white  mr-2" /> Basic reporting & analytics
              </li>
              <li className="flex items-center">
                <CheckCircleIcon size={18} className="text-white  mr-2" /> Up to 10 individual users
              </li>
              <li className="flex items-center">
                <CheckCircleIcon  size={18} className="text-white  mr-2" /> 200 GB data per user
              </li>
              <li className="flex items-center">
                <CheckCircleIcon size={18} className="text-white  mr-2" /> Chat & email support
              </li>
            </ul>
          </div>
        </div>

        {/* ===== Enterprise Plan ===== */}
        <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="bg-gradient-to-b from-white to-zinc-200 text-black p-8 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">Enterprise Plan</h2>
            <h3 className="text-5xl font-bold mb-2">$40</h3>
            <p className="text-zinc-600 mb-6 text-center">
              Advanced features + unlimited users
            </p>
            <button className="border border-black hover:bg-black hover:text-white transition-all px-6 py-2 rounded-full font-medium">
              Get started
            </button>
          </div>

          <div className="bg-black text-zinc-400 p-8">
            <h4 className="text-sm mb-4 uppercase tracking-wide text-white font-helvetica-medium">Features</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircleIcon size={18} className="text-white mr-2" /> Access to basic features
              </li>
              <li className="flex items-center">
                <CheckCircleIcon size={18} className="text-white  mr-2" /> Basic reporting & analytics
              </li>
              <li className="flex items-center">
                <CheckCircleIcon size={18} className="text-white  mr-2" /> Up to 10 individual users
              </li>
              <li className="flex items-center">
                <CheckCircleIcon  size={18} className="text-white  mr-2" /> 200 GB data per user
              </li>
              <li className="flex items-center">
                <CheckCircleIcon size={18} className="text-white  mr-2" /> Chat & email support
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
        </div>
    )
}