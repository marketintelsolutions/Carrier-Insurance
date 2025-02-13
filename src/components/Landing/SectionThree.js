import React from 'react'
import { FaArrowRightLong, FaChevronRight } from 'react-icons/fa6'

const SectionThree = () => {
    return (
        <section className='bg-white py-[140px]'>

            <div className='w-[80%] max-w-max mx-auto py-[100px] px-[60px]'>
                <div className='relative flex justify-between items-end'>
                    <div className='flex flex-col gap-[27px] w-full max-w-[452px]'>
                        <h3 className="h-[23px] text-[#cc1517] text-2xl font-bold font-['Lato'] tracking-tight">Services</h3>
                        <p className="text-[#191a1c] text-2xl font-normal font-sans leading-7 tracking-wide">Explore our wide range of insurance products, designed to meet the diverse needs of individuals, families, and businesses.</p>
                    </div>
                    <button className="w-[173px] h-[51px] px-[30px] py-[15px] bg-[#cc1517] rounded-[50px] justify-start items-center inline-flex">
                        <span className="text-center text-white text-base font-normal font-sans leading-tight tracking-tight">View All Service</span>
                    </button>
                    <img src="/images/calculator.svg" alt="calculator" className='absolute -top-[155px] -right-[46px]' />
                </div>

                <div className='mt-[72px] grid grid-cols-3 gap-[30px]'>
                    <div className='bg-[#D9D9D9]  flex flex-col gap-[13px] rounded-[18px] pt-3 pb-[30px] px-[46px]'>
                        <div className='flex gap-[22px] items-center'>
                            <img src="/images/life.svg" alt="life" />
                            <h2 className=" text-[#060606] text-[22.19px] font-semibold font-['Lato']">Life Insurance</h2>
                        </div>
                        <p className=" h-[98.63px] text-[#666666] text-xs font-normal font-sans leading-[14.90px]">Life insurance provides financial security for loved ones in the event of the policyholder’s death. It ensures dependents are protected from financial hardships and can also serve as a savings or investment tool.</p>
                        <button className="w-[106.65px] self-end h-[31.44px] px-[18.49px] py-[9.25px] bg-[#cc1517] rounded-[30.82px] items-center inline-flex justify-between">
                            <span className="text-center text-white text-[9.86px] font-normal font-sans leading-3 tracking-tight">Get Started </span>
                            <span className='text-[10px] text-white'><FaArrowRightLong /></span>
                        </button>
                    </div>

                    <div className='bg-[#D9D9D9]  flex flex-col gap-[13px] rounded-[18px] pt-3 pb-[30px] px-[46px]'>
                        <div className='flex gap-[16px] items-center'>
                            <img src="/images/health.svg" alt="health" />
                            <h2 className="w-max text-[#060606] text-[22.19px] font-semibold font-['Lato']">Health Insurance</h2>
                        </div>
                        <p className=" h-[98.63px] text-[#666666] text-xs font-normal font-sans leading-[14.90px]">
                            Covers medical expenses, including hospitalization, medications, and preventive care, ensuring individuals and families can access quality healthcare without financial strain.
                        </p>
                        <button className="w-[106.65px] self-end h-[31.44px] px-[18.49px] py-[9.25px] bg-[#cc1517] rounded-[30.82px] items-center inline-flex justify-between">
                            <span className="text-center text-white text-[9.86px] font-normal font-sans leading-3 tracking-tight">Get Started </span>
                            <span className='text-[10px] text-white'><FaArrowRightLong /></span>
                        </button>
                    </div>
                    <div className='bg-[#D9D9D9]  flex flex-col gap-[13px] rounded-[18px] pt-3 pb-[30px] px-[46px]'>
                        <div className='flex gap-[16px] items-center'>
                            <img src="/images/car.svg" alt="car" />
                            <h2 className=" text-[#060606] text-[22.19px] font-semibold font-['Lato']">Motor Insurance</h2>
                        </div>
                        <p className=" h-[98.63px] text-[#666666] text-xs font-normal font-sans leading-[14.90px]">Life insurance provides financial security for loved ones in the event of the policyholder’s death. It ensures dependents are protected from financial hardships and can also serve as a savings or investment tool.</p>
                        <button className="w-[106.65px] self-end h-[31.44px] px-[18.49px] py-[9.25px] bg-[#cc1517] rounded-[30.82px] items-center inline-flex justify-between">
                            <span className="text-center text-white text-[9.86px] font-normal font-sans leading-3 tracking-tight">Get Started </span>
                            <span className='text-[10px] text-white'><FaArrowRightLong /></span>
                        </button>
                    </div>
                </div>

                <div className='mt-[30px] grid grid-cols-5 gap-10 gap-y-12'>
                    <div className="w-max min-w-[180px] flex items-center gap-[13px] px-5 h-[47px] bg-[#f8f8f8] rounded-[30px]" >
                        <span className='p-1 rounded-full bg-primaryRed text-white text-[12px]'><FaChevronRight /></span>
                        <p className="w-max text-black text-[15px] font-semibold font-['Inter'] leading-relaxed">Life Insurance</p>
                    </div>
                    <div className="w-max min-w-[180px] flex items-center gap-[13px] px-5 h-[47px] rounded-[30px]" >
                        <span className='p-1 rounded-full bg-primaryRed text-white text-[12px]'><FaChevronRight /></span>
                        <p className="w-max text-black text-[15px] font-semibold font-['Inter'] leading-relaxed">Marine Insurance</p>
                    </div>
                    <div className="w-max min-w-[180px] flex items-center gap-[13px] px-5 h-[47px] rounded-[30px]" >
                        <span className='p-1 rounded-full bg-primaryRed text-white text-[12px]'><FaChevronRight /></span>
                        <p className="w-max text-black text-[15px] font-semibold font-['Inter'] leading-relaxed">Health Insurance</p>
                    </div>
                    <div className="w-max min-w-[180px] flex items-center gap-[13px] px-5 h-[47px] bg-[#D9D9D9] rounded-[30px]" >
                        <span className='p-1 rounded-full bg-primaryRed text-white text-[12px]'><FaChevronRight /></span>
                        <p className="w-max text-black text-[15px] font-semibold font-['Inter'] leading-relaxed">Fire Insurance</p>
                    </div>
                    <div className="w-max min-w-[180px] flex items-center gap-[13px] px-5 h-[47px] bg-[#D9D9D9] rounded-[30px]" >
                        <span className='p-1 rounded-full bg-primaryRed text-white text-[12px]'><FaChevronRight /></span>
                        <p className="w-max text-black text-[15px] font-semibold font-['Inter'] leading-relaxed">Motor Insurance</p>
                    </div>
                    <div className="w-max min-w-[180px] flex items-center gap-[13px] px-5 h-[47px] bg-[#D9D9D9] rounded-[30px]" >
                        <span className='p-1 rounded-full bg-primaryRed text-white text-[12px]'><FaChevronRight /></span>
                        <p className="w-max text-black text-[15px] font-semibold font-['Inter'] leading-relaxed">Liability Insurance</p>
                    </div>
                    <div className="w-max min-w-[180px] flex items-center gap-[13px] px-5 h-[47px] bg-[#D9D9D9] rounded-[30px]" >
                        <span className='p-1 rounded-full bg-primaryRed text-white text-[12px]'><FaChevronRight /></span>
                        <p className="w-max text-black text-[15px] font-semibold font-['Inter'] leading-relaxed">Property Insurance</p>
                    </div>
                    <div className="w-max min-w-[180px] flex items-center gap-[13px] px-5 h-[47px] bg-[#D9D9D9] rounded-[30px]" >
                        <span className='p-1 rounded-full bg-primaryRed text-white text-[12px]'><FaChevronRight /></span>
                        <p className="w-max text-black text-[15px] font-semibold font-['Inter'] leading-relaxed">Crop Insurance</p>
                    </div>
                    <div className="w-max min-w-[180px] flex items-center gap-[13px] px-5 h-[47px] bg-[#D9D9D9] rounded-[30px]" >
                        <span className='p-1 rounded-full bg-primaryRed text-white text-[12px]'><FaChevronRight /></span>
                        <p className="w-max text-black text-[15px] font-semibold font-['Inter'] leading-relaxed">Travel Insurance</p>
                    </div>
                    <div className="w-max min-w-[180px] flex items-center gap-[13px] px-5 h-[47px] bg-[#D9D9D9] rounded-[30px]" >
                        <span className='p-1 rounded-full bg-primaryRed text-white text-[12px]'><FaChevronRight /></span>
                        <p className="w-max text-black text-[15px] font-semibold font-['Inter'] leading-relaxed">Home Insurance</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SectionThree