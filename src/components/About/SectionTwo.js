import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import SlideIn from '../SlideIn'

const SectionTwo = () => {
    return (
        <section className='relative py-20 md:py-[190px] px-6 xl:px-0 w-full flex flex-col gap-[100px] bg-[#EFEFEF]'>
            <div className='relative  md:w-[80%] max-w-max mx-auto flex flex-wrap lg:flex-nowrap gap-[40px] '>
                {/* <div className="w-[30%] h-96 bg-[#cc1517] rounded-[50px]" /> */}
                <img src="/images/about.jpg" alt="night city" className='md:max-w-[40%] rounded-[20px]' />
                <div className="md:w-[55%] relative md:h-96 md:pl-[39px] md:pr-[60px] md:py-[70px]  md:border rounded-[50px] justify-end items-center gap-2.5 inline-flex">
                    <div className="">

                        <span className="text-black text-base md:text-xl font-normal font-sans leading-[37px] tracking-tight">At </span>
                        <span className="text-black text-base md:text-xl font-bold font-sans leading-[37px] tracking-tight">
                            Truebond Insurance Brokers Limited
                        </span>
                        <span className="text-black text-base md:text-xl font-normal font-sans leading-[37px] tracking-tight">
                            , where we specialize in providing comprehensive insurance solutions tailored to meet the diverse needs of our clients. Our team is dedicated to ensuring individuals and businesses are protected against unforeseen risks by offering a wide range of life insurance and non-life insurance products
                        </span>
                    </div>
                </div>
            </div>

            <div className='relative z-[3] md:w-[70%] max-w-[1100px] mx-auto flex flex-wrap lg:flex-nowrap gap-[120px]'>
                <SlideIn duration={700} distance={50} direction="left" delay={500}>
                    <div className='flex flex-wrap lg:flex-nowrap items-start gap-[48px]'>
                        <img src="/images/vision.png" alt="vision" className='w-[91px] object-contain' />
                        <div className='flex flex-col gap-[14px]'>
                            <h2 className="text-[#cc1517] text-4xl font-semibold font-['Lato']">Our Vision</h2>
                            <p className=" text-[#666666] text-base md:text-xl font-normal font-['Inter'] leading-normal tracking-tight">
                                To be the foremost choice for <br /> insurance, trusted by individuals,<br /> families, and businesses alike.</p>
                        </div>
                    </div>
                </SlideIn>

                <SlideIn duration={700} distance={50} direction="right" delay={700}>
                    <div className='flex flex-wrap lg:flex-nowrap items-start gap-[48px]'>
                        <img src="/images/value.png" alt="value" className='w-[91px] object-contain' />
                        <div className='flex flex-col gap-[14px]'>
                            <h2 className="text-[#cc1517] text-4xl font-semibold font-['Lato']">Our Values</h2>
                            <p className=" text-[#666666] text-base md:text-xl font-normal font-['Inter'] leading-normal tracking-tight">
                                Integrity, Customer Focus,<br /> Innovation, and Excellence.
                            </p>
                        </div>
                    </div>
                </SlideIn>
            </div>

            <div className='relative z-[3] md:w-[80%] max-w-max mx-auto flex flex-wrap lg:flex-nowrap gap-[15px] '>
                <div
                    className="w-full  lg:w-[65%] relative md:h-96 pl-6 md:pl-[59px] pr-6 md:pr-[60px] py-20 md:py-10 lg:py-[70px] rounded-[50px]  items-center gap-2.5 inline-flex"
                    style={{ backgroundImage: 'url(/images/reassuringbg.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                >
                    <SlideIn duration={800} distance={60} direction="left" delay={900}>
                        <div className="">
                            <h2 className="mb-10 text-white text-2xl md:text-3xl font-bold font-['Lato']">We are Truthful</h2>
                            <h2 className="mb-10 text-white text-2xl md:text-3xl font-bold font-['Lato']">We are Reliable</h2>
                            <h2 className="mb-10 text-white text-2xl md:text-3xl font-bold font-['Lato']">We are Dependable</h2>
                            <h2 className="mb-10 text-white text-2xl md:text-3xl font-bold font-['Lato']">We are Reassuring</h2>
                            <div className='flex gap-1.5'>
                                <span className='inline-flex bg-[#666666] w-[143px] h-1.5'></span>
                                <span className='inline-flex bg-white w-[32px] h-1.5'></span>
                            </div>
                        </div>
                    </SlideIn>
                </div>

                <div className="md:w-[35%] w-full h-96 bg-[#cc1517] rounded-[50px] flex flex-col  px-6 md:px-24 py-20 md:py-[100px]" >
                    <SlideIn duration={800} distance={60} direction="right" delay={1100}>
                        <p
                            className="w-[236px] text-[#fffefe] text-2xl font-normal font-['Albert Sans'] leading-[29.01px]"
                        >
                            Contact us today to learn more or get a free consultation.
                        </p>
                        <Link to={'/contact'} className="w-[173px] mt-[60px] text-white hover:bg-primaryBlue h-[51px] px-[20px] py-[15px] bg-[#cc1517] rounded-[50px] border-2 border-[#fffefe] justify-start items-center inline-flex gap-6">
                            <span
                                className="text-center text-base font-normal font-sans leading-tight tracking-tight">
                                Get Started
                            </span>
                            <span><FaArrowRightLong color='white' /></span>
                        </Link>
                    </SlideIn>
                </div>
            </div>
        </section>
    )
}

export default SectionTwo