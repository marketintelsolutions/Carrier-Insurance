import React from 'react'

const Portfolio = () => {
    return (
        <section className='bg-[#FFFEFE]'>
            <div className='w-[70%] max-w-[1200px] mx-auto py-[110px] flex'>
                <div className='w-[50%]'>
                    <h2 className="w-[175.23px] h-5 text-[#cc1517] text-xl font-semibold font-['Inter'] leading-tight">Portfolio</h2>
                    <p className="mt-[35px] text-[#282828] text-[28px] font-extrabold font-['Inter'] leading-[33px]">Explore some of our successful insurance solutions and case studies, demonstrating our commitment to meeting client needs across different sectors.</p>
                    <div className='mt-[53px] flex flex-col'>
                        <div className='flex gap-5 px-5 py-[45px]'>
                            <div className='bg-primaryRed w-fit h-fit rounded-full p-3'><img src="/images/case.svg" alt="case" /></div>
                            <div>
                                <p className="text-[#040404] text-[21px] font-semibold font-['Inter'] leading-[23.10px]">Case Studies:</p>
                                <p className="w-[217.51px] h-[78px] text-[#1e1e1e] text-[17px] font-normal font-['Inter'] leading-snug">Real-world examples of how we’ve supported clients with tailored insurance solutions.</p>
                            </div>
                        </div>
                        <div className='flex gap-5 px-5 py-[45px]'>
                            <div className='bg-primaryRed w-fit h-fit rounded-full p-3'><img src="/images/clientsbig.svg" alt="clientsbig" /></div>
                            <div>
                                <p className="text-[#040404] text-[21px] font-semibold font-['Inter'] leading-[23.10px]">Our Clients:</p>
                                <p className="w-[217.51px] h-[78px] text-[#1e1e1e] text-[17px] font-normal font-['Inter'] leading-snug">A look at some of the individuals and businesses we’re proud to serve.</p>
                            </div>
                        </div>
                        <div className='flex gap-5 px-5 py-[45px]'>
                            <div className='bg-primaryRed w-fit h-fit rounded-full p-3'><img src="/images/industries.svg" alt="clientsbig" /></div>
                            <div>
                                <p className="text-[#040404] text-[21px] font-semibold font-['Inter'] leading-[23.10px]">Industries Covered:</p>
                                <p className="w-[217.51px] h-[78px] text-[#1e1e1e] text-[17px] font-normal font-['Inter'] leading-snug">From real estate to healthcare and manufacturing, see how we provide industry-specific protection.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[50%]  flex flex-col justify-center'>
                    <div className='relative w-fit'>
                        <img src="/images/portfolioone.png" alt="portfolioone" className='relative z-[1] w-full max-w-[345px]' />
                        <div className="absolute z-[2] top-[-75px] -right-[95px] w-[170px] h-[170px]  bg-[#cc1517] rounded-[100px]">
                            <div className="w-[150px] h-[150px] flex flex-col justify-center items-center left-[10px] top-[10px] absolute rounded-[150px] border border-white" >
                                <p className="h-[37px] text-center text-white text-[37px] font-semibold font-['Inter'] leading-[37px]">79%</p>
                                <p className="w-[117.85px] text-center text-white text-lg font-semibold font-['Inter'] leading-[45px]">Success</p>
                            </div>
                        </div>
                    </div>
                    <img src="/images/portfoliotwo.png" alt="portfoliotwo" className='w-full max-w-[409px] self-end -translate-y-[90px]' />
                </div>
            </div>
        </section>
    )
}

export default Portfolio