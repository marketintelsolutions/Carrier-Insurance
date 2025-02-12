import React from 'react'

const Blog = () => {
    return (
        <div className='w-[80%] max-w-[1200px] mx-auto flex flex-col items-center my-[100px]'>
            <h3 className="w-[102px] h-[53px] text-center text-[#cc1517] text-[22px] font-normal font-['Inter'] leading-snug">Blog</h3>
            <h1 className="h-[74px] text-center text-[#282828] text-[32px] font-extrabold font-['Inter'] leading-[39px]">Tips and advice on managing risks, choosing policies, and more.</h1>
            <div className='grid grid-cols-4 w-full mt-[50px]'>
                {
                    Array.from({ length: 4 }, () => (
                        <div className='h-[452px] w-full max-w-[331px]  ' style={{ backgroundImage: 'url(/images/post.png)' }}>
                            <div className='flex flex-col justify-end w-full gap-[15px] h-full px-5 pb-4 bg-gradient-to-b from-[#00000000] to-[#383838D6]'>
                                <p className="text-white text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">Insurance Brokerage</p>
                                <p className="text-white text-xl font-medium font-['Montserrat'] leading-[30px] tracking-tight [text-shadow:_0px_13px_19px_rgb(0_0_0_/_0.24)]">Life Tips From Top Ten <br />Adventure</p>
                                <button className="max-w-[165px] h-[42px] px-9 py-2.5 bg-[#cc1517] rounded-[37px] flex-col justify-start items-center gap-2.5 inline-flex overflow-hidden">
                                    <span className="text-center text-white text-sm font-bold font-['Montserrat'] leading-snug tracking-tight">View Project</span>
                                </button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Blog