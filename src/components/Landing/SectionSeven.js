import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

const accordion = [
    {
        heading: 'What types of insurance do you offer?',
        text: 'tempus eu. Integer placerat mi sem, vel imperdiet nunc bibendu m eget. Nunc luctus quam vitae facilisis.'
    },
    {
        heading: 'How do I choose the right policy?',
        text: 'We help you choose the right policy by assessing your needs, budget, and circumstances. Our experts provide personalized recommendations based on thorough analysis.'
    },
    {
        heading: 'What happens if I miss a premium payment?',
        text: 'Missing a premium payment may result in a grace period. Contact us immediately to discuss payment options and maintain your coverage without interruption.'
    },
    {
        heading: 'How does the claims process work?',
        text: 'Our claims process is straightforward. Report the incident, submit required documentation, and our dedicated team will guide you through each step to ensure quick resolution.'
    },
]

const SectionSeven = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <section className='w-full max-w-max mx-auto py-40 flex gap-[194px]'>
            <div className='relative border-[10px] border-primaryGreen w-full h-[517px] max-w-[443px]'>
                <div className='w-[517px] absolute top-[30px] left-[25px]'>
                    <img src="/images/people.png" alt="people" className='w-full object-cover' />
                </div>
            </div>
            <div className='w-full'>
                <p className="w-[50.51px] h-5 text-[#00b050] text-xl font-semibold font-['Inter'] leading-tight">FAQs</p>
                <h2 className="mt-1 text-[#282828] text-4xl font-extrabold font-['Inter'] leading-[45px]">Get answers to common questions about our insurance products and services.</h2>

                <div className='mt-9 flex flex-col gap-4'>
                    {accordion.map((item, index) => (
                        <div key={index}>
                            <button
                                className='w-full bg-[#F5F5F5] px-[30px] py-5 rounded-t-[10px] flex justify-between items-center cursor-pointer'
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
        </section>
    )
}

export default SectionSeven