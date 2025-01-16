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

const SectionFour = () => {
    return (
        <section className='w-full max-w-max mx-auto pt-[130px] pb-[80px] flex gap-[162px]'>

            <div className='w-full max-w-[510px] relative'>
                <img src="/images/ship.png" alt="ship" className='w-full' />

                <div className='absolute -right-[90px] -top-[50px] p-3 bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)]'>
                    <img src="/images/men.png" alt="men" />
                </div>
            </div>
            <div className='py-4'>
                <h1 className="text-[#282828] text-[47px] font-extrabold font-['Inter'] leading-[56.40px]">Products & Services</h1>
                <p className="w-[423px] mt-[13px] text-[#1e1e1e] text-[17px] font-normal font-['Inter'] leading-relaxed">Explore our wide range of insurance products, designed to meet the diverse needs of individuals, families, and businesses.</p>

                <div className='mt-20 mb-[66px] grid grid-cols-2 gap-y-[10px] w-full justify-between'>
                    {
                        insurance.map((item, index) => (
                            <div className='flex gap-[13px] items-center'>
                                <span className='w-5 h-5 items-center justify-center bg-primaryGreen rounded-full inline-flex text-white'><FaChevronRight size={12} /></span>
                                <p className="text-[#282828] text-[19px] font-semibold font-['Inter'] leading-relaxed">{item}</p>
                            </div>
                        ))
                    }
                </div>
                <button className="h-[46px] hover:bg-white text-white hover:text-primaryGreen border border-primaryGreen px-[30px] py-[15px] bg-[#00b050] justify-center items-start inline-flex">
                    <span className="text-center  text-base font-semibold font-['Inter'] leading-none">Read More</span>
                </button>
            </div>
        </section>
    )
}

export default SectionFour