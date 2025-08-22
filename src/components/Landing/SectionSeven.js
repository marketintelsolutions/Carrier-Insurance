import React, { useState } from 'react'
import SlideIn from '../SlideIn'

const SectionSeven = () => {

    return (
        <section className='bg-white py-[120px] px-6 xl:px-0'>
            <div className='bg-[#E6E4E4] rounded-[30px] md:w-[80%] max-w-max mx-auto pt-20 md:pt-[130px] pb-[63px] px-4 flex flex-col gap-5 items-center'>
                <SlideIn duration={700} distance={50} direction="top" delay={100}>
                    <h3 className="max-w-[136.92px] h-[22px] text-center text-[#cc1517] text-[18px] md:text-[22px] font-normal font-['Inter'] leading-snug">News</h3>
                </SlideIn>

                <SlideIn duration={700} distance={50} direction="top" delay={250}>
                    <p className="max-w-[924px] text-center text-[#282828] text-xl mb:text-2xl md:text-4xl font-extrabold font-['Inter'] leading-[42px]">Read about our recent achievements, partnerships, and community initiatives.</p>
                </SlideIn>

                <div className='mt-[229px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[200px] gap-x-5 xl:gap-5 w-[90%] max-w-[1200px] mx-auto'>
                    <SlideIn duration={700} distance={60} direction="bottom" delay={400}>
                        <div className="relative h-[280px] md:h-[327.19px] px-6 md:px-[45px] pt-20 md:pt-[136px] pb-[60.01px] bg-white rounded-[15px] flex-col justify-start items-start gap-[21.18px] inline-flex">
                            <img src="/images/life.png" alt="life" className='absolute -top-[150px] left-0 w-[95%] ' />
                            <h3 className="text-[#282828] text-2xl font-semibold font-['Inter'] leading-loose">Life Insurance</h3>
                            <p className=" md:h-[78px] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-relaxed">Protect your loved ones with customized life insurance solutions.</p>
                        </div>
                    </SlideIn>

                    <SlideIn duration={700} distance={60} direction="bottom" delay={550}>
                        <div className="relative h-[280px] md:h-[327.19px] px-6 md:px-[45px] pt-20 md:pt-[136px] pb-[60.01px] bg-white rounded-[15px] flex-col justify-start items-start gap-[21.18px] inline-flex">
                            <img src="/images/health.png" alt="health" className='absolute -top-[150px] left-0 w-[95%] ' />
                            <h3 className="text-[#282828] text-2xl font-semibold font-['Inter'] leading-loose">Health Insurance</h3>
                            <p className=" md:h-[78px] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-relaxed">Comprehensive health coverage for individuals, families, and groups.</p>
                        </div>
                    </SlideIn>

                    <SlideIn duration={700} distance={60} direction="bottom" delay={700}>
                        <div className="relative h-[280px] md:h-[327.19px] px-6 md:px-[45px] pt-20 md:pt-[136px] pb-[60.01px] bg-white rounded-[15px] flex-col justify-start items-start gap-[21.18px] inline-flex">
                            <img src="/images/auto.png" alt="auto" className='absolute -top-[150px] left-0 w-[95%] ' />
                            <h3 className="text-[#282828] text-2xl font-semibold font-['Inter'] leading-loose">Auto Insurance</h3>
                            <p className=" md:h-[78px] text-[#1e1e1e] text-base font-normal font-['Inter'] leading-relaxed">Secure and flexible plans for personal and commercial vehicles.</p>
                        </div>
                    </SlideIn>
                </div>

                <SlideIn duration={600} distance={30} direction="bottom" delay={850}>
                    <div className='flex gap-2.5 mt-10'>
                        <div className="w-3 h-3 relative bg-white rounded-xl" />
                        <div className="w-3 h-3 relative bg-[#cc1517] rounded-xl" />
                        <div className="w-3 h-3 relative bg-white rounded-xl" />
                    </div>
                </SlideIn>
            </div>
        </section>
    )
}

export default SectionSeven