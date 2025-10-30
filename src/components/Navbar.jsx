import { NavLink } from "react-router-dom";

export default function Navbar(){
    return (
        // <div className="h-20 bg-gradient-to-r from-black via-zinc-900 to-zinc-950 border-b-2 border-black/10 flex items-center">
        <div className="h-20 bg-white border-b-2 border-black/10 flex items-center">
            <div className="w-6/12 flex items-center">
            <NavLink to='/'>
            <img src="public/solve-white1.png" alt="" className="h-30 mx-10" />
            {/* <p className="font-helvetica-light text-white text-3xl">Solve.</p> */}
            </NavLink>
            </div>
            <div className="text-white w-full flex">
            <div className="w-2/12">
            </div>
            <ul className="flex justify-center w-8/12 space-x-5 text-lg uppercase font-helvetica text-black">
                <NavLink to='/products'>
                    Products
                </NavLink>
                <NavLink to='/services'>
                    Services
                </NavLink>
                <NavLink to='/pricing'>
                    Pricing
                </NavLink>
                <NavLink to='/policy'>
                    Policy
                </NavLink>
                <NavLink to='/policy'>
                    About Us
                </NavLink>
                <NavLink to='/policy'>
                    Contact Us
                </NavLink>
            </ul>
            </div>
        </div>
    )
}


// import { NavLink } from "react-router-dom"

// export default function Navbar({productName = 'PRODUCT_NAME_HERE',
//     productNameClass,
//     navLinkClass ='hover:scale-110 hover:font-bold hover:border-b-2 hover:border-white transition-all duration-300 text-xl text-white',
//     outerWidthHeightColor = 'w-screen h-15',
//     navColor = 'bg-black text-white',
//     widthHeight=' w-[98%] h-full',
//     navHome ,nav1,nav2,nav3,nav4,nav5,nav6,
//     navt1,navt2,navt3,navt4,navt5,navt6}){
//     return (
//           <div className={`${outerWidthHeightColor}   flex justify-center`}>
//             <div className={`${widthHeight} ${navColor} `}>
//                 <ul className="flex justify-center items-center h-full">
//                     <div className="w-1/2 flex justify-start ">
//                     <li>
//                         <NavLink to={navHome}>
//                              <img src="public/solve.png" alt="" className="h-20" />
//                         </NavLink>
//                     </li>
//                     </div>

//                     <div className="w-1/2 flex justify-end mx-10 mr-20 space-x-10">
                
//                    {nav1 && 
//                     <li className={`${navLinkClass}`}>
//                         <NavLink to={nav1}>
//                         <h1 className="text-xl text-white">{navt1}</h1>
//                         </NavLink>
//                     </li>
//                    } 
//                    {nav2 && 
//                     <li className=''>
//                         <NavLink to={nav2}>
//                         <h1 className={`${navLinkClass}`}>{navt2}</h1>
//                         </NavLink>
//                     </li>
//                    } 
//                    {nav3 && 
//                     <li className={`${navLinkClass}`}>
//                         <NavLink to={nav3}>
//                         <h1 className="text-xl">{navt3}</h1>
//                         </NavLink>
//                     </li>
//                    } 
//                    {nav4 && 
//                     <li className={`${navLinkClass}`}>
//                         <NavLink to={nav4}>
//                         <h1 className="text-xl">{navt4}</h1>
//                         </NavLink>
//                     </li>
//                    } 
//                    {nav5 && 
//                     <li className={`${navLinkClass}`}>
//                         <NavLink to={nav5}>
//                         <h1 className="text-xl">{navt5}</h1>
//                         </NavLink>
//                     </li>
//                    } 
//                    {nav6 && 
//                     <li className={`${navLinkClass}`}>
//                         <NavLink to={nav6}>
//                         <h1 className="text-xl">{navt6}</h1>
//                         </NavLink>
//                     </li>
//                    } 
//                     </div>
//                 </ul>
//             </div>
//         </div>
//     )
// }
