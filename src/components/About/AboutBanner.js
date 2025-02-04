import React from 'react'

const AboutBanner = () => {
    return (
        <section className='relative w-[95%] max-w-[1782px] rounded-[50px] mx-auto h-[611px] border  flex flex-col justify-center' style={{ backgroundImage: 'url(/images/aboutbanner.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className='flex justify-between gap-[50px] items-end w-[80%] max-w-max mx-auto '>
                <div className='w-[372px]'><img src="/images/tick.svg" alt="tick" className='w-full' /></div>
                <h1 className="w-">
                    <span class="text-[#999999] text-[64px] font-bold font-['Sans'] leading-[72px]">Protection</span>
                    <span class="text-white text-[64px] font-normal font-['Sans'] leading-[72px]"> </span>
                    <span class="text-[#cc1517] text-[64px] font-normal font-['Sans'] leading-[72px]">Against Unforeseen Risks</span>
                </h1>
                <div className=''><img src="/images/spherecurve.svg" alt="tick" /></div>
            </div>

        </section>
    )
}

export default AboutBanner