import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const SectionSix = () => {
    return (
        <div className=' bg-gradient-to-b from-[#fff] to-[#D9D5D5]'>
            <section className='py-40 w-full max-w-max mx-auto'>
                <h1 className="w-[291.73px] h-[72px] text-[#00b050] text-6xl font-bold font-['Montserrat'] leading-[72px]">Claims </h1>
                <p className="w-[626px] mt-9 text-[#5a5a5a] text-2xl font-normal font-['Inter'] leading-[34px]">Our claims process is designed to make things simple, efficient, and supportive during times of need.</p>

                <div className='mt-20 flex gap-[127px]'>
                    <div className="w-[532px] h-[296px] p-12 relative bg-[#d8d4d4] rounded-[48px] flex flex-col justify-between">

                        <div className=''>
                            <h2 className="text-[#060606] text-2xl font-extrabold font-['Inter'] leading-[30px]">How to File a Claim:</h2>
                            <p className="w-[441px] mt-6 text-[#060606] text-xl font-normal font-['Inter'] leading-normal">Our claims process is designed to make things simple, efficient, and supportive during times of need.</p>
                        </div>

                        <button className="w-[173px] text-white hover:text-primaryGreen hover:bg-white border border-primaryGreen h-[51px] px-[30px] bg-[#00b050] rounded-[50px] justify-between items-center inline-flex">
                            <span className="text-center  text-base font-semibold font-['Inter'] leading-none">Read More </span>
                            <span><FaArrowRightLong /></span>
                        </button>
                    </div>
                    <div className="w-[532px] h-[296px] p-12 relative bg-white rounded-[48px] flex flex-col justify-between">

                        <div className=''>
                            <h2 className="text-[#060606] text-2xl font-extrabold font-['Inter'] leading-[30px]">Support Team</h2>
                            <p className="w-[441px] mt-6 text-[#060606] text-xl font-normal font-['Inter'] leading-normal">Our dedicated claims team is available to guide you through the entire process, from start to finish.</p>
                        </div>

                        <button className="w-[183px] hover:text-white text-primaryGreen bg-white border border-primaryGreen h-[51px] px-[30px] hover:bg-[#00b050] rounded-[50px] justify-center items-center inline-flex">
                            <span className="text-center  text-base font-semibold font-['Inter'] leading-none">Visit help center </span>
                        </button>
                    </div>
                </div>
                <div className='mt-[36px] flex gap-[127px] items-center'>
                    <div className="w-[532px] h-[296px] p-12 relative bg-[#d8d4d4] rounded-[48px] flex flex-col justify-between">

                        <div className=''>
                            <h2 className="text-[#060606] text-2xl font-extrabold font-['Inter'] leading-[30px]">Documents Required:</h2>
                            <p className="w-[441px] mt-6 text-[#060606] text-xl font-normal font-['Inter'] leading-normal">An outline of necessary documents and evidence needed to initiate a claim.</p>
                        </div>

                        <button className="w-[173px] text-white hover:text-primaryGreen hover:bg-white border border-primaryGreen h-[51px] px-[30px] bg-[#00b050] rounded-[50px] justify-between items-center inline-flex">
                            <span className="text-center  text-base font-semibold font-['Inter'] leading-none">Read More </span>
                            <span><FaArrowRightLong /></span>
                        </button>
                    </div>
                    <div className=" p-12 relative bg-white rounded-[48px] flex flex-col justify-between">

                        <div className=''>
                            <p className="w-[469px]"><span class="text-[#060606] text-xl font-normal font-['Inter'] leading-normal">For immediate assistance, <br />contact our Claims Support Line <br />at </span><span class="text-[#060606] text-xl font-bold font-['Inter'] leading-normal">09062979787,09062979786,<br />09062979782.</span></p>
                        </div>


                    </div>
                </div>
            </section>
        </div >
    )
}

export default SectionSix