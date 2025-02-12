import React from 'react'
import { CiClock2 } from 'react-icons/ci'
import { IoChatbubblesSharp } from 'react-icons/io5'

const MediaItem = () => {
    return (
        <div className='w-full max-w-[780px] p-5 flex gap-[30px] rounded-[10px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)]'>
            <img src="/images/blogimage.png" alt="blogimage" />
            <div>
                <div className='flex gap-1 items-center'>
                    <span className='text-sm'><CiClock2 /></span>
                    <p className="w-[120.82px]  text-[#333333] text-sm font-semibold font-['Inter'] leading-relaxed"> October 15, 2024</p>
                    <span className='text-sm'><IoChatbubblesSharp /></span>
                    <p className="w-[97.35px]  text-[#333333] text-sm font-bold font-['Inter'] underline leading-relaxed">No Comments</p>
                </div>
                <p className="mt-[14px] mb-[17px] w-[450.60px] h-[46px] text-[#484f5e] text-xl font-semibold font-['Inter'] underline leading-snug">Analysis of Africa's Largest Economy: Business News and Financial Literacy Insights<br />Sub Title</p> <br/>
                <p className="w-[405.68px] h-[46px] text-[#161616] text-base font-normal font-['Inter'] leading-relaxed">Africa's largest economy, Nigeria, is currently facing various economic challenges but is showing signs of <br />resilience...</p> <br/>
                <button className="mt-[18px] w-[123.55px] h-10 pl-5 pr-[19.67px] py-2.5 bg-[#cc1517] rounded-[5px] justify-center items-center inline-flex">
                    <span className="w-[83.88px] h-5 text-white text-base font-bold font-['Inter'] leading-relaxed">Read More</span>
                </button>
            </div>
        </div>
    )
}

export default MediaItem