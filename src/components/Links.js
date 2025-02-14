import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
    return (
        <div className='fixed z-[99] top-0 right-0 h-[95%] flex flex-col justify-end items-end'>
            <div className='h-[147px] '>
                <Link to={'/quote'} className='relative  w-[147px] h-[59px] bg-[#060606] px-[2px]  flex justify-center items-center rounded-b-[30px] rotate-[90deg] translate-x-[44px]'>
                    <p className=' text-white '>Get Quote  </p>
                </Link>
            </div>
            <div className='h-[147px] '>
                <div className='relative  w-[147px] h-[59px] bg-[#5A5A5A] px-[2px]  flex justify-center items-center rounded-b-[30px] rotate-[90deg] translate-x-[44px]'>
                    <p className=' text-white '>Manage Policies</p>
                </div>
            </div>
            <div className='h-[147px] '>
                <Link to={'/claims'} className='relative  w-[147px] h-[59px] bg-[#CC1517] px-[2px]  flex justify-center items-center rounded-b-[30px] rotate-[90deg] translate-x-[44px]'>
                    <p className=' text-white '>Report Claims</p>
                </Link>
            </div>
        </div>
    )
}

export default Links