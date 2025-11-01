import Spline from "@splinetool/react-spline";
import { CheckCircleIcon } from "lucide-react";

export default function Pricing() {
  return (
    <div className="bg-white text-black w-screen overflow-hidden">
      {/* Top Section */}
      <div className="min-h-screen w-screen bg-white">
        <div className="flex border-b border-black/10">
          <div className="w-8/12 flex justify-center items-center">
            <h1 className="text-8xl font-helvetica-light uppercase">Pricing</h1>
          </div>
          <div className="w-6/12 h-full">
            <Spline scene="/spline/payments_pricing.splinecode" />
          </div>
        </div>

        {/* Amber Section */}
        <div className="flex flex-col items-center bg-white py-16 border-b border-black/10">
          <h1 className="text-5xl font-helvetica-medium uppercase px-10 font-helvetica-light mt-10 text-center">
            Operations Systems Pricing
          </h1>

          {/* Pricing Cards */}
          <div className="w-full flex flex-wrap gap-8 justify-center items-start py-12">
            {/* ======= Plan 1 ======= */}
            <div className="flex flex-col items-center">
              <div className="h-60 border border-black/10 rounded-t-3xl w-96 bg-white flex flex-col justify-center items-center shadow-sm">
                <h2 className="text-xl font-semibold mb-1">Basic Plan</h2>
                <h3 className="text-5xl font-bold mb-2">$10</h3>
                <p className="text-zinc-600 mb-3 text-center px-4">
                  Basic features for up to 100 entries a month
                </p>
                <button className="border border-black hover:bg-black hover:text-white transition-all px-6 py-2 rounded-full font-medium">
                  Current plan
                </button>
              </div>

              <div className="min-h-[280px] border border-zinc-900 shadow-lg rounded-b-3xl w-96 bg-black text-white flex flex-col justify-center items-center py-8">
                <h4 className="text-xl mb-4 uppercase tracking-wide font-helvetica-medium">
                  Features
                </h4>
                <ul className="space-y-3 text-lg font-helvetica-light px-6">
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> Access to basic features
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> Basic reporting & analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> Up to 10 individual users
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> 200 GB data per user
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> Chat & email support
                  </li>
                </ul>
              </div>
            </div>

            {/* ======= Plan 2 ======= */}
            <div className="flex flex-col items-center">
              <div className="h-60 border border-black/10 rounded-t-3xl w-96 bg-white flex flex-col justify-center items-center shadow-sm">
                <h2 className="text-xl font-semibold mb-1">Pro Plan</h2>
                <h3 className="text-5xl font-bold mb-2">$49</h3>
                <p className="text-zinc-600 mb-3 text-center px-4">
                  For growing businesses that need advanced control
                </p>
                <button className="border border-black hover:bg-black hover:text-white transition-all px-6 py-2 rounded-full font-medium">
                  Get Started
                </button>
              </div>

              <div className="min-h-[280px] border border-zinc-900 shadow-lg rounded-b-3xl w-96 bg-black text-white flex flex-col justify-center items-center py-8">
                <h4 className="text-xl mb-4 uppercase tracking-wide font-helvetica-medium">
                  Features
                </h4>
                <ul className="space-y-3 text-lg font-helvetica-light px-6">
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> Unlimited user accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> Custom analytics dashboard
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> WhatsApp automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> API integration access
                  </li>
                </ul>
              </div>
            </div>

            {/* ======= Plan 3 ======= */}
            <div className="flex flex-col items-center">
              <div className="h-60 border border-black/10 rounded-t-3xl w-96 bg-white flex flex-col justify-center items-center shadow-sm">
                <h2 className="text-xl font-semibold mb-1">Enterprise Plan</h2>
                <h3 className="text-5xl font-bold mb-2">$99</h3>
                <p className="text-zinc-600 mb-3 text-center px-4">
                  Full access, customization, and priority-level systems
                </p>
                <button className="border border-black hover:bg-black hover:text-white transition-all px-6 py-2 rounded-full font-medium">
                  Get Started
                </button>
              </div>

              <div className="min-h-[280px] border border-zinc-900 shadow-lg rounded-b-3xl w-96 bg-black text-white flex flex-col justify-center items-center py-8">
                <h4 className="text-xl mb-4 uppercase tracking-wide font-helvetica-medium">
                  Features
                </h4>
                <ul className="space-y-3 text-lg font-helvetica-light px-6">
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> Full management dashboard
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> 24/7 support & monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> AI-driven automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon size={18} className="text-white mr-2" /> Enterprise-grade security
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End */}
    </div>
  );
}
