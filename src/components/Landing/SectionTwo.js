import React from 'react'

const SectionTwo = () => {
    return (
        <section className='py-[134px] w-full max-w-max mx-auto flex flex-col gap-[138px]'>
            <p className="w-[708px] h-[168px]"><span class="text-[#1e1e1e] text-2xl font-normal font-['Inter'] leading-[29px] tracking-wide">Welcome to </span><span class="text-[#1e1e1e] text-2xl font-bold font-['Inter'] leading-[29px] tracking-wide">Carrier Insurance Brokerage</span><span class="text-[#1e1e1e] text-2xl font-normal font-['Inter'] leading-[29px] tracking-wide">, your trusted partner in comprehensive insurance solutions. We’re dedicated to protecting what matters most to you, from your health and assets to your business and future.</span></p>

            <div className='flex justify-between'>
                <div className='flex flex-col gap-[25px]'>
                    <img src="/images/mission.svg" alt="mission" className='w-full max-w-[140px]' />
                    <h3 className="text-[#ea002d] text-4xl font-semibold font-['Hero New']">Our Mission:</h3>
                    <p className="w-[394.72px] h-[168px] text-[#1e1e1e] text-lg font-normal font-['Inter'] leading-normal">To empower individuals and businesses with secure, accessible, and personalized insurance coverage.</p>
                </div>
                <div className='flex flex-col gap-[25px]'>
                    <img src="/images/vision.svg" alt="vision" className='w-full max-w-[140px]' />
                    <h3 className="text-[#ea002d] text-4xl font-semibold font-['Hero New']">Our Services: </h3>
                    <p className="w-[394.72px] h-[168px] text-[#1e1e1e] text-lg font-normal font-['Inter'] leading-normal">Discover a full range of insurance products designed to provide peace of mind and financial stability.</p>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo