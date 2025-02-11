import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'

const Blog = () => {
    return (
        <div className='w-[70%] max-w-[1200px] mx-auto mt-[150px]'>
            <div className='flex gap-6'>
                <div className='w-[45%]'>
                    <p className=" h-5 text-[#cc1517] text-xl font-semibold font-['Inter'] leading-tight">Blog</p>
                    <h2 className=" mt-[14px] text-[#282828] text-[42px] font-extrabold font-['Inter'] leading-[50.40px]">
                        Tips and advice on managing risks, choosing policies, and more.</h2>
                    <p className=" h-[78px] mt-[14px] text-[#1e1e1e] text-[17px] font-normal font-['Inter'] leading-relaxed">Tips and advice on managing risks, choosing policies, and more.</p>
                </div>

                <div className='w-[52%] flex gap-6'>
                    <div className="w-[288px] h-[279.72px] px-[30px] pt-[49px] pb-[58.34px] bg-[#cc1517] rounded-[30px] flex-col justify-center items-start  inline-flex">
                        <p className="self-stretch  text-white text-[23px] font-extrabold font-['Inter'] leading-7">Case Studies</p>
                        <p className="mt-3 mb-11 self-stretch  text-[#fffefe] text-[17px] font-normal font-['Inter'] leading-tight">Real-world examples of how we’ve supported clients with tailored insurance solutions.</p>
                        <div className="justify-center items-center gap-[15px] inline-flex">
                            <div className="text-center text-white text-base font-medium font-['Inter'] leading-none">Click here</div>
                            <span className="text-center text-white text-base font-black font-['Font Awesome 5 Free'] leading-none"><FaChevronRight /></span>
                        </div>
                    </div>
                    <div className='w-[288px] border h-[279.72px] rounded-[30px]'>
                        <img src="/images/planning.png" alt="planning" className='w-full h-full object-cover rounded-[30px]' />
                    </div>
                </div>
            </div>
            <div className='flex gap-6 mt-6'>
                <div className='w-[45%]'>
                    <img src="/images/planningtwo.png" alt="planningtwo" className='w-full h-full object-cover rounded-[30px]' />
                </div>

                <div className='w-[52%] flex gap-6'>
                    <div className='w-[288px] border h-[279.72px] rounded-[30px]'>
                        <img src="/images/planningthree.png" alt="planning" className='w-full h-full object-cover rounded-[30px]' />
                    </div>
                    <div className="w-[288px] h-[279.72px] px-[30px] pt-[49px] pb-[58.34px] bg-[#cc1517] rounded-[30px] flex-col justify-center items-start  inline-flex">
                        <p className="self-stretch  text-white text-[23px] font-extrabold font-['Inter'] leading-7">Press Releases</p>
                        <p className="mt-3 mb-11 self-stretch  text-[#fffefe] text-[17px] font-normal font-['Inter'] leading-tight">Find official statements and announcements.</p>
                        <div className="justify-center items-center gap-[15px] inline-flex">
                            <div className="text-center text-white text-base font-medium font-['Inter'] leading-none">Click here</div>
                            <span className="text-center text-white text-base font-black font-['Font Awesome 5 Free'] leading-none"><FaChevronRight /></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog