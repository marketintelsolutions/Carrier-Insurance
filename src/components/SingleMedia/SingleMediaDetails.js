import React from 'react'
import { CiClock2 } from 'react-icons/ci'
import { IoChatbubblesSharp } from 'react-icons/io5'

const SingleMediaDetails = () => {
    return (
        <section className='w-[80%] max-w-max mx-auto py-10 flex gap-[60px] justify-center'>
            <div className='p-[30px] pb-[100px] w-fit max-w-[770px] flex flex-col gap-[18px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)] rounded-[10px]'>
                <h1
                    className="w-[630.88px] h-[64.80px] text-[#272727] text-[28px] font-semibold font-['Inter'] leading-[30.80px]">Recently with desktop publishing software like Aldus Page
                </h1>
                <div className='flex gap-1 items-center'>
                    <span className='text-sm'><CiClock2 /></span>
                    <p className="w-[120.82px]  text-[#333333] text-sm font-semibold font-['Inter'] leading-relaxed"> October 15, 2024</p>
                    <span className='text-sm'><IoChatbubblesSharp /></span>
                    <p className="w-[97.35px]  text-[#333333] text-sm font-bold font-['Inter'] underline leading-relaxed">No Comments</p>
                </div>
                <div>
                    <img src="/images/blogimagebig.png" alt="blogimagebig" />
                </div>
                <p className=" h-44 text-[#161616] text-base font-normal font-['Inter'] leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry’s standard dummy text ever since the 1500s, when an unknown printertook a galley of type and scrambled it to make a type specimen book. It has survived notonly five centuries, but also the leap into electronic typesetting, remaining essentiallyunchanged. It was popularised in the 1960s with the release of Letraset sheets containingLorem Ipsum passages, and more recently with desktop publishing software like AldusPageMaker including versions of Lorem Ipsum.</p>
                <p className=" h-44 text-[#161616] text-base font-normal font-['Inter'] leading-relaxed">It is a long established fact that a reader will be distracted by the readable content of a pagewhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-lessnormal distribution of letters, as opposed to using ‘Content here, content here’, making itlook like readable English. Many desktop publishing packages and web page editors nowuse Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncovermany web sites still in their infancy. Various versions have evolved over the years,sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <aside>
                <div className='p-[32px] border-2 border-[#F7F7F7] rounded-[5px]'>
                    <p className="w-[55.32px] h-5 text-[#161616] text-base font-bold font-['Inter'] leading-relaxed">Search</p>
                    <div className='mt-1 flex gap-2'>
                        <input type="text" className='w-[222px] h-11 border border-[#949494]' />
                        <button className="w-[58.89px] h-11 pl-[8.33px] pr-[8.13px] py-[14.50px] bg-[#ff7e00] justify-center items-center inline-flex">
                            <flex className="w-[42.43px] h-[15px] text-center text-white text-[12.88px] font-normal font-['Inter']">Search</flex>
                        </button>
                    </div>
                </div>
                <div className='p-[32px] border-2 border-[#F7F7F7] rounded-[5px] mt-[18px] flex flex-col gap-[14px]'>
                    <h3 className="w-[139.92px] h-[26px] text-[#202020] text-[22px] font-semibold font-['Inter'] leading-normal">Recent Posts</h3>
                    <p className="w-[250.31px] h-11 text-[#78797c] text-base font-normal font-['Inter'] leading-normal">Recently with desktop publishing<br />software like Aldus Page</p>
                    <p className="w-[250.31px] h-11 text-[#78797c] text-base font-normal font-['Inter'] leading-normal">Recently with desktop publishing<br />software like Aldus Page</p>
                    <p className="w-[267.39px] h-11 text-[#78797c] text-base font-normal font-['Inter'] leading-normal">Various versions have evolved over<br />the years, sometimes by accident</p>
                    <p className="w-[251.03px] h-[68px] text-[#78797c] text-base font-normal font-['Inter'] leading-normal">It is a long established fact that a<br />reader will be distracted by the<br />readable</p>
                    <p className="w-[241.55px] h-[68px] text-[#78797c] text-base font-normal font-['Inter'] leading-normal">Printer took a galley of type and<br />scrambled it to make a type<br />specimen book</p>
                </div>
                <div className='p-[32px] border-2 border-[#F7F7F7] rounded-[5px] mt-[18px] flex flex-col gap-[14px]'>
                    <h3 className=" h-[26px] text-[#202020] text-[22px] font-semibold font-['Inter'] leading-normal">Recent Comments</h3>
                    <p className="w-[250.31px] h-11 text-[#78797c] text-base font-normal font-['Inter'] leading-normal">Hello world!</p>
                </div>
                <div className='p-[32px] border-2 border-[#F7F7F7] rounded-[5px] mt-[18px] flex flex-col gap-[14px]'>
                    <h3 className="w-[139.92px]  text-[#202020] text-[22px] font-semibold font-['Inter'] leading-normal">Meta</h3>
                    <p className="w-[250.31px]  text-[#78797c] text-base font-normal font-['Inter'] leading-normal">Log in</p>
                    <p className="w-[250.31px]  text-[#78797c] text-base font-normal font-['Inter'] leading-normal">Entries feed</p>
                    <p className="w-[250.31px]  text-[#78797c] text-base font-normal font-['Inter'] leading-normal">Comments feed</p>
                    <p className="w-[250.31px]  text-[#78797c] text-base font-normal font-['Inter'] leading-normal">carrierinsurance.com</p>
                </div>
            </aside>
        </section>
    )
}

export default SingleMediaDetails