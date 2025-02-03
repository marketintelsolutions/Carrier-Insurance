import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const SectionTwo = () => {
    return (
        <section className='relative py-[190px] w-full flex flex-col gap-[100px] bg-[#EFEFEF]'>
            <div className='relative  w-[80%] max-w-max mx-auto flex gap-[120px] '>
                <div className="w-[30%] h-96 bg-[#cc1517] rounded-[50px]" />
                <div className="w-[65%] relative h-96 pl-[159px] pr-[60px] py-[70px] bg-black rounded-[50px] justify-end items-center gap-2.5 inline-flex">
                    <div className="">
                        <img src="/images/motherchild.png" alt="woman" className='absolute -top-[20px] -left-[250px] w-full max-w-[376px] ' />
                        <span className="text-white text-xl font-normal font-['Sans'] leading-[37px] tracking-tight">At </span>
                        <span className="text-white text-xl font-bold font-['Sans'] leading-[37px] tracking-tight">
                            Truebond Insurance Brokers Limited
                        </span>
                        <span className="text-white text-xl font-normal font-['Sans'] leading-[37px] tracking-tight">
                            , where we specialize in providing comprehensive insurance solutions tailored to meet the diverse needs of our clients. Our team is dedicated to ensuring individuals and businesses are protected against unforeseen risks by offering a wide range of life insurance and non-life insurance products
                        </span>
                    </div>
                </div>
            </div>

            <div className='relative z-[3] w-[70%] max-w-[1100px] mx-auto flex gap-[120px]'>
                <div className='flex items-start gap-[48px]'>
                    <img src="/images/vision.png" alt="vision" className='w-[91px] object-contain' />
                    <div className='flex flex-col gap-[14px]'>
                        <h2 className="text-[#cc1517] text-4xl font-semibold font-['Lato']">Our Vision</h2>
                        <p className=" text-[#666666] text-xl font-normal font-['Inter'] leading-normal tracking-tight">
                            To be the foremost choice for <br /> insurance, trusted by individuals,<br /> families, and businesses alike.</p>
                    </div>
                </div>
                <div className='flex items-start gap-[48px]'>
                    <img src="/images/value.png" alt="value" className='w-[91px] object-contain' />
                    <div className='flex flex-col gap-[14px]'>
                        <h2 className="text-[#cc1517] text-4xl font-semibold font-['Lato']">Our Values</h2>
                        <p className=" text-[#666666] text-xl font-normal font-['Inter'] leading-normal tracking-tight">
                            Integrity, Customer Focus,<br /> Innovation, and Excellence.
                        </p>
                    </div>
                </div>
            </div>

            <div className='relative z-[3] w-[80%] max-w-max mx-auto flex gap-[15px] '>
                <div
                    className="w-[65%] relative h-96 pl-[59px] pr-[60px] py-[70px] rounded-[50px]  items-center gap-2.5 inline-flex"
                    style={{ backgroundImage: 'url(/images/reassuringbg.png)' }}
                >
                    <div className="">
                        <img src="/images/medical.svg" alt="medical" className='absolute -top-[20px] -right-[165px] w-full max-w-[376px] ' />
                        <h2 className="mb-10 text-white text-5xl font-bold font-['Lato']">Reassuring, <br /> knowledgeable, clear.</h2>
                        <div className='flex gap-1.5'>
                            <span className='inline-flex bg-[#666666] w-[143px] h-1.5'></span>
                            <span className='inline-flex bg-white w-[32px] h-1.5'></span>
                        </div>
                    </div>
                </div>
                <div className="w-[35%] h-96 bg-[#cc1517] rounded-[50px] flex flex-col gap-[60px] px-24 py-[100px]" >
                    <p
                        className="w-[236px] text-[#fffefe] text-2xl font-normal font-['Albert Sans'] leading-[29.01px]"
                    >
                        Contact us today to learn more or get a free consultation.
                    </p>
                    <button className="w-[173px] h-[51px] px-[30px] py-[15px] bg-[#cc1517] rounded-[50px] border-2 border-[#fffefe] justify-start items-center inline-flex gap-6">
                        <span
                            className="text-center text-white text-base font-normal font-['Sans'] leading-tight tracking-tight">
                            Get Started
                        </span>
                        <span><FaArrowRightLong color='white' /></span>
                    </button>
                </div>
            </div>


            <div className='absolute top-0 left-0 w-full h-full flex justify-end items-center'>
                <img src="/images/blob.svg" alt="blob" className='block z-[2] translate-x-[73%] -translate-y-[15%]' />
                <img src="/images/book.svg" alt="book" className='block z-[2] w-full max-w-[350px] translate-x-[0%] -translate-y-[45%] ' />
            </div>
        </section>
    )
}

export default SectionTwo