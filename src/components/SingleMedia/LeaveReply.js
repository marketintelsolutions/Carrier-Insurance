import React from 'react'

const LeaveReply = () => {
    return (
        <section className='w-[80%] max-w-max mx-auto pb-[100px]'>
            <div className='flex flex-col gap-4 w-full max-w-[780px] bg-[#FFFFFF01] p-[30px] pb-20 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)]'>
                <h2 className="w-[214px] h-[39px] text-[#272727] text-[32px] font-semibold font-['Inter'] leading-9">Leave a Reply</h2>
                <p className="w-[529.28px] h-5 text-[#161616] text-base font-normal font-['Inter'] leading-relaxed">Your email address will not be published. Required fields are marked *</p>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="comment">Comment *</label>
                    <textarea name="comment" id="comment" className='resize-none h-[140px] w-full max-w-[405px] bg-white border border-[#CCCCCC]'></textarea>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name *</label>
                    <input type='text' name="name" id="name" className='resize-none h-[27px] w-full max-w-[405px] bg-white border border-[#CCCCCC]' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email *</label>
                    <input name="email" type='email' id="email" className='resize-none h-[27px] w-full max-w-[405px] bg-white border border-[#CCCCCC]' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="website">Email *</label>
                    <input name="website" type='text' id="website" className='resize-none h-[27px] w-full max-w-[405px] bg-white border border-[#CCCCCC]' />
                </div>
                <div className='flex gap-2'>
                    <input type="checkbox" name="save" id="save" />
                    <p className="w-[593.35px] h-[26px] text-[#161616] text-base font-normal font-['Inter'] leading-relaxed">Save my name, email, and website in this browser for the next time I comment.</p>
                </div>
                <button className="w-[158.61px] h-[39px] px-5 py-3 text-white hover:bg-primaryBlue bg-[#cc1517] rounded-[5px] justify-center items-center inline-flex overflow-hidden">
                    <span className=" text-center text-[13.20px] font-normal font-['Inter'] uppercase">Post Comment</span>
                </button>


            </div>
        </section>
    )
}

export default LeaveReply