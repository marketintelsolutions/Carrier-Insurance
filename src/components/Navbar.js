import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { MdEmail, MdOutlineLocationOn } from 'react-icons/md'
import { TbPhoneCall } from 'react-icons/tb'
import { Link } from 'react-router-dom'

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
        text: 'Products',
        path: '/products',
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
            <div className='w-[95%] max-w-[1782px] mx-auto flex relative  rounded-b-[50px] overflow-hidden'>
                <div className=' flex  h-[82px] w-full max-w-[33%] rounded-bl-[50px] bg-primaryRed'>
                </div>
                <div className='bg-primaryBlack w-full h-[82px]'>
                </div>

                <div className='absolute w-full rounded-b-[50px] h-full left-0'>
                    <div className='w-[85%] max-w-max mx-auto  h-full flex justify-between'>
                        <div className='flex gap-[30px] py-4 bg-primaryRed h-full'>
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
            <nav className='bg-[#F8F8F8] translate-y-[50%] px-10 w-[80%] rounded-full mx-auto max-w-max relative flex items-center  h-[96px] z-[99] '>
                <Link to={'/'} className='w-[35%] flex  justify-start  '>
                    <img src="/images/logo.svg" alt="logos" className='w-full max-w-[240px]' />
                </Link>
                <div className=' h-[43px] w-[65%] flex gap-[20px] items-center justify-between'>
                    {
                        links.map((item, index) =>
                            <Link
                                to={item.path}
                                key={index}
                                className="text-[#5a5a5a] w-max text-base font-bold font-['Sans']  tracking-tight">
                                {item.text}
                            </Link>
                        )
                    }
                    <button className="w-28 h-[43px] px-[15px] py-3.5 bg-primaryRed rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                        <span className="text-[#fffefe] text-sm font-bold font-['Sans'] tracking-tight">Log In </span>
                    </button>
                    <span><IoSearch size={25} /></span>
                </div>

            </nav>
        </>
    )
}

export default Navbar