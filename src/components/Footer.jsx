export default function Footer(){
    return (
        <div className="w-screen h-100 bg-white border-t-black/10">
            <div className="w-1/3 h-40"></div>
            <div className="w-1/3 h-40"></div>
            <div className="w-1/3 h-40"></div>
            <div className="h-20 border-2 border-black/10 font-helvetica text-2xl flex justify-center items-center text-zinc-800">
            &copy; {new Date().getFullYear()} Solve AI Systems, All Rights Reserved
            </div>
        </div>
    )
}