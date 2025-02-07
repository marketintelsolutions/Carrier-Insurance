import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const CareersDetails = () => {
    return (
        <section className='w-[70%] max-w-[1200px] mx-auto pt-[90px] pb-[140px] flex gap-[60px] justify-between'>
            <div className='flex max-w-[633px] justify-end flex-col'>
                <h2 className=" text-[#cc1517] text-[32px] font-bold font-['Montserrat'] leading-[30px]">Careers</h2>
                <p className="mt-10 ">
                    <span className="text-black text-2xl font-normal font-['Montserrat'] leading-[30px] tracking-wide">Join </span>
                    <span className="text-black text-2xl font-bold font-['Montserrat'] leading-[30px] tracking-wide">
                        Truebond Insurance Brokerage Limited{" "}

                    </span>
                    <span className="text-black text-2xl font-normal font-['Montserrat'] leading-[30px] tracking-wide">
                        and be part of a team dedicated to excellence, integrity, and customer care. We’re always looking for talented professionals to grow with us.
                    </span>
                </p>

                <button className="mt-[140px] w-fit h-[85px] px-8 py-7 bg-[#433f3f] shadow-[8px_7px_18px_0px_rgba(204,204,204,1.00)] justify-between items-start inline-flex">
                    <span className="text-[#d8d4d4] text-2xl font-bold font-['Montserrat'] leading-[30px]">Open Positions:</span>
                </button>

                <div className='mt-5 flex flex-col gap-2'>
                    <div className="max-w-[533px] h-[85px] px-8 py-7 bg-white rounded-[20px] shadow-[8px_7px_18px_0px_rgba(204,204,204,1.00)] justify-between items-start inline-flex">
                        <p className="text-[#5a5a5a] text-2xl font-bold font-['Montserrat'] leading-[30px] tracking-wide">Position 1</p>
                    </div>
                    <div className="max-w-[533px] h-[85px] px-8 py-7 bg-white rounded-[20px] shadow-[8px_7px_18px_0px_rgba(204,204,204,1.00)] justify-between items-start inline-flex">
                        <p className="text-[#5a5a5a] text-2xl font-bold font-['Montserrat'] leading-[30px] tracking-wide">Position 2</p>
                    </div>
                    <div className="max-w-[533px] h-[85px] px-8 py-7 bg-white rounded-[20px] shadow-[8px_7px_18px_0px_rgba(204,204,204,1.00)] justify-between items-start inline-flex">
                        <p className="text-[#5a5a5a] text-2xl font-bold font-['Montserrat'] leading-[30px] tracking-wide">Position 3</p>
                    </div>
                </div>
            </div>

            <div className="max-w-[50%] h-[789px] px-[50px] pb-[48px] flex justify-end flex-col bg-[#cc1517] rounded-[30px]" >
                <h1 className="w-[369px] text-[#fffefe] text-[64px] font-bold font-['Montserrat'] leading-[84px]">Why Work With Us?</h1>
                <p className="w-[369px] text-black text-2xl font-normal font-['Montserrat'] leading-loose">Become part of a company that values growth, teamwork, and professional development.</p>

                <button className="mt-[62px] w-[120px] h-14 relative rounded-[35px] bg-[#666666] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                    <p className="left-[18px] top-[18px] absolute text-white text-base font-normal font-['Sans'] leading-tight tracking-tight">Apply</p>
                    <div className="w-[42px] h-[42px] left-[71px] top-[7px] absolute">
                        <div className="w-[42px] h-[42px] left-0 top-0 absolute flex justify-center items-center bg-[#fefdff] rounded-full" >

                            <span className='text-black text-[30px]'><FaArrowRight /></span>
                        </div>
                    </div>
                </button>

                <p className="mt-[45px] w-[375px] text-[#5a5a5a] text-2xl font-medium font-['Montserrat'] leading-[30px]">Send your resume and cover letter to <a href='tel:+2347074521825'>[07074521825]</a>.</p>
            </div>

        </section>
    )
}

export default CareersDetails