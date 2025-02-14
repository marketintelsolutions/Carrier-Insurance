import React from 'react'
import BannerAnimation from '../BannerAnimation'

const AboutBanner = () => {
    return (
        <section className='relative w-[92%] max-w-[1782px] rounded-[50px] mx-auto h-[611px] border  flex flex-col justify-center' style={{ backgroundImage: 'url(/images/aboutbanner.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className='flex justify-between gap-[50px] items-center w-[90%] max-w-max mx-auto '>
                <div className='w-[372px]'><img src="/images/tick.svg" alt="tick" className='w-full' /></div>
                <h1 className="w-">
                    <span class="text-[#999999] text-[55px] font-bold font-['Sans'] leading-[72px]">Protection</span>
                    <span class="text-white text-[55px] font-normal font-['Sans'] leading-[72px]"> </span>
                    <span class="text-[#cc1517] text-[55px] font-normal font-['Sans'] leading-[72px]">Against Unforeseen Risks</span>
                </h1>
                <div className=''><BannerAnimation size={500} /></div>
            </div>

        </section>
    )
}

export default AboutBanner