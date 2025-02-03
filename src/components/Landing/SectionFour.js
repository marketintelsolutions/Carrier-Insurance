import React from 'react'
import { FaAngleRight, FaChevronRight } from 'react-icons/fa'

const insurance = [
    'Life Insurance',
    'Property Insurance',
    'Health Insurance',
    'Business Insurance',
    'Auto Insurance',
    'Specialty Insurance',
]

const services = [
    {
        icon: 'motor',
        text: 'Motor Insurance Policy',
    },
    {
        icon: 'fire',
        text: 'Fire And Burglary Policy',
    },
    {
        icon: 'group',
        text: 'Group Life Insurance',
    },
    {
        icon: 'fidelity',
        text: 'Fidelity Guarantee Policy',
    },
    {
        icon: 'fire',
        text: 'Household Insurance',
    },
]

const SectionFour = () => {
    return (
        <section className=' bg-[#F5F5F5] pt-20 pb-40'>
            <div className='relative bg-black py-20 px-10 rounded-[15px] w-[85%] max-w-max mx-auto flex flex-col items-center'>
                <h2 className="w-[125.52px] h-5 text-center text-[#CC1517] text-xl font-semibold font-['Inter'] leading-tight">Our Services</h2>
                <h1 className="mt-5 w-[529.02px] h-12 text-center text-white text-5xl font-extrabold font-['Inter'] leading-[48px]">What We Offer </h1>

                <div className='w-full flex gap-4 justify-center mt-[55px]'>
                    {
                        services.map((item, index) => (
                            <div key={index} className='w-[228px] flex flex-col bg-[#F5F5F5] rounded-[15px] pt-[50px] px-[30px] pb-5' >
                                <div className='relative'>
                                    <div className='h-[90px] w-[90px] absolute -top-5 -left-5 rounded-full bg-[#EBEBEB]'></div>
                                    <img src={`/images/${item.icon}.svg`} alt={item.icon} className='w-full max-w-[72px] h-[65px] object-contain relative z-1' />
                                </div>
                                <p className="mt-5 mb-[30px] h-[87px] max-w-[103px] text-[#282828] text-2xl font-bold font-['Inter'] leading-7">{item.text}</p>
                                <span className='w-10 h-10 items-center justify-center bg-primaryRed rounded-full inline-flex text-white'><FaChevronRight size={12} /></span>
                            </div>
                        ))
                    }
                </div>
                <img src="/images/services.svg" alt="services" className='absolute -top-[95px] -left-[25px] ' />
            </div>
        </section>
    )
}

export default SectionFour