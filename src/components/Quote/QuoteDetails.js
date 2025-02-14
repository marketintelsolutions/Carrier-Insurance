import React from 'react'

const QuoteDetails = () => {
    return (
        <section className='w-[80%] max-w-max mx-auto py-[120px] flex flex-col items-center'>
            <h3 className="w-[102px] h-[53px] text-center text-[#cc1517] text-[22px] font-normal font-['Inter'] leading-snug">Quote</h3>
            <h2 className="h-[74px] text-center text-[#282828] text-[32px] font-extrabold font-['Inter'] leading-[39px]">Kindly fill the form below</h2>
            <div className='py-[124px] px-[140px] w-full bg-[#E6E4E4] rounded-[30px]'>
                <form >
                    <div className='grid grid-cols-2 gap-x-[50px] gap-y-[25px]'>
                        <div className='flex flex-col gap-6'>
                            <label htmlFor="name" className="text-[#5a5a5a] text-xl font-normal font-sans tracking-tight">Full Name</label>
                            <input id="name" type="text" className='h-[82px] rounded-[5px] px-6 py-4 bg-white' />
                        </div>
                        <div className='flex flex-col gap-6'>
                            <label htmlFor="email" className="text-[#5a5a5a] text-xl font-normal font-sans tracking-tight">Email</label>
                            <input id="email" type="email" className='h-[82px] rounded-[5px] px-6 py-4 bg-white' />
                        </div>
                        <div className='flex flex-col gap-6'>
                            <label htmlFor="phone" className="text-[#5a5a5a] text-xl font-normal font-sans tracking-tight">Telephone</label>
                            <input id='phone' type="phone" className='h-[82px] rounded-[5px] px-6 py-4 bg-white' />
                        </div>
                        <div className='flex flex-col gap-6'>
                            <label htmlFor="amount" className="text-[#5a5a5a] text-xl font-normal font-sans tracking-tight">Amount</label>
                            <input id='amount' type="text" className='h-[82px] rounded-[5px] px-6 py-4 bg-white' />
                        </div>
                        <div className='flex flex-col gap-6'>
                            <label htmlFor="product" className="text-[#5a5a5a] text-xl font-normal font-sans tracking-tight">Product</label>
                            <input id='product' type="text" className='h-[82px] rounded-[5px] px-6 py-4 bg-white' />
                        </div>
                        <div className='flex flex-col gap-6'>
                            <label htmlFor="dob" className="text-[#5a5a5a] text-xl font-normal font-sans tracking-tight">Date of Birth</label>
                            <input id='dob' type="date" className='h-[82px] rounded-[5px] px-6 py-4 bg-white' />
                        </div>
                        <div className='flex flex-col gap-6'>
                            <label htmlFor="frequency" className="text-[#5a5a5a] text-xl font-normal font-sans tracking-tight">Frequency of Payment</label>
                            <input id='frequency' type="text" className='h-[82px] rounded-[5px] px-6 py-4 bg-white' />
                        </div>
                        <div className='flex flex-col gap-6'>
                            <label htmlFor="duration" className="text-[#5a5a5a] text-xl font-normal font-sans tracking-tight">Duration</label>
                            <input id='duration' type="text" className='h-[82px] rounded-[5px] px-6 py-4 bg-white' />
                        </div>
                    </div>
                    <div className='flex mt-6 flex-col gap-6'>
                        <label htmlFor="description" className="text-[#5a5a5a] text-xl font-normal font-sans tracking-tight">Description</label>
                        <textarea id='description' type="text" className='h-[165px] resize-none rounded-[5px] px-6 py-4 bg-white' />
                    </div>
                    <div className='flex justify-center'>
                        <button className="mx-auto mt-[100px] text-white hover:text-primaryRed border border-primaryRed hover:bg-white rounded-[10px] w-[275px] h-[69px]  bg-[#cc1517] justify-center items-center gap-2.5 inline-flex">
                            <span className="text-xl font-normal font-sans tracking-tight">Submit Form</span>
                        </button>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default QuoteDetails