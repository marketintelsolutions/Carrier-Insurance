import React, { useEffect, useState, useRef } from 'react'
import BannerAnimation from '../BannerAnimation'

const bannerSliders = [
    { image: 'banner', text: 'Motor Insurance Policy' },
    { image: 'bannertwo', text: 'Fire And Burglary Policy' },
    { image: 'bannerthree', text: 'Group Life Insurance' },
    { image: 'bannerfour', text: 'Fidelity Guarantee Policy' },
    { image: 'bannerfive', text: 'Household Insurance' },
]

const Banner = () => {
    const [currIndex, setCurrIndex] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrIndex((prevIndex) =>
                prevIndex >= bannerSliders.length - 1 ? 0 : prevIndex + 1
            )
        }, 3000)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <section className='relative w-[92%] max-w-[1782px] rounded-[50px] mx-auto h-[611px] border flex flex-col justify-center'
            style={{ backgroundImage: 'url(/images/bannerbg.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className='flex justify-between gap-[50px] items-center w-[90%] max-w-max mx-auto '>
                <div className='w-[372px]'><img src="/images/tick.svg" alt="tick" className='w-full' /></div>
                <h1 className="w-">
                    <span className="text-[#999999] text-[45px] font-bold font-sans leading-[72px]">Protection</span>
                    <span className="text-white text-[45px] font-normal font-sans leading-[72px]"> </span>
                    <span className="text-[#cc1517] text-[45px] font-normal font-sans leading-[72px]">Against Unforeseen Risks</span>
                </h1>
                <div><BannerAnimation size={500} /></div>
            </div>
            <div className='z-[2] absolute h-[426px] w-full -bottom-[250px]'>
                <div className='w-[80%] max-w-max mx-auto flex justify-end'>
                    <div className='relative w-full max-w-[734px] rounded-[50px]'>
                        <img src={`/images/${bannerSliders[currIndex].image}.png`} alt="banner" className='w-full' />
                        <div className='absolute bottom-[30px] left-[30px] bg-[#666666] py-5 px-[30px] rounded-[15px]'>
                            <h2 className="w-[266.60px] text-[#fffefe] text-[37.90px] font-bold font-['Inter'] leading-[38.69px]">
                                {bannerSliders[currIndex].text}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
