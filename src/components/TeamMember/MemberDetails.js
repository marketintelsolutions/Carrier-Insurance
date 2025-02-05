import React from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const MemberDetails = ({ teammember }) => {
    return (
        <section className='bg-[#FFFEFE] pt-[170px] pb-[100px]'>
            <div className='w-[70%] max-w-[1234px] mx-auto grid grid-cols-[35%_60%] justify-between gap-[47px]'>
                <div className='py-[126px]  bg-primaryRed rounded-[30px]'>
                    <img src="/images/teampersonbig.png" alt="teampersonbig" />
                </div>
                <div className=' py-[138px] px-[53px] bg-[#D9D9D9] rounded-[30px]'>
                    <h2 className=" text-[#1e1f21] text-4xl font-semibold font-['Lato']">{teammember.name}</h2>
                    <p className="mt-5 mb-10 text-[#cc1517] text-2xl font-normal font-['Sans'] tracking-tight">{teammember.title}</p>
                    <div className="flex flex-col gap-5">
                        {
                            teammember.details.map((item) => (
                                <span class="text-[#060606] text-xl font-normal font-['Sans'] leading-normal">{item}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>

            <Link to={'/about#team'} className='py-4 px-[27px] mt-11 rounded-full bg-primaryRed w-[70%] max-w-[1234px] mx-auto flex gap-5 justify-end items-center'>
                <p className=" text-[#d8d4d4] text-4xl font-semibold font-['Lato']">Our Team</p>
                <span className='border p-1 rounded-full h-fit text-white'><IoArrowBack /></span>
            </Link>
        </section>
    )
}

export default MemberDetails