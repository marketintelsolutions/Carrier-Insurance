import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { navData, services } from '../utils/data'
import { FaAngleDown } from 'react-icons/fa6'

const Navbar = () => {
    const [isNavDropdown, setIsNavDropdown] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const [isMenu, setIsMenu] = useState(false);


    const path = window.location.pathname

    const handleSelect = (item) => {
        setActiveItem(item);
        setIsNavDropdown(true);
    };

    return (
        <div className='fixed z-[9999] top-5 left-0 w-full'>
            {/* <div className='w-[92%] max-w-[1782px] mx-auto flex relative  rounded-b-[50px] overflow-hidden'>
                <div className=' flex  h-[82px] w-full max-w-[33%] rounded-bl-[50px] bg-primaryRed'>
                </div>
                <div className='bg-primaryBlack w-full h-[82px]'>
                </div>

                <div className='absolute w-full rounded-b-[50px] h-full left-0'>
                    <div className='w-[85%] max-w-max mx-auto  h-full flex justify-between'>
                        <div className='flex gap-[30px] py-4 bg-primaryRed h-full'>
                            <span><MdOutlineLocationOn size={40} /></span>
                            <p className="w-[252px]  text-white text-[14px] font-normal font-sans leading-tight">
                                Plot 22, Akiogun New Market Road, Oniru Victoria Island, Lagos
                            </p>
                        </div>
                        <div className='flex gap-[30px] py-4'>
                            <span><MdEmail color='#FF0000' size={40} /></span>
                            <p className="w-[250px]  text-white text-[14px] font-normal font-sans leading-tight">
                                info@carrierinsurancebrokers.com, <br /> it-@carrierinsurancebrokers.com
                            </p>
                        </div>
                        <div className='flex gap-[30px] py-4'>
                            <span><TbPhoneCall color='#FF0000' size={40} /></span>
                            <p className="w-[271px]  text-white text-[14px] font-normal font-sans leading-tight">
                                +234 906 297 9782   |  +234 906 297 9786 <br /> +234 906 244 7811    | +234 707 452 1825
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            <nav

                onMouseLeave={() => setIsNavDropdown(false)}
                className={`bg-[#F8F8F8]  translate-y-[0%] px-10 w-full  mx-auto max-w-sub flex items-center justify-between  h-[96px] z-[999] ${isNavDropdown ? 'rounded-t-[40px]' : 'rounded-full'}`}>
                <Link to={'/'} className='w-[35%] flex  justify-start  '>
                    <img src="/images/logo.svg" alt="logos" className='w-full max-w-[240px]' />
                </Link>
                <div
                    className=' h-[43px] w-[65%] flex gap-[20px] items-center justify-between max-w-[50%]'>
                    {
                        navData.map((item, index) => {
                            if (item.items) {
                                return <div key={index}>
                                    <p
                                        onMouseEnter={() => handleSelect(item)}
                                        onClick={() => handleSelect(item)}
                                        key={index}
                                        className="text-black text-sm md:text-base cursor-pointer"
                                    >
                                        {item.text}
                                    </p>

                                    {isNavDropdown && activeItem?.text === item.text && (
                                        <div className="z-[999] md:absolute left-0 top-full w-full bg-white rounded-b-[40px] py-10">
                                            <div className="w-full max-w-[95%] mx-auto px-6 xl:px-0 flex gap-5">
                                                <div className="hidden md:flex flex-col gap-5">
                                                    <h2 className="text-[35px]">{activeItem?.text}</h2>
                                                    <p className="w-full max-w-[250px] text-sm md:text-base">
                                                        {activeItem?.desc}
                                                    </p>
                                                    <Link
                                                        to={"/contact"}
                                                        className="py-3 px-10 border border-primaryBlack rounded-[5px] text-center text-sm md:text-base w-fit"
                                                    >
                                                        Contact Us
                                                    </Link>
                                                </div>
                                                <div className="grid grid-cols-5 gap-0">
                                                    {activeItem?.items.map((item, index) => (
                                                        <div key={index} className="flex flex-col gap-8">
                                                            <h3 className="text-[10px] h-5 md:text-xs font-light max-w-[200px]">
                                                                {item.heading}
                                                            </h3>
                                                            <div className="flex flex-col gap-4">
                                                                {item.subItems.map((subItem, index) => (
                                                                    <Link
                                                                        key={index}
                                                                        to={subItem.path}
                                                                        className="text-xs md:text-sm font-medium"
                                                                        onClick={() => {
                                                                            setIsNavDropdown(false);
                                                                            setIsMenu(false);
                                                                        }}
                                                                    >
                                                                        {subItem.text}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            }
                            return <Link
                                to={item.path}
                                key={index}
                                className={`text-[#5a5a5a] hover:text-primaryRed w-max text-base font-bold font-sans  tracking-tight ${path === item.path && 'text-primaryRed'}`}>
                                {item.text}
                            </Link>
                        })
                    }
                    {/* <button className="w-28 h-[43px] text-[#fffefe] hover:text-primaryRed border border-primaryRed hover:bg-white px-[15px] py-3.5 bg-primaryRed rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                        <span className=" text-sm font-bold font-sans tracking-tight">Log In </span>
                    </button> */}
                    <span><IoSearch size={25} /></span>
                </div>

            </nav>
        </div>
    )
}

export default Navbar