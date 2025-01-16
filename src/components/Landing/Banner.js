import React from 'react'

const Banner = () => {
    return (
        <section className='h-lvh max-h-[720px] bg-gradient-to-b from-[#00B050] to-[#004A22] flex flex-col justify-center'>
            <div className='w-full max-w-[1420px] relative mx-auto  h-it flex justify-end'>
                <div className='w-full max-w-[1184px]'>
                    <img src="/images/banner.png" alt="banner" className='object-cover w-full' />
                </div>
                <div className="absolute -left-[30px] bottom-[47px] w-[457px] h-[199px] inline-flex bg-[#009444]/80 rounded-[30px] items-center justify-center">
                    <h2 className="w-[363px] text-[#fffefe] text-5xl font-bold font-['Inter'] leading-[49px]">Motor <br /> Insurance <br /> Policy</h2>
                </div>
            </div>
            <div className='w-full max-w-max mx-auto flex justify-end gap-2.5 '>
                <div className="h-[47px] p-2.5 bg-[#d8d4d4] justify-center items-center gap-2.5 inline-flex border-b-4 border-[#00B050]">
                    <div className="text-[#191a1c] text-base font-normal font-['Sans'] tracking-wide">Get Quote </div>
                </div>
                <div className="h-[47px] p-2.5 bg-[#d8d4d4] justify-center items-center gap-2.5 inline-flex border-b-4 border-[#00B050]">
                    <div className="text-[#191a1c] text-base font-normal font-['Sans'] tracking-wide">Manage Polies  </div>
                </div>
                <div className="h-[47px] p-2.5 bg-[#d8d4d4] justify-center items-center gap-2.5 inline-flex border-b-4 border-[#00B050]">
                    <div className="text-[#191a1c] text-base font-normal font-['Sans'] tracking-wide">Report Claims</div>
                </div>
            </div>
        </section>
    )
}

export default Banner