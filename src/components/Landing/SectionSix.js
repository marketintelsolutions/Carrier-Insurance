import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { accordion } from '../../utils/data';


const SectionSix = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }
    return (
        <section className='bg-[#F5F5F5] pb-40'>
            <div className='relative z-[1] bg-black w-[80%] rounded-[30px] px-[120px] max-w-max mx-auto py-[100px] flex gap-[54px]'>
                <div className='relative   ' >
                    <div className='w-[367px] top-[30px] left-[25px]'>
                        <img src="/images/menoutline.svg" alt="people" className='w-full object-cover' />
                    </div>
                    <div className='w-[367px] absolute top-[30px] left-[25px]'>
                        <img src="/images/faqmen.png" alt="people" className='w-full object-cover' />
                    </div>
                </div>
                <div className=''>
                    <p className="w-[50.51px] h-5 text-primaryRed text-xl font-semibold font-['Inter'] leading-tight">FAQs</p>
                    <h2 className="mt-1 text-white text-4xl font-extrabold font-['Inter'] leading-[45px]">Get answers to common questions about our insurance products and services.</h2>

                    <div className='mt-9 flex flex-col gap-4'>
                        {accordion.map((item, index) => (
                            <div key={index}>
                                <button
                                    className={`w-full bg-[#F5F5F5] px-[30px] py-5  flex justify-between items-center cursor-pointer ${activeIndex === index ? 'rounded-t-[10px]' : 'rounded-[10px]'}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <h3 className="text-black text-[17px] font-semibold font-['Inter'] leading-[17px]">
                                        {item.heading}
                                    </h3>
                                    <span className='transition-transform duration-300'>
                                        {activeIndex === index ? <FiMinus /> : <FiPlus />}
                                    </span>
                                </button>
                                <div
                                    className={`px-[30px] bg-[#F5F5F5] rounded-b-[10px] overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-[1000px] pb-5 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="text-[#7a7a7a] text-base font-normal font-['Roboto'] leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className='relative z-[2] bg-white w-[68%] max-w-[1200px] mx-auto py-[45px] px-[60px] rounded-[30px] shadow-[0px_0px_25px_0px_rgba(0,0,0,0.10)] -translate-y-[45px] flex justify-between'>
                <div className='flex gap-6 items-center'>
                    <img src="/images/consultant.svg" alt="consultant" />
                    <div>
                        <p className="w-[92.01px] h-12 text-center text-black text-5xl font-bold font-['Lato']">100
                            <span className="w-[15.47px] h-[22px] text-black text-[22px] font-extrabold font-['Inter'] leading-snug">+</span>
                        </p>
                        <p className="w-[82.06px]  text-[#666666] text-base font-normal font-['Sans'] leading-tight tracking-tight">Consultant</p>
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    <img src="/images/clients.svg" alt="clients" />
                    <div>
                        <p className="w-[92.01px] h-12 text-center text-black text-5xl font-bold font-['Lato']">651
                            <span className="w-[15.47px] h-[22px] text-black text-[22px] font-extrabold font-['Inter'] leading-snug">+</span>
                        </p>
                        <p className="  text-[#666666] text-base font-normal font-['Sans'] leading-tight tracking-tight">Active Clients</p>
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    <img src="/images/coffee.svg" alt="coffee" />
                    <div>
                        <p className="w-[92.01px] h-12 text-center text-black text-5xl font-bold font-['Lato']">768
                            <span className="w-[15.47px] h-[22px] text-black text-[22px] font-extrabold font-['Inter'] leading-snug">+</span>
                        </p>
                        <p className="  text-[#666666] text-base font-normal font-['Sans'] leading-tight tracking-tight">Cup of Coffee</p>
                    </div>
                </div>
                <div className='flex gap-6 items-center'>
                    <img src="/images/smiley.svg" alt="smiley" />
                    <div>
                        <p className="w-[92.01px] h-12 text-center text-black text-5xl font-bold font-['Lato']">90
                            <span className="w-[15.47px] h-[22px] text-black text-[22px] font-extrabold font-['Inter'] leading-snug">+</span>
                        </p>
                        <p className="  text-[#666666] text-base font-normal font-['Sans'] leading-tight tracking-tight">Award Winning</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSix