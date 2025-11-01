
// import { Instagram, Linkedin, Mail } from "lucide-react";
// import { NavLink } from "react-router-dom";

// export default function Footer() {
//   return (
//     <div className="w-screen bg-white border-t border-black/10">
//       {/* Main Footer Section */}
//       <div className="flex flex-col md:flex-row h-auto md:h-80">
//         {/* Left Tagline Section */}
//         <div className="w-full md:w-2/3 flex justify-center items-center py-10 md:py-0 px-6 text-center md:text-left">
//           <NavLink
//             to="/"
//             className="flex flex-col md:flex-row md:space-x-2 justify-center items-center md:items-start"
//           >
//             <p className="text-4xl md:text-5xl font-inter-bold uppercase bg-gradient-to-r from-black via-zinc-600 to-black bg-clip-text text-transparent">
//               Turn Work
//             </p>
//             <p className="text-4xl md:text-5xl font-inter-bold uppercase bg-gradient-to-r from-black via-zinc-700 to-black bg-clip-text text-transparent">
//               into Systems.
//             </p>
//             <p className="text-4xl md:text-5xl font-inter-bold uppercase bg-gradient-to-r from-black via-zinc-700 to-black bg-clip-text text-transparent">
//               With Solve.
//             </p>
//           </NavLink>
//         </div>
// <<<<<<< HEAD
        
//     )
// }
// =======

//         {/* Right Links Section */}
//         <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-black py-10 md:py-0">
//           <div className="w-full flex flex-col sm:flex-row justify-center items-center">
//             {/* Internal Links */}
//             <div className="sm:w-1/2 flex flex-col items-center space-y-3 text-lg font-helvetica-medium mb-6 sm:mb-0">
//               <a href="/about" className="hover:text-black/70 transition">
//                 About
//               </a>
//               <a href="/services" className="hover:text-black/70 transition">
//                 Services
//               </a>
//               <a href="/pricing" className="hover:text-black/70 transition">
//                 Pricing
//               </a>
//               <a href="/contact" className="hover:text-black/70 transition">
//                 Contact
//               </a>
//             </div>

//             {/* Social Links */}
//             <div className="sm:w-1/2 flex flex-col items-center space-y-4 text-black text-xl font-helvetica-medium">
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-black transition flex items-center space-x-2"
//               >
//                 <Instagram size={20} strokeWidth={1.5} />
//                 <span className="text-sm font-helvetica-light">Instagram</span>
//               </a>

//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-black transition flex items-center space-x-2"
//               >
//                 <Linkedin size={20} strokeWidth={1.5} />
//                 <span className="text-sm font-helvetica-light">LinkedIn</span>
//               </a>

//               <a
//                 href="mailto:solve.siddharthanbumani@gmail.com"
//                 className="hover:text-black transition flex items-center space-x-2 text-center"
//               >
//                 <Mail size={20} strokeWidth={1.5} />
//                 <span className="text-sm font-helvetica-light break-words text-center">
//                   solve.siddharthanbumani@gmail.com
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Copyright Bar */}
//       <div className="h-20 bg-black font-helvetica text-base md:text-2xl flex justify-center items-center text-white text-center px-4">
//         &copy; {new Date().getFullYear()} Solve AI Systems, All Rights Reserved
//       </div>
//     </div>
//   );
// }
// >>>>>>> 769ade7 (Solve - Official Website V1)

import { Instagram, Linkedin, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-screen bg-white border-t border-black/10">
      {/* Main Footer Section */}
      <div className="flex flex-col md:flex-row h-auto md:h-80">
        {/* Left Tagline Section */}
        <div className="w-full md:w-2/3 flex justify-center items-center py-10 md:py-0 px-6 text-center md:text-left">
          <NavLink
            to="/"
            className="flex flex-col md:flex-row md:space-x-2 justify-center items-center md:items-start"
          >
            <p className="text-4xl md:text-5xl font-inter-bold uppercase bg-gradient-to-r from-black via-zinc-600 to-black bg-clip-text text-transparent">
              Turn Work
            </p>
            <p className="text-4xl md:text-5xl font-inter-bold uppercase bg-gradient-to-r from-black via-zinc-700 to-black bg-clip-text text-transparent">
              into Systems.
            </p>
            <p className="text-4xl md:text-5xl font-inter-bold uppercase bg-gradient-to-r from-black via-zinc-700 to-black bg-clip-text text-transparent">
              With Solve.
            </p>
          </NavLink>
        </div>

        {/* Right Links Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-black py-10 md:py-0">
          <div className="w-full flex flex-col sm:flex-row justify-center items-center">
            {/* Internal Links */}
            <div className="sm:w-1/2 flex flex-col items-center space-y-3 text-lg font-helvetica-medium mb-6 sm:mb-0">
              <a href="/about" className="hover:text-black/70 transition">
                About
              </a>
              <a href="/services" className="hover:text-black/70 transition">
                Services
              </a>
              <a href="/pricing" className="hover:text-black/70 transition">
                Pricing
              </a>
              <a href="/contact" className="hover:text-black/70 transition">
                Contact
              </a>
            </div>

            {/* Social Links */}
            <div className="sm:w-1/2 flex flex-col items-center space-y-4 text-black text-xl font-helvetica-medium">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition flex items-center space-x-2"
              >
                <Instagram size={20} strokeWidth={1.5} />
                <span className="text-sm font-helvetica-light">Instagram</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition flex items-center space-x-2"
              >
                <Linkedin size={20} strokeWidth={1.5} />
                <span className="text-sm font-helvetica-light">LinkedIn</span>
              </a>

              <a
                href="mailto:solve.siddharthanbumani@gmail.com"
                className="hover:text-black transition flex items-center space-x-2 text-center"
              >
                <Mail size={20} strokeWidth={1.5} />
                <span className="text-sm font-helvetica-light break-words text-center">
                  solve.siddharthanbumani@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="h-20 bg-black font-helvetica text-base md:text-2xl flex justify-center items-center text-white text-center px-4">
        &copy; {new Date().getFullYear()} Solve AI Systems, All Rights Reserved
      </div>
    </div>
  );
}
