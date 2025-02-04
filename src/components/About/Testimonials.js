import React from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa6'

const Testimonials = () => {
    return (
        <section className='bg-[#F5F5F5] py-[100px]'>
            <div className='relative w-[70%] max-w-[1200px] mx-auto'>
                <h2 className="w-[184.39px] h-5 text-[#cc1517] text-xl font-semibold font-['Inter'] leading-tight">Testimonials</h2>
                <p className="w-[509px] mt-[14px] text-[#282828] text-4xl font-extrabold font-['Inter'] leading-[42px]">Read what our clients have to say about working with Truebond Insurance Brokers Limited.</p>

                <div className=' mt-[100px] py-[40px] px-[90px] bg-[#CC1517]  max-w-[600px]'>
                    <p className="relative w-[443.46px] h-[104px] text-white text-base font-normal font-['Inter'] leading-relaxed">
                        Carrier Insurance has been incredibly reliable and transparent. They’ve made navigating my business insurance simple.
                        <span className='absolute -left-[37px] top-0 text-2xl'><FaQuoteLeft /></span>
                    </p>

                    <div className='flex justify-between items-end'>
                        <div className='flex gap-5 items-center'>
                            <div className='p-2 bg-white rounded-full'> <img src="/images/person.png" alt="person" className='object-cover' /></div>
                            <div>
                                <p className="w-[122.14px] h-[22px] text-white text-xl font-semibold font-['Inter'] leading-snug">YYYY</p>
                                <p className="mt-1 w-[116.83px] h-[17.60px] text-white text-base font-semibold font-['Inter'] leading-[17.60px]">YYYY</p>
                            </div>
                        </div>

                        <div className='flex gap-1.5'>
                            <span className='inline-flex p-3 bg-white rounded-full text-[12px]'><FaChevronLeft /></span>
                            <span className='inline-flex p-3 bg-white rounded-full text-[12px]'><FaChevronRight /></span>
                        </div>
                    </div>
                </div>
                <div className='absolute right-0 -bottom-[10px]  w-full h-[95%]  max-w-[48%] flex justify-end items-end ' style={{ backgroundImage: 'url(/images/abouttestimonial.png)', backgroundSize: 'cover' }}>
                    <div className="w-[330px] h-[124.59px] px-10 py-[35px] bg-[#060606] flex-col justify-center items-center inline-flex">
                        <div className="self-stretch h-[84.29px] pt-px pb-[1.29px] flex-col justify-start items-start flex">
                            <p className="w-64"><span class="text-white text-[21px] font-bold font-['Inter'] leading-7">Your experience matters to us. </span><span class="text-[#cc1517] text-[21px] font-bold font-['Inter'] leading-7">Share your story and feedback</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials