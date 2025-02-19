import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { MdEmail, MdOutlineLocationOn } from 'react-icons/md'
import { TbPhoneCall } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { services } from '../utils/data'
import { FaAngleDown } from 'react-icons/fa6'

const links = [
    {
        text: 'About Us',
        path: '/about',
    },
    {
        text: 'Services',
        path: '/services',
        items: [
            {
                text: 'MOTOR INSURANCE POLICY',
                path: 'motor-insurance-policy'
            },
            {
                text: 'Fire And Burglary Policy',
                path: 'Fire-And-Burglary-Policy'
            },
            {
                text: 'Group Life Insurance',
                path: 'Group-Life-Insurance'
            },
            {
                text: 'Fidelity Guarantee Policy',
                path: 'Fidelity-Guarantee-Policy'
            },
            {
                text: 'Household Insurance',
                path: 'Household-Insurance'
            },
        ]
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
    const [isDropdown, setIsDropdown] = useState(false)

    const path = window.location.pathname

    console.log('sliced', path.includes('services'));

    return (
        <>
            <div className='w-[92%] max-w-[1782px] mx-auto flex relative  rounded-b-[50px] overflow-hidden'>
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
            </div>
            <nav className='sticky top-0 left-0 bg-[#F8F8F8]  translate-y-[50%] px-10 w-[80%] rounded-full mx-auto max-w-max flex items-center  h-[96px] z-[99] '>
                <Link to={'/'} className='w-[35%] flex  justify-start  '>
                    <img src="/images/logo.svg" alt="logos" className='w-full max-w-[240px]' />
                </Link>
                <div
                    onMouseLeave={() => setIsDropdown(false)}
                    className=' h-[43px] w-[65%] flex gap-[20px] items-center justify-between'>
                    {
                        links.map((item, index) => {
                            if (item.items) {
                                return <div
                                    key={index}
                                    onMouseEnter={() => setIsDropdown(true)}
                                    onClick={() => setIsDropdown((prev) => !prev)}
                                    className={`relative  cursor-pointer w-max flex gap-2 items-center text-base font-bold font-sans  tracking-tight ${path.includes('services') && 'text-primaryRed'} ${isDropdown ? 'text-primaryRed' : 'text-[#5a5a5a]'}`}>
                                    <span>{item.text}</span>
                                    <span className={`${isDropdown && 'rotate-180'}`}><FaAngleDown /></span>
                                    {isDropdown && <div className='absolute top-[130%] left-0 rounded-[12px] overflow-hidden bg-[#D9D9D9]'>
                                        {
                                            services.map((item) =>
                                                <Link
                                                    to={`/services/${item.slug}`}
                                                    className="w-[225px]  px-4 py-4 text-[#282828] hover:bg-primaryRed hover:text-[#060606] justify-start items-center  inline-flex">
                                                    <span className=" text-[13px] font-semibold font-['Inter'] uppercase leading-normal">{item.heading}</span>
                                                </Link>
                                            )
                                        }
                                    </div>}
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
                    <button className="w-28 h-[43px] text-[#fffefe] hover:text-primaryRed border border-primaryRed hover:bg-white px-[15px] py-3.5 bg-primaryRed rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                        <span className=" text-sm font-bold font-sans tracking-tight">Log In </span>
                    </button>
                    <span><IoSearch size={25} /></span>
                </div>

            </nav>
        </>
    )
}

export default Navbar