import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

const services = [
    {
        icon: 'motor',
        text: 'Motor Insurance Policy',
    },
    {
        icon: 'fire',
        text: 'Fire And Burglary Policy',
    },
    {
        icon: 'group',
        text: 'Group Life Insurance',
    },
    {
        icon: 'fidelity',
        text: 'Fidelity Guarantee Policy',
    },
    {
        icon: 'fire',
        text: 'Household Insurance',
    },
]

const SectionFive = () => {
    return (
        <section className='bg-[#F5F5F5] pt-20 pb-40'>
            <div className='w-[80%] max-w-max mx-auto'>
                <h2 className="w-[264px] h-[72px] text-[#cc1517] text-5xl font-bold font-['Lato']">Claims </h2>
                <p className="w-[542px] h-[117px] text-[#5a5a5a] text-xl font-normal font-['Sans'] leading-normal">Our claims process is designed to make things simple, efficient, and supportive during times of need.</p>
            </div>

            <div className='relative w-[80%] h-[664px] max-w-max mx-auto flex gap-4'>
                <div className=''>
                    <div className='flex gap-4'>
                        <div className="w-full max-w-[468px] h-[297px] bg-[#666666] py-[54px] px-[33px] rounded-[30px]" >
                            <h3 className="text-white text-2xl font-bold font-['Lato'] tracking-tight">How to File a Claim:</h3>
                            <p className=" h-[82px] mt-[18px] mb-[25px] text-white text-xl font-normal font-['Sans'] leading-normal">Our claims process is designed to make things simple, efficient, and supportive during times of need.</p>
                            <button className="w-[173px] h-[51px] px-[30px] py-[15px] bg-[#cc1517] rounded-[50px] items-center inline-flex justify-between">
                                <span className="text-center text-white text-base font-normal font-['Sans'] leading-tight tracking-tight">Read More </span>
                                <span className='text-white'><FaArrowRightLong /></span>
                            </button>
                        </div>
                        <div className="w-full max-w-[468px] h-[297px] bg-[#666666] py-[54px] px-[33px] rounded-[30px]" >
                            <h3 className="text-white text-2xl font-bold font-['Lato'] tracking-tight">Documents Required:</h3>
                            <p className=" h-[82px] mt-[18px] mb-[25px] text-white text-xl font-normal font-['Sans'] leading-normal">An outline of necessary documents and evidence needed to initiate a claim.</p>
                            <button className="w-[173px] h-[51px] px-[30px] py-[15px] bg-[#cc1517] rounded-[50px] items-center inline-flex justify-between">
                                <span className="text-center text-white text-base font-normal font-['Sans'] leading-tight tracking-tight">Read More </span>
                                <span className='text-white'><FaArrowRightLong /></span>
                            </button>
                        </div>
                    </div>
                    <div className='w-full   h-full max-h-[351px] mt-4 rounded-[30px] overflow-hidden pr-[33px] flex items-center justify-end' style={{ backgroundImage: `url(/images/assistance.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <p className="w-[331px] text-white text-xl font-normal font-['Sans'] leading-normal">
                            For immediate assistance,
                            <br />
                            contact our Claims Support Line at
                            <br />
                            09062979787, 09062979786,
                            <br />
                            09062979782.
                        </p>
                    </div>
                </div>
                <div className="w-[468px]  bg-[#cc1517] rounded-[30px] pb-[99px] flex gap-11 items-center justify-end flex-col " >
                    <div className='flex flex-col gap-11'>
                        <p className="w-[257px] h-[110px] text-white text-xl font-normal font-['Sans'] leading-normal">Our dedicated claims team is available to guide you through the entire process, from start to finish.</p>
                        <button className="w-[173px] h-[46px] px-[30px] py-[15px] bg-primaryRed rounded-[50px] border-2 border-white justify-center items-center inline-flex">
                            <span className="text-center text-white text-base font-normal font-['Sans'] leading-tight tracking-tight">Visit help center</span>
                        </button>
                    </div>
                </div>

                <div className='absolute -right-[132px] -top-[285px] '>
                    <img src="/images/motherchildtwo.png" alt="motherchildtwo" className='max-w-[405px]' />
                </div>
            </div>

        </section>
    )
}

export default SectionFive