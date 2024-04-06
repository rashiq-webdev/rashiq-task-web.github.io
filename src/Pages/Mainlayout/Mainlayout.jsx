import React, { useState } from 'react'
import SideNav from '../../Components/SideNav/SideNav'
import Home from '../HomePage/Home'

export default function Mainlayout() {
    let [isOpen, setIsOpen] = useState(true);
    const handleSideNav = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div class="flex ">
            <div class={` text-white transition-all h-screen  xs:h-120vh ${isOpen ? 'md:w-[42%] lg:w-[23%] sm:w-[55%] xs:w-[100%] ' : 'w-0'} `}>
                <SideNav setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>

            <div class={`relative transition-all  flex-1 `}>
                <div onClick={handleSideNav} className={`btn btn-xs ${isOpen ? 'xs:hidden' : ''} sm:block bg-gray-200 absolute text-sm text-bold left-[-10px] text-[#c29c82] top-20 ${!isOpen ? 'animate-pulse' : ''}`}>{isOpen ? '<<' : '>>'}</div>
                <Home />
            </div>
        </div>
    )
}
