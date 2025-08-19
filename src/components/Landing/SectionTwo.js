import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SectionTwo = () => {
    return (
        <section className='relative py-[50px] md:py-[100px] lg:py-[190px] w-full flex flex-col gap-[100px] bg-[#EFEFEF]'>


            <div className='relative z-[3] px-6 xl:px-0 lg:w-[80%] max-w-max mx-auto flex flex-wrap lg:flex-nowrap gap-[15px] '>
                <div
                    className="lg:w-[65%] relative md:h-96 pl-6 md:pl-[59px] pr-6 md:pr-[60px] py-20 md:py-10 lg:py-[70px] rounded-[50px]  items-center gap-2.5 inline-flex"
                    style={{ backgroundImage: 'url(/images/reassuringbg.png)' }}
                >
                    <div className="">

                        <h2 className="mb-10 text-white text-4xl md:text-5xl font-bold font-['Lato']">Reassuring, knowledgeable, clear.</h2>
                        <div className='flex gap-1.5'>
                            <span className='inline-flex bg-[#666666] w-[143px] h-1.5'></span>
                            <span className='inline-flex bg-white w-[32px] h-1.5'></span>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[35%] h-96 border rounded-[50px] flex flex-col gap-[60px] px-6 md:px-24 py-[100px]" >
                    <p
                        className="w-[236px] text-black text-xl md:text-2xl font-normal font-['Albert Sans'] leading-[29.01px]"
                    >
                        Contact us today to learn more or get a free consultation.
                    </p>
                    <Link to={'/contact'} className="w-[173px] text-white hover:bg-primaryBlue h-[51px] px-[20px] py-[15px] bg-[#cc1517] rounded-[50px] border-2 border-[#fffefe] justify-start items-center inline-flex gap-6">
                        <span
                            className="text-center text-base font-normal font-sans leading-tight tracking-tight">
                            Get Started
                        </span>
                        <span><FaArrowRightLong color='white' /></span>
                    </Link>
                </div>
            </div>


            {/* <div className='absolute top-0 left-0 w-full h-full flex justify-end items-center'>
                <img src="/images/blob.svg" alt="blob" className='block z-[2] translate-x-[73%] -translate-y-[15%]' />
                <img src="/images/book.svg" alt="book" className='block z-[2] w-full max-w-[350px] translate-x-[0%] -translate-y-[45%] ' />
            </div> */}
        </section>
    )
}

export default SectionTwo