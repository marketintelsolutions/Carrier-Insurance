import React from 'react'
import MediaItem from './MediaItem'


const MediaDetails = () => {
    return (
        <section className='w-[80%]  max-w-[1200px] mx-auto mt-[150px] flex flex-col items-center pb-[40px]'>
            <h3 className="text-center text-[#cc1517] text-[22px] font-normal font-['Inter'] leading-snug">Media</h3>
            <h1 className="mt-4 w-full max-w-[1082px] text-center text-[#282828] text-4xl font-extrabold font-['Inter'] leading-[42px]">Stay informed with the latest updates and insights from Carrier Insurance Brokerage.</h1>

            <div className='flex gap-5 mt-10 w-full'>
                <div><img src="/images/mediaone.png" alt="mediaone" className='w-full object-cover' /></div>
                <div> <img src="/images/mediatwo.png" alt="mediatwo" className='w-full object-cover' /></div>
                <div> <img src="/images/mediathree.png" alt="mediathree" className='w-full object-cover' /></div>
                <div> <img src="/images/mediafour.png" alt="mediafour" className='w-full object-cover' /></div>
            </div>

            <div className='mt-20 w-full flex gap-[60px]'>
                <article className='flex flex-col gap-[50px]'>
                    {
                        Array.from({ length: 5 }, (_, index) => <MediaItem id={index + 1} key={index} />)
                    }
                </article>
                <div className='flex flex-col gap-4'>
                    <div className="w-[360px] h-[136px] pl-8 pr-[222.81px] pt-[31px] pb-[42.81px] rounded-[5px] border-2 border-[#f7f7f7] flex-col justify-start items-start gap-[16.19px] inline-flex">
                        <p className="w-[94.26px] h-[26px] text-[#202020] text-[22px] font-semibold font-['Inter'] leading-normal">Archives</p>
                        <div className="self-stretch h-5 justify-end items-center inline-flex">
                            <p className="w-[138px] h-5 text-[#78797c] text-base font-normal font-['Inter'] leading-normal">December  2024</p>
                        </div>
                    </div>
                    <div className="w-[360px] h-[136px] pl-8 pr-[222.81px] pt-[31px] pb-[42.81px] rounded-[5px] border-2 border-[#f7f7f7] flex-col justify-start items-start gap-[16.19px] inline-flex">
                        <p className="w-[94.26px] h-[26px] text-[#202020] text-[22px] font-semibold font-['Inter'] leading-normal">Categories</p>
                        <div className="self-stretch h-5 justify-end items-center inline-flex">
                            <p className="w-[138px] h-5 text-[#78797c] text-base font-normal font-['Inter'] leading-normal">Uncategorized</p>
                        </div>
                    </div>
                    <div className="w-[360px] h-[241px] px-8 pt-[31px] pb-[38.82px] rounded-[5px] border-2 border-[#f7f7f7] flex-col justify-start items-start gap-[9.18px] inline-flex">
                        <div className="w-[54.18px] h-[26px] text-[#202020] text-[22px] font-semibold font-['Inter'] leading-normal">Meta</div>
                        <div className="self-stretch h-[136px] pr-44 py-[7px] flex-col justify-center items-start gap-3.5 inline-flex">
                            <div className="w-[46.28px] grow shrink basis-0 justify-center items-center inline-flex">
                                <div className="w-[46.62px] h-5 text-[#78797c] text-base font-normal font-['Inter'] leading-normal">Log in</div>
                            </div>
                            <div className="w-[90.55px] grow shrink basis-0 justify-center items-center inline-flex">
                                <div className="w-[90.89px] h-5 text-[#78797c] text-base font-normal font-['Inter'] leading-normal">Entries feed</div>
                            </div>
                            <div className="w-[120.03px] grow shrink basis-0 justify-center items-center inline-flex">
                                <div className="w-[120.42px] h-5 text-[#78797c] text-base font-normal font-['Inter'] leading-normal">Comments feed</div>
                            </div>
                            <div className="w-[112.08px] grow shrink basis-0 justify-center items-center inline-flex">
                                <div className="w-[112.45px] h-5 text-[#78797c] text-base font-normal font-['Inter'] leading-normal">carrier.com </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MediaDetails