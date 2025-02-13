import React, { useState } from 'react'
import { accordion } from '../../utils/data'
import { FiMinus, FiPlus } from 'react-icons/fi';

const FaqDetails = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <section className='my-[120px] items-center h-fit  w-[80%] max-w-max mx-auto flex gap-[66px]'>
            <div className=' '>
                <img src="/images/faq.png" alt="faq" className=' object-cover' />
            </div>
            <div className=' bg-primaryRed max-w-[50%] rounded-[30px] py-[47px] px-[50px]'>
                <p className="w-full max-w-[566px] h-[46px] text-[#fffefe] text-[32px] font-bold font-['Montserrat'] leading-[41px]">Frequently Asked Questions</p>
                <p className="w-full max-w-[573px] text-[#060606] text-[32px] font-bold font-['Montreal SF'] tracking-wide">Get answers to common questions about our insurance products and services.</p>
                <div className='mt-9 flex flex-col gap-4'>
                    {accordion.map((item, index) => (
                        <div key={index} className='border-b border-[#EBEBEB40]'>
                            <button
                                className={`w-full   py-4  flex justify-between items-center cursor-pointer ${activeIndex === index ? 'rounded-t-[10px]' : 'rounded-[10px]'}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3 className="text-white text-[17px] font-semibold font-['Inter'] leading-[17px]">
                                    {item.heading}
                                </h3>
                                <span className='transition-transform text-white duration-300'>
                                    {activeIndex === index ? <FiMinus /> : <FiPlus />}
                                </span>
                            </button>
                            <div
                                className={` rounded-b-[10px] overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-[1000px] pb-5 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-[#FAFAFA] text-base font-normal font-['Roboto'] leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='px-2 flex gap-4 mt-[74px] justify-center'>
                    <p className="w-fit text-[#060606] text-base font-normal font-['Nunito Sans'] leading-[19px] tracking-tight">Visit our FAQ section for detailed answers or reach out to our customer service team.</p>
                    <button className="w-[247px] h-10 pl-6 pr-5 py-2.5 bg-neutral-50 rounded-lg justify-center items-center gap-1 inline-flex">
                        <span className="text-[#1b242c] text-[15px] font-semibold font-['Nunito Sans'] tracking-tight">CONNECT US</span>
                        <div data-svg-wrapper className="relative">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.83203 14.1673L14.1654 5.83398M14.1654 5.83398H5.83203M14.1654 5.83398V14.1673" stroke="#1B242C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default FaqDetails