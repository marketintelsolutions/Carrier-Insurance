import React from 'react'
import Marquee from 'react-fast-marquee'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa6'
import SlideIn from '../SlideIn'

const clients = [
    'polaris',
    'providus',
    'tgi',
    'heyden',
    'keystone',
    'webzen',
    'sage',
    'zkt',
    'gartmore',
    'legend',
    'oti',
    'pacholdings',
    'nahco',
    'kada',
    'fsc',
    'rainoil',
    'lifeline',
    'tempo',
    'zmax',
    'nobelguard',
    'pacific',
    'mikano',
    'trapezoid',
    'tak',
    'jite',
    'triumph',
    'prime',
]

const SectionEight = () => {
    return (
        <section className='py-20 md:py-[120px] bg-[#666] px-6 xl:px-0 '>
            <SlideIn duration={800} distance={60} direction="bottom" delay={100}>
                <div className='md:w-[80%] max-w-max mx-auto rounded-[30px] bg-white py-[60px] flex flex-col items-center gap-[18px]'>
                    <h2 className="text-[#cc1517] text-2xl md:text-5xl font-bold font-['Lato']">Our Clients:</h2>
                    <p className="text-center text-sm md:text-base text-[#666666] font-normal font-sans leading-tight tracking-tight">
                        A look at some of the individuals and businesses we're proud to serve.
                    </p>
                    <div className='px-4 w-full'>
                        <Marquee>
                            <div className='flex px-5 justify-between items-center gap-10'>
                                {
                                    clients.map((item, index) => (
                                        <img key={index} src={`/images/partners/${item}.png`} alt="walmart" className='max-w-[100px] md:max-w-[150px]' />
                                    ))
                                }
                            </div>
                        </Marquee>
                    </div>
                </div>
            </SlideIn>
        </section>
    )
}

export default SectionEight