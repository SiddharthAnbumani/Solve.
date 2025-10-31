import Spline from "@splinetool/react-spline";
import { CheckCircleIcon } from "lucide-react";

export default function Canvas(){
    return (
        <div className="h-screen w-screen flex justify-center items-center">

            <div className="w-100 h-150 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Top section */}
                <div className="bg-gradient-to-b from-white to-zinc-200 text-black p-8 flex flex-col items-center h-5/12">
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
                <div className="bg-white text-black p-8 h-7/12">
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
        </div>
    )
}