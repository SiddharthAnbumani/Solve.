import { Instagram, Linkedin, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";


export default function Footer(){
    return (
        <div className="w-screen h-100 bg-white border-t-black/10 border-t-1 ">
            <div className="flex h-80">
                <div className="w-2/3  flex justify-center items-center">
                    <NavLink to='/' className="text-5xl font-inter-bold uppercase flex space-x-2 ">
                        <p className="text-5xl font-inter-bold uppercase bg-gradient-to-r from-black via-zinc-600 to-black bg-clip-text text-transparent">
                            Turn Work
                        </p>
                        <p className="text-5xl font-inter-bold uppercase bg-gradient-to-r from-black via-zinc-700 to-black bg-clip-text text-transparent">
                            into Systems.
                        </p>
                        <p className="text-5xl font-inter-bold uppercase bg-gradient-to-r from-black via-zinc-700 to-black bg-clip-text text-transparent">
                            With Solve.
                        </p>
                    </NavLink>
                </div>
                <div className="w-1/3 h-80 flex flex-col justify-center text-black m">
  {/* Links */}
                <div className="w-full flex">
                    <div className="w-5/12 flex flex-col items-center space-y-4 text-lg font-helvetica-medium">
                        <a href="/about" className="hover:text-black/70 transition">About</a>
                        <a href="/services" className="hover:text-black/70 transition">Services</a>
                        <a href="/pricing" className="hover:text-black/70 transition">Pricing</a>
                        <a href="/contact" className="hover:text-black/70 transition">Contact</a>
                    </div>
                    <div className="w-5/12 flex flex-col items-center space-y-4 mt-4 text-black text-xl font-helvetica-medium">
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
                        href="mailto:connect@solve.com"
                        className="hover:text-black transition flex items-center space-x-2"
                    >
                        <Mail size={20} strokeWidth={1.5} />
                        <span className="text-sm font-helvetica-light">solve.siddharthanbumani@gmail.com</span>
                    </a>
                    </div>
                </div>
            </div>
            </div>
            <div className="h-20  bg-black border-2 border-black/10 font-helvetica text-2xl flex justify-center items-center text-white">
            &copy; {new Date().getFullYear()} Solve AI Systems, All Rights Reserved
            </div>
        </div>
        
    )
}