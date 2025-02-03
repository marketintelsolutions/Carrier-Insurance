import React, { useState } from 'react'


const SectionSeven = () => {


    return (
        <section className='bg-white py-[120px]'>
            <div className='bg-[#E6E4E4]  rounded-[30px] w-[80%] max-w-max mx-auto pt-[130px] pb-[63px] flex flex-col gap-5 items-center'>
                <h3 className="w-[136.92px] h-[22px] text-center text-[#cc1517] text-[22px] font-normal font-['Inter'] leading-snug">News</h3>
                <p className="w-[924px] text-center text-[#282828] text-4xl font-extrabold font-['Inter'] leading-[42px]">Read about our recent achievements, partnerships, and community initiatives.</p>

                <div className='mt-[229px] grid grid-cols-3 gap-5 w-[90%] max-w-[1200px] mx-auto'>
                    <div className="relative h-[327.19px] px-[45px] pt-[136px] pb-[60.01px] bg-white rounded-[15px] flex-col justify-start items-start gap-[21.18px] inline-flex">
                        <img src="/images/life.png" alt="life" className='absolute -top-[150px] left-0 w-[95%] ' />
                        <h3 className="text-[#282828] text-2xl font-semibold font-['Inter'] leading-loose">Life Insurance</h3>
                        <p className=" h-[78px] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-relaxed">Protect your loved ones with customized life insurance solutions.</p>
                    </div>
                    <div className="relative h-[327.19px] px-[45px] pt-[136px] pb-[60.01px] bg-white rounded-[15px] flex-col justify-start items-start gap-[21.18px] inline-flex">
                        <img src="/images/health.png" alt="life" className='absolute -top-[150px] left-0 w-[95%] ' />
                        <h3 className="text-[#282828] text-2xl font-semibold font-['Inter'] leading-loose">Health Insurance</h3>
                        <p className=" h-[78px] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-relaxed">Comprehensive health coverage for individuals, families, and groups.</p>
                    </div>
                    <div className="relative h-[327.19px] px-[45px] pt-[136px] pb-[60.01px] bg-white rounded-[15px] flex-col justify-start items-start gap-[21.18px] inline-flex">
                        <img src="/images/auto.png" alt="life" className='absolute -top-[150px] left-0 w-[95%] ' />
                        <h3 className="text-[#282828] text-2xl font-semibold font-['Inter'] leading-loose">Auto Insurance</h3>
                        <p className=" h-[78px] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-relaxed">Secure and flexible plans for personal and commercial vehicles.</p>
                    </div>
                </div>

                <div className='flex gap-2.5 mt-10'>
                    <div className="w-3 h-3 relative bg-white rounded-xl" />
                    <div className="w-3 h-3 relative bg-[#cc1517] rounded-xl" />
                    <div className="w-3 h-3 relative bg-white rounded-xl" />
                </div>
            </div>
        </section>
    )
}

export default SectionSeven