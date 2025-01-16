import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { MdEmail, MdOutlineLocationOn } from 'react-icons/md'
import { TbPhoneCall } from 'react-icons/tb'

const links = [
    {
        text: 'About Us',
        path: '/about',
    },
    {
        text: 'Services',
        path: '/services',
    },
    {
        text: 'Careers',
        path: '/careers',
    },
    {
        text: 'Media',
        path: '/media',
    },
    {
        text: 'Contact Us',
        path: '/contact',
    },
]

const Navbar = () => {
    return (
        <>
            <div className='w-full flex relative'>
                <div className=' flex  h-[82px] w-full max-w-[33%] bg-[#00B050]'>
                </div>
                <div className='bg-black w-full h-[82px]'>
                </div>

                <div className='absolute w-full h-full left-0'>
                    <div className='w-full max-w-max mx-auto  h-full flex justify-between'>
                        <div className='flex gap-[30px] py-4 bg-[#00B050] h-full'>
                            <span><MdOutlineLocationOn size={40} /></span>
                            <p className="w-[252px]  text-white text-base font-normal font-['Sans'] leading-tight">
                                Plot 22, Akiogun New Market Road, Oniru Victoria Island, Lagos
                            </p>
                        </div>
                        <div className='flex gap-[30px] py-4'>
                            <span><MdEmail color='#FF0000' size={40} /></span>
                            <p className="w-[250px]  text-white text-base font-normal font-['Sans'] leading-tight">
                                info@carrierinsurancebrokers.com, <br /> it-@carrierinsurancebrokers.com
                            </p>
                        </div>
                        <div className='flex gap-[30px] py-4'>
                            <span><TbPhoneCall color='#FF0000' size={40} /></span>
                            <p className="w-[271px]  text-white text-base font-normal font-['Sans'] leading-tight">
                                +234 906 297 9782   |  +234 906 297 9786 <br /> +234 906 244 7811    | +234 707 452 1825
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <nav className='bg-white relative flex items-center justify-end  h-[130px]'>
                <div className='absolute w-full h-[130px] top-0 left-0'>
                    <div className=' py-[18px] w-full h-[130px] max-w-max mx-auto flex items-center justify-between gap-[90px]'>
                        <div className='w-full max-w-[295px]'>
                            <img src="/images/logo.svg" alt="logos" className='w-full ' />
                        </div>
                        <div className=' bg-gradient-to-r rounded-l-full from-[rgba(231,224,224,0.87)] border to-[rgba(230,223,223,0.84)] w-full h-[43px] flex gap-[50px] items-center pl-[74px] justify-between'>
                            {
                                links.map((item, index) => <p className="text-[#5a5a5a] text-base font-bold font-['Sans']  tracking-tight">{item.text}</p>)
                            }
                            <button className="w-28 h-[43px] px-[15px] py-3.5 bg-[#00b050] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                <span className="text-[#fffefe] text-sm font-bold font-['Sans'] tracking-tight">Log In </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-[rgba(230,223,223,0.84)] h-[43px] w-full max-w-[50%] flex justify-end items-center pr-16'>
                    <span><IoSearch size={25} /></span>
                </div>
            </nav>
        </>
    )
}

export default Navbar