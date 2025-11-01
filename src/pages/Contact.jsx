// import Spline from "@splinetool/react-spline";
// import { Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";

// export default function Contact(){
//     return (
//         <div className=" bg-white w-screem">
//             <div className="flex border-b border-black/10">
//                 <div className="w-8/12 flex justify-center items-center h-80">
//                     <h1 className="text-5xl font-helvetica-light uppercase">Build with Solve.</h1>
//                     <p>

//                     </p>
//                 </div>
//                 <div className="w-6/12 h-80">
//                     <Spline scene="/spline/knots_no_zoom.splinecode" />
//                 </div>
//             </div>
//             <div className="h-200 bg-white w-full flex">
//                 <div className="w-6/12 border-r-1 border-black/10 h-full">
//                 {/* Heading Section  */}
//                     <div className="flex flex-col items-center">
//                     <h1 className="text-4xl font-inter-bold uppercase text-center w-[80%] pt-15" >
//                         We’re ready when you are. Let’s build your system.
//                         </h1>
//                         <p className="px-10 text-2xl mx-5 mt-10 hyphens-auto font-helvetica-light">
//                             Have a project, question, or idea in mind?
//                         </p>
//                         <p className="px-10 text-2xl mx-5 hyphens-auto font-helvetica-light leading-5">
//                             Let’s connect and explore how we can build smarter together.
//                         </p>
//                     </div>
//                     {/* Socials grid  */}
//                     <div className=" grid grid-cols-2 my-30 space-y-4 justify-items-center">
                      
//                     <div className="h-40 border border-black/10 w-4/5 max-w-xl flex flex-col items-center justify-center rounded-2xl shadow-sm">
//                         <h1 className="text-2xl  font-helvetica-medium uppercase text-center">
//                         Talk to us directly:
//                         </h1>
//                         <div className="flex justify-center pt-2 space-x-4">
//                         <Phone className="w-6 h-6" />
//                         <p className="text-xl font-helvetica-light">+91 7305175711</p>
//                         </div>
//                     </div>

//                     {/* Email */}
//                     <div className="h-40 border border-black/10 w-4/5 max-w-xl flex flex-col items-center justify-center rounded-2xl shadow-sm">
//                         <h1 className="text-2xl  font-helvetica-medium uppercase text-center">
//                         Write to us:
//                         </h1>
//                         <div className="flex justify-center pt-2 space-x-4">
//                         <Mail className="w-6 h-6" />
//                         <p className="text-xl font-helvetica-light">
//                             connect@solveaisystems.com
//                         </p>
//                         </div>
//                     </div>
//                     <div className="h-40 border border-black/10 w-4/5 max-w-xl flex flex-col items-center justify-center rounded-2xl shadow-sm">
//                         <h1 className="text-2xl font-helvetica-medium uppercase text-center">
//                         Write to us:
//                         </h1>
//                         <div className="flex justify-center pt-2 space-x-4">
//                         <Mail className="w-6 h-6" />
//                         <p className="text-xl font-helvetica-light">
//                             connect@solveaisystems.com
//                         </p>
//                         </div>
//                     </div>

//                     {/* Social Media */}
//                     <div className="h-40 border border-black/10 w-4/5 max-w-xl flex flex-col items-center justify-center rounded-2xl shadow-sm">
//                         <h1 className="text-2xl  font-helvetica-medium uppercase text-center">
//                         Connect with us:
//                         </h1>
//                         <div className="flex justify-center pt-4 space-x-8">
//                         <a
//                             href="https://instagram.com/solveaisystems"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:opacity-70 transition"
//                         >
//                             <Instagram className="w-6 h-6" />
//                         </a>
//                         <a
//                             href="https://linkedin.com/company/solveaisystems"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:opacity-70 transition"
//                         >
//                             <Linkedin className="w-6 h-6" />
//                         </a>
//                         <a
//                             href="https://facebook.com/solveaisystems"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:opacity-70 transition"
//                         >
//                             <Facebook className="w-6 h-6" />
//                         </a>
//                         </div>
//                     </div>

//                     </div>
//                 </div>
//                 <div className="w-6/12 border-b-1 border-black/10">
//                  <div className="w-full h-[800px] flex flex-col items-center mt-10 px-6">
//       <div className="w-full max-w-2xl border-black/10 rounded-3xl shadow-sm p-8">
//         <h1 className="text-3xl font-inter-bold uppercase text-center mb-6">
//           Send a Message
//         </h1>

//         <form className="flex flex-col space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-black font-helvetica mb-1 text-base">
//               Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               className="w-full border border-black/20 rounded-md px-3 py-2 text-black placeholder-zinc-400 font-helvetica focus:outline-none focus:border-black transition"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-black font-helvetica mb-1 text-base">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               className="w-full border border-black/20 rounded-md px-3 py-2 text-black placeholder-zinc-400 font-helvetica focus:outline-none focus:border-black transition"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-black font-helvetica mb-1 text-base">
//               Phone
//             </label>
//             <input
//               type="tel"
//               placeholder="+91 9876543210"
//               className="w-full border border-black/20 rounded-md px-3 py-2 text-black placeholder-zinc-400 font-helvetica focus:outline-none focus:border-black transition"
//             />
//           </div>

//           {/* Products Interested In */}
//           <div>
//             <label className="block text-black font-helvetica mb-1 text-base">
//               Products Interested In
//             </label>
//             <select
//               className="w-full border border-black/20 rounded-md px-3 py-2 text-black placeholder-zinc-400 font-helvetica focus:outline-none focus:border-black transition"
//               defaultValue=""
//             >
//               <option value="" disabled>
//                 Select a product or service
//               </option>
//               <option value="whatsapp-systems">WhatsApp Systems</option>
//               <option value="operations-systems">Operations Systems</option>
//               <option value="adaptive-systems">Adaptive Systems</option>
//               <option value="webstudio">WebStudio</option>
//               <option value="digital-marketing">Digital Marketing</option>
//               <option value="others">Others</option>
//             </select>
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block text-black font-helvetica mb-1 text-base">
//               Message
//             </label>
//             <textarea
//               placeholder="Tell us about your project or idea..."
//               rows="3"
//               className="w-full border border-black/20 rounded-md px-3 py-2 text-black placeholder-zinc-400 font-helvetica focus:outline-none focus:border-black transition resize-none"
//             ></textarea>
//           </div>

//           {/* Submit */}
//           <div className="flex justify-center pt-4">
//             <button
//               type="submit"
//               className="bg-black text-white font-helvetica px-8 py-2 rounded-lg text-base uppercase tracking-wide hover:bg-zinc-800 transition-all duration-300"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }


import Spline from "@splinetool/react-spline";
import { Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white w-screen overflow-hidden">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row border-b border-black/10 lg:mt-0 sm:mt-20">
        <div className="w-full lg:w-8/12 flex flex-col justify-center items-center text-center px-6 py-10 sm:py-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-helvetica-medium uppercase mb-4">
            Build with Solve.
          </h1>
        </div>
        <div className="w-full lg:w-6/12 h-72 sm:h-96 lg:h-80">
          <Spline scene="/spline/knots_no_zoom.splinecode" />
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="w-full flex flex-col lg:flex-row bg-white border-t border-black/10">
        {/* Left Section (Info + Socials) */}
        <div className="w-full lg:w-6/12 border-b lg:border-b-0 lg:border-r border-black/10 py-12 sm:py-20 flex flex-col items-center">
          {/* Heading */}
          <div className="flex flex-col items-center px-6 sm:px-10 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-inter-bold uppercase mb-8 sm:mb-10 leading-tight">
              We’re ready when you are. Let’s build your system.
            </h1>
            <p className="text-lg sm:text-xl font-helvetica-light mb-2">
              Have a project, question, or idea in mind?
            </p>
            <p className="text-lg sm:text-xl font-helvetica-light">
              Let’s connect and explore how we can build smarter together.
            </p>
          </div>

          {/* Social Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 sm:mt-20 w-full max-w-3xl px-4 sm:px-8">
            {/* Phone */}
            <div className="h-36 sm:h-40 border border-black/10 w-full flex flex-col items-center justify-center rounded-2xl shadow-sm">
              <h1 className="text-xl sm:text-2xl font-helvetica-medium uppercase text-center mb-2">
                Talk to us directly:
              </h1>
              <div className="flex justify-center items-center space-x-3">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-base sm:text-xl font-helvetica-light">
                  +91 7305175711
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="h-36 sm:h-40 border border-black/10 w-full flex flex-col items-center justify-center rounded-2xl shadow-sm">
              <h1 className="text-xl sm:text-2xl font-helvetica-medium uppercase text-center mb-2">
                Write to us:
              </h1>
              <div className="flex justify-center items-center space-x-3">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-base sm:text-xl font-helvetica-light">
                  connect@solveaisystems.com
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="h-36 sm:h-40 border border-black/10 w-full flex flex-col items-center justify-center rounded-2xl shadow-sm sm:col-span-2">
              <h1 className="text-xl sm:text-2xl font-helvetica-medium uppercase text-center mb-3">
                Connect with us:
              </h1>
              <div className="flex justify-center pt-2 sm:pt-4 space-x-6 sm:space-x-8">
                <a
                  href="https://instagram.com/solveaisystems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/company/solveaisystems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com/solveaisystems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full lg:w-6/12 py-12 sm:py-20 flex justify-center items-center">
          <div className="w-full max-w-2xl border border-black/10 rounded-3xl shadow-sm p-6 sm:p-8 mx-4">
            <h1 className="text-2xl sm:text-3xl font-inter-bold uppercase text-center mb-8">
              Send a Message
            </h1>

            <form className="flex flex-col space-y-4 sm:space-y-5">
              {/* Name */}
              <div>
                <label className="block text-black font-helvetica mb-1 text-base">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-black/20 rounded-md px-3 py-2 text-black placeholder-zinc-400 font-helvetica focus:outline-none focus:border-black transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-black font-helvetica mb-1 text-base">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-black/20 rounded-md px-3 py-2 text-black placeholder-zinc-400 font-helvetica focus:outline-none focus:border-black transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-black font-helvetica mb-1 text-base">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full border border-black/20 rounded-md px-3 py-2 text-black placeholder-zinc-400 font-helvetica focus:outline-none focus:border-black transition"
                />
              </div>

              {/* Products Interested In */}
              <div>
                <label className="block text-black font-helvetica mb-1 text-base">
                  Products Interested In
                </label>
                <select
                  className="w-full border border-black/20 rounded-md px-3 py-2 text-black font-helvetica focus:outline-none focus:border-black transition"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a product or service
                  </option>
                  <option value="whatsapp-systems">WhatsApp Systems</option>
                  <option value="operations-systems">Operations Systems</option>
                  <option value="adaptive-systems">Adaptive Systems</option>
                  <option value="webstudio">WebStudio</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="others">Others</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-black font-helvetica mb-1 text-base">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your project or idea..."
                  rows="3"
                  className="w-full border border-black/20 rounded-md px-3 py-2 text-black placeholder-zinc-400 font-helvetica focus:outline-none focus:border-black transition resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-black text-white font-helvetica px-8 py-2 rounded-lg text-base uppercase tracking-wide hover:bg-zinc-800 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
