import React from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const MemberDetails = ({ teammember }) => {
    return (
        <section className='bg-[#FFFEFE] px-6 xl:px-0 pt-20 lg:pt-[170px] pb-[100px]'>
            <div className='w-full  lg:w-[80%] max-w-[1334px] mx-auto grid grid-cols-1 lg:grid-cols-[35%_60%] justify-between gap-[47px]'>
                <div className='py-[126px] w-full h-[500px] lg:h-[600px] bg-primaryRed rounded-[30px]'>
                    <img src={`/images/${teammember.image}.png`} alt="teampersonbig" className='w-full h-full object-cover' />
                </div>
                <div className='py-20 lg:py-[138px] px-6 lg:px-[53px] bg-[#D9D9D9] rounded-[30px]'>
                    <h2 className=" text-[#1e1f21] text-2xl md:text-4xl font-semibold font-['Lato']">{teammember.name}</h2>
                    <p className="mt-5 mb-10 text-[#cc1517] text-xl md:text-2xl font-normal font-sans tracking-tight">{teammember.title}</p>
                    <div className="flex flex-col gap-5">
                        {
                            teammember.details.map((item) => (
                                <span class="text-[#060606] text-lg md:text-xl font-normal font-sans leading-normal">{item}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>

            <Link to={'/about#team'} className='py-4 px-[27px] mt-11 rounded-full bg-primaryRed w-full md:w-[70%] max-w-[1234px] mx-auto flex gap-5 justify-end items-center'>
                <p className=" text-[#d8d4d4] text-2xl md:text-4xl font-semibold font-['Lato']">Our Team</p>
                <span className='border p-1 rounded-full h-fit text-white'><IoArrowBack /></span>
            </Link>
        </section>
    )
}

export default MemberDetails