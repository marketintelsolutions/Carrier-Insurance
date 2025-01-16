import React from 'react'

const SectionThree = () => {
    return (
        <section className='bg-black py-[140px]'>
            <div className='w-full max-w-max mx-auto'>
                <h2 className="w-[624px]  text-white text-[53px] font-extrabold font-['Inter'] leading-[63.60px]">Reassuring, knowledgeable, clear.</h2>
                <div className="w-[181px] h-[6.61px] mt-5 flex gap-2">
                    <div className='w-full h-full bg-[#00B050]'></div>
                    <div className='w-10 h-full bg-[#FFFEFE]'></div>
                </div>
                <p className="text-left mt-[60px] mb-[70px] text-[#fffefe] text-2xl font-normal font-['Albert Sans'] leading-[29.01px]">Contact us today to learn more or get a free consultation.</p>
                <button className="h-[58px] text-white hover:text-primaryGreen hover:border-primaryGreen px-[38px] py-5 rounded-[10px] border-2 border-white justify-center items-start inline-flex">
                    <span className="text-center  text-lg font-medium font-['Inter'] uppercase leading-[18px]">Get Started</span>
                </button>
            </div>
        </section>
    )
}

export default SectionThree