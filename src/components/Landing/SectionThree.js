import React, { useEffect, useState } from 'react'
import { FaArrowRightLong, FaChevronRight } from 'react-icons/fa6'
import SlideIn from '../SlideIn'
import { Link } from 'react-router-dom'

const services = [
    {
        title: 'Oil and Gas',
        slug: 'oil-and-gas',
        icon: 'oil-red',
        items: [
            'Physical Damage / Property All Risk',
            'Business Interruption / Loss of Production',
            'Third-Party Liability',
        ],
        desc: "This policy covers all risks of physical loss and destruction to the insured properties, including legal liability arising from damage to the insured's properties or resulting from the insured's operations, which may involve their agents."
    },
    {
        title: 'Transportation',
        slug: 'transportation',
        icon: 'transport-red',
        items: [
            'Aviation Insurance',
            'Motor Insurance',
            'Goods-in-Transit (GIT) Insurance',
            'Marine Cargo Insurance',
            'Carriers Liability Insurance',
            'Fleet Insurance',
        ],
        desc: 'Transport Insurance is insurance whereby an insurance company undertakes to pay certain indemnities as a result of damage occurring during the transport of goods. This damage can affect the transporting object (hull insurance) or the transported goods themselves (goods insurance)'
    },
    {
        title: 'Manufacturing',
        icon: 'manufacture-red',
        slug: 'manufacturing-sector',
        items: [
            'Industrial All Risk (IAR) Insurance',
            'Fire and Special Perils Insurance',
            'Burglary/Theft Insurance',
            'Machinery Breakdown Insurance',
            'Business Interruption Insurance',
            'Product Liability Insurance',
            'Public Liability Insurance',
        ],
        desc: 'Manufacturing insurance is specifically designed to protect businesses involved in the manufacturing industry. It provides coverage for a wide range of risks and liabilities that are unique to the manufacturing sector. It provides coverage for a wide range of risks and liabilities that are unique to the manufacturing sector.'
    },
    {
        title: 'Construction',
        icon: 'construction-red',
        slug: 'construction-sector',
        items: [
            'Material Damage Section',
            'Third-Party Liability Section',
            'Construction Equipment Coverage',
            'Workmanship Insurance',
            'Project Delay Coverage',
        ],
        desc: 'Construction/All Risk insurance policy is a type of property and liability insurance designed for construction projects. It protects against physical loss or damage to contract works, materials, and equipment on the project site, as well as the legal liability of the insured for third-party bodily injury or property damage. This comprehensive policy is typically taken out by contractors and project owners to cover various construction and civil engineering projects.'
    },
    {
        title: 'Financial services',
        icon: 'money-red',
        slug: 'finance-sector',
        items: [
            'General Financial Insurance',
        ],
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum perspiciatis in assumenda reiciendis, placeat quod quasi magni amet provident voluptate fuga hic possimus! Quasi nisi perferendis dicta dolore commodi, molestias velit animi dignissimos dolorem. Debitis voluptate, reiciendis aspernatur dicta recusandae minus, nam ab, mollitia doloribus laboriosam facere magnam ex non. Provident vitae velit, adipisci enim omnis deleniti facilis itaque pariatur!'
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

            <div className='px-6 lg:w-[85%] max-w-max mx-auto py-[40px] xl:px-[0px]'>
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

                <div className='w-full mt-[72px] flex flex-wrap gap-5  lg:gap-y-[30px]'>
                    {
                        services.map((item, index) => (
                            <div
                                className={`bg-[#D9D9D9] h-auto w-full md:w-[48%] xl:w-[32%]  rounded-[18px] pt-3 pb-[30px] px-[26px] ${activeIndex === index && 'border-[3px] border-black'}`}>
                                <SlideIn
                                    key={index}
                                    duration={600}
                                    distance={40}
                                    direction="bottom"
                                    delay={400 + (index * 150)}
                                    className='flex flex-col gap-[13px]'
                                >
                                    <div className='flex flex-wrap lg:flex-nowrap gap-[22px] items-center'>
                                        <img src={`/images/${item.icon}.png`} alt="life" className='max-w-[40px]' />
                                        <h2 className=" text-[#060606] text-[22.19px] font-semibold font-['Lato']">{item.title}</h2>
                                    </div>
                                    <p className="  text-[#666666] text-sm font-normal font-sans leading-[24.90px]">{item.desc.slice(0, 180)}...</p>
                                    <Link to={`/services/${item.slug}`}>
                                        <button className="w-[106.65px] self-end h-[31.44px] px-[18.49px] py-[9.25px] bg-[#cc1517] rounded-[30.82px] items-center inline-flex justify-between">
                                            <span className="text-center text-white text-[9.86px] font-normal font-sans leading-3 tracking-tight">Learn more</span>
                                            <span className='text-[10px] text-white'><FaArrowRightLong /></span>
                                        </button>
                                    </Link>
                                </SlideIn>
                            </div>
                        ))
                    }

                    <div className='mt-[0px] max-w-[65%] grid grid-cols-1 xl:grid-cols-2   gap-5'>
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