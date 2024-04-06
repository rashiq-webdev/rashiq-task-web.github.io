import React from 'react'
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoShareAndroid } from "react-icons/go";
import { BsEye } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function SideNav(props) {
    const { isOpen, setIsOpen } = props;
    const handleSideNav = () => {
        setIsOpen(!isOpen);
    }
    return (

        <div className="flex bg-[#f3f3f3] relative">
            <div className="menu p-4 w-128 h-screen  xs:h-120vh  text-base-content">
                <div className='flex flex-col gap-3'>
                    <div className='my-5 relative'>
                        <button className='btn-color btn-sm text-[#c29c82] text-sm font-bold py-2 px-2 rounded-full w-10 h-10 '><MdOutlineArrowBackIosNew size={20} /></button>
                        <div onClick={handleSideNav} className={`btn btn-sm xs:block sm:hidden bg-gray-200 absolute text-lg text-bold right-0 text-[#c29c82] top-2 animate-pulse`}>{isOpen ? '<<' : '>>'}</div>

                    </div>
                    <h1 className='text-4xl head-font'> MAITREYA BUDDHA <br /> IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)</h1>
                    <div className='my-5'>
                        <div className='flex flex-row gap-5'>
                            <div className='flex justify-center flex-col gap-2 '>
                                <button className='btn-color btn-sm text-black text-sm font-bold py-2 px-2 rounded-full w-10 h-10 '><IoIosHeartEmpty size={25} /></button>
                                <div className='text-center text-gray-800'>0</div>
                            </div>
                            <div className='flex justify-center flex-col gap-2 '>
                                <button className='btn-color btn-sm text-black text-sm font-bold py-2 px-2 rounded-full w-10 h-10'><GoShareAndroid size={25} /></button>
                                <div className='text-center text-gray-800'>120</div>
                            </div>
                            <div className='flex justify-center flex-col gap-2 '>
                                <button className='btn-color btn-sm text-black text-sm font-bold py-2 px-2 rounded-full w-10 h-10 '><BsEye size={25} /></button>
                                <div className='text-center text-gray-800'>27</div>
                            </div>
                        </div>
                    </div>
                    <div className='my-2'>
                        <div className='head-font  text-gray-800'>Dynasty : Ahichchhatra </div>
                        <div className='head-font  text-gray-800'>Period  : 200 CE </div>
                        <div className='head-font  text-gray-800'>Material : Sandstone </div>
                        <div className='head-font  text-gray-800'>Location : National Museum </div>
                    </div>
                    <div className='my-2'>
                        <p className='head-font text-lg '>Description :</p>
                        <p className='head-font text-start leading-5 text-sm text-gray-500'>Maitreya, the future Buddha to be, resides in the Tushita heaven as a bodhisattva waiting to redeem humanity. In Buddhism, Maitreya is the eighth Buddha, a successor of the seven historical Buddhas (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Buddha will be born in Ketumati, in present-day Varanasi, Uttar Pradesh. As a bodhisattva, Maitreya wears a heavily adorned with earrings, wristlets, necklaces, and an amulet. The</p>
                    </div>
                    <div className='my-2'>
                        <button className="btn btn-ghost btn-sm text-[#b57a50]">
                            <IoIosArrowRoundForward size={25} />
                            READ MORE
                        </button>
                    </div>
                    <div className='my-4 flex gap-2 items-center'>
                        <button className="btn bg-[#b57a50] hover:bg-white hover:text-[#b57a50]  btn-wide text-white">
                            <span className='text-sm'>ADD TO COLLECTION</span>
                        </button>
                        <button className="btn  btn-sm btn-outline hover:bg-[#b57a50] h-12 w-32 text-center text-[#b57a50]">
                            <span className='text-sm'>SOUVENIR</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
