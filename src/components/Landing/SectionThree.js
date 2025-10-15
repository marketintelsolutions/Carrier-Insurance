import React, { useEffect, useState } from 'react'
import { FaArrowRightLong, FaChevronRight } from 'react-icons/fa6'
import SlideIn from '../SlideIn'

const services = [
    {
        title: 'Oil and Gas',
        items: [
            'Physical Damage / Property All Risk',
            'Business Interruption / Loss of Production',
            'Third-Party Liability',
        ]
    },
    {
        title: 'Transportation',
        items: [
            'Aviation Insurance',
            'Motor Insurance',
            'Goods-in-Transit (GIT) Insurance',
            'Marine Cargo Insurance',
            'Carriers Liability Insurance',
            'Fleet Insurance',
        ]
    },
    {
        title: 'Manufacturing',
        items: [
            'Industrial All Risk (IAR) Insurance',
            'Fire and Special Perils Insurance',
            'Burglary/Theft Insurance',
            'Machinery Breakdown Insurance',
            'Business Interruption Insurance',
            'Product Liability Insurance',
            'Public Liability Insurance',
        ]
    },
    {
        title: 'Construction',
        items: [
            'Material Damage Section',
            'Third-Party Liability Section',
            'Construction Equipment Coverage',
            'Workmanship Insurance',
            'Project Delay Coverage',
        ]
    },
    {
        title: 'Financial services',
        items: [
            'General Financial Insurance',
        ]
    },
]

const SectionThree = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (activeIndex === services.length - 1) {
                setActiveIndex(0)
                return
            }
            setActiveIndex((prev) => prev + 1)
        }, 4000)

        return () => clearTimeout(timeout)
    }, [activeIndex])

    return (
        <section className='bg-white py-[100px]'>

            <div className='px-6 lg:w-[80%] max-w-max mx-auto py-[40px] xl:px-[60px]'>
                <div className='relative flex flex-col md:flex-row gap-10 justify-between md:items-end'>
                    <SlideIn duration={700} distance={50} direction="left" delay={100}>
                        <div className='flex flex-col gap-[27px] w-full max-w-[552px]'>
                            <h3 className="h-[23px] text-[#cc1517] text-xl md:text-2xl font-bold font-['Lato'] tracking-tight">Services</h3>
                            <p className="text-[#191a1c] text-xl md:text-2xl font-normal font-sans leading-7 tracking-wide">Explore our wide range of insurance products, designed to meet the diverse needs of individuals, families, and businesses.</p>
                        </div>
                    </SlideIn>

                    <SlideIn duration={700} distance={50} direction="right" delay={300}>
                        <button className="w-[193px] h-[51px] px-[30px] py-[15px] bg-[#cc1517] rounded-[50px] justify-start items-center inline-flex">
                            <span className="text-center text-white text-base font-normal font-sans leading-tight tracking-tight">View All Services</span>
                        </button>
                    </SlideIn>
                </div>

                <div className='mt-[72px] flex flex-wrap gap-[30px]'>
                    {
                        services.map((item, index) => (
                            <div
                                className={`bg-[#D9D9D9] md:max-w-[30%] flex flex-col gap-[13px] rounded-[18px] pt-3 pb-[30px] px-[26px] ${activeIndex === index && 'border-[3px] border-black'}`}>
                                <SlideIn
                                    key={index}
                                    duration={600}
                                    distance={40}
                                    direction="bottom"
                                    delay={400 + (index * 150)}
                                >
                                    <div className='flex gap-[22px] items-center'>
                                        <img src="/images/life.svg" alt="life" />
                                        <h2 className=" text-[#060606] h-16 text-[22.19px] font-semibold font-['Lato']">{item.title}</h2>
                                    </div>
                                    <p className=" h-[98.63px] text-[#666666] text-xs font-normal font-sans leading-[14.90px]">Comprehensive coverage for exploration & production (E&P) risk exposures in the oil and gas industry.</p>
                                    <button className="w-[106.65px] self-end h-[31.44px] px-[18.49px] py-[9.25px] bg-[#cc1517] rounded-[30.82px] items-center inline-flex justify-between">
                                        <span className="text-center text-white text-[9.86px] font-normal font-sans leading-3 tracking-tight">Get Started </span>
                                        <span className='text-[10px] text-white'><FaArrowRightLong /></span>
                                    </button>
                                </SlideIn>
                            </div>
                        ))
                    }

                    <div className='mt-[30px] max-w-[63%] grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {
                            services[activeIndex].items.map((item, index) => (
                                <SlideIn duration={800} distance={50} direction="bottom" delay={1000}>
                                    <div key={index} className="w-max min-w-[180px] flex items-center gap-[13px] px-5 h-[47px] bg-[#D9D9D9] rounded-[30px]" >
                                        <span className='p-1 rounded-full bg-primaryRed text-white text-[12px]'><FaChevronRight /></span>
                                        <p className="w-max text-black text-[15px] font-semibold font-['Inter'] leading-relaxed">{item}</p>
                                    </div>
                                </SlideIn>
                            ))
                        }
                    </div>

                </div>

            </div>

        </section>
    )
}

export default SectionThree