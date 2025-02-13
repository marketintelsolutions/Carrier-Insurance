import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const ClaimsDetails = () => {
    return (
        <section className='w-[75%] py-[120px] max-w-[1200px] mx-auto'>
            <h1 className="max-w-[291.73px] h-[72px] text-[#cc1517] text-6xl font-bold font-['Montserrat'] leading-[72px]">Claims </h1>
            <p className="mt-9 max-w-[626px]  text-[#5a5a5a] text-2xl font-normal font-['Inter'] leading-[34px]">Our claims process is designed to make things simple, efficient, and supportive during times of need.</p>

            <div className='flex gap-[120px]'>
                <div className='flex flex-col gap-9 mt-20'>
                    <div className="w-full max-w-[468px] h-[297px] bg-[#D9D5D5] py-[54px] px-[33px] rounded-[30px]" >
                        <h3 className="text-[#060606] text-2xl font-bold font-['Lato'] tracking-tight">How to File a Claim:</h3>
                        <p className=" h-[82px] mt-[18px] mb-[25px] text-[#060606] text-xl font-normal font-['Sans'] leading-normal">Our claims process is designed to make things simple, efficient, and supportive during times of need.</p>
                        <button className="w-[173px] h-[51px] px-[30px] py-[15px] bg-[#cc1517] rounded-[50px] items-center inline-flex justify-between">
                            <span className="text-center text-white text-base font-normal font-['Sans'] leading-tight tracking-tight">Read More </span>
                            <span className='text-white'><FaArrowRightLong /></span>
                        </button>
                    </div>
                    <div className="w-full max-w-[468px] h-[297px] bg-[#D9D5D5] py-[54px] px-[33px] rounded-[30px]" >
                        <h3 className="text-[#060606] text-2xl font-bold font-['Lato'] tracking-tight">Documents Required:</h3>
                        <p className=" h-[82px] mt-[18px] mb-[25px] text-[#060606] text-xl font-normal font-['Sans'] leading-normal">An outline of necessary documents and evidence needed to initiate a claim.</p>
                        <button className="w-[173px] h-[51px] px-[30px] py-[15px] bg-[#cc1517] rounded-[50px] items-center inline-flex justify-between">
                            <span className="text-center text-white text-base font-normal font-['Sans'] leading-tight tracking-tight">Read More </span>
                            <span className='text-white'><FaArrowRightLong /></span>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-9 mt-20'>
                    <div className="w-full max-w-[468px] h-[297px]  py-[54px] px-[33px] rounded-[30px]" >
                        <h3 className="text-[#060606] text-2xl font-bold font-['Lato'] tracking-tight">Support Team</h3>
                        <p className=" h-[82px] mt-[18px] mb-[25px] text-[#060606] text-xl font-normal font-['Sans'] leading-normal">Our dedicated claims team is available to guide you through the entire process, from start to finish.</p>
                        <button className="w-[143px] text-center h-[51px] px-[0px] py-[15px] border border-[#cc1517] rounded-[50px] items-center inline-flex justify-center text-primaryRed text-base ">
                            <span className="text-center  font-normal font-['Sans'] leading-tight tracking-tight">Visit help center </span>
                        </button>
                    </div>
                    <div className="w-full max-w-[468px] h-[297px] flex items-center justify-center py-[54px] px-[33px] rounded-[30px]" >

                        <p className="w-[469px]">
                            <span className="text-[#060606] text-xl font-normal font-['Inter'] leading-normal">For immediate assistance,
                                <br />
                                contact our Claims Support Line
                                <br />
                                at {" "}
                            </span>
                            <span className="text-[#060606] text-xl font-bold font-['Inter'] leading-normal">
                                09062979787,09062979786,
                                <br />
                                09062979782.
                            </span>
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClaimsDetails