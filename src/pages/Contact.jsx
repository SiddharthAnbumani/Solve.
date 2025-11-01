import Spline from "@splinetool/react-spline";

export default function Contact(){
    return (
        <div className="h-100 bg-white w-screem">
             <div className="flex border-b border-black/10">
          <div className="w-8/12 flex justify-center items-center">
            <h1 className="text-8xl font-helvetica-light uppercase">Contact</h1>
          </div>
          <div className="w-6/12 h-full">
            <Spline scene="/spline/knots_no_zoom.splinecode" />
          </div>
        </div>
        </div>
    )
}