import React, { useState, useRef, useEffect } from 'react'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { navData, services } from '../utils/data'
import { FaAngleDown } from 'react-icons/fa6'
import { LuMenu } from 'react-icons/lu'

const Navbar = () => {
    const [isNavDropdown, setIsNavDropdown] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const [isMenu, setIsMenu] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({ left: 0, width: 0 });

    const itemRefs = useRef({});

    const path = `/${window.location.pathname.split('/')[1]}`

    const handleSelect = (item) => {
        setActiveItem(item);
        setIsNavDropdown(true);

        // Get bounding rect of the clicked item
        const itemRef = itemRefs.current[item.text];
        if (itemRef) {
            const rect = itemRef.getBoundingClientRect();
            const navRect = itemRef.closest('nav').getBoundingClientRect();

            setDropdownPosition({
                // left: rect.left - navRect.left,
                left: rect.left,
                width: rect.width
            });
        }
    };

    return (
        <div
            onMouseLeave={() => setIsNavDropdown(false)}
            className={`relative lg:absolute  lg:pt-5 z-[9999] left-0 w-full ${isNavDropdown ? 'bg-[#F8F8F8]' : 'bg-transparent'}`}>
            <nav
                className={`bg-[#F8F8F8] translate-y-[0%]  w-full  mx-auto max-w-sub flex items-center justify-between  h-[96px] z-[999] ${isNavDropdown ? 'rounded-t-[40px] px-6 lg:px-0' : 'lg:rounded-full px-6 lg:px-10'}`}>
                <Link to={'/'} className='w-[35%] flex  justify-start  '>
                    <img src="/images/logo.svg" alt="logos" className='w-full max-w-[240px]' />
                </Link>
                <div
                    className={`absolute left-0 top-full bg-[#F8F8F8] flex-col lg:static lg:flex-row py-10 lg:py-0 px-6 lg:px-0 lg:h-[43px] w-full lg:w-[65%] gap-10 lg:gap-[20px] lg:items-center justify-between lg:max-w-[50%] ${isMenu ? 'flex' : 'hidden lg:flex'}`}>
                    {
                        navData.map((item, index) => {
                            if (item.items) {
                                return <div
                                    key={index}
                                >
                                    <p
                                        ref={(el) => itemRefs.current[item.text] = el}
                                        onMouseEnter={() => handleSelect(item)}
                                        onClick={() => handleSelect(item)}
                                        key={index}
                                        className={`text-black hover:text-primaryRed text-sm md:text-base cursor-pointer $
                                            ${item.items[0].subItems[0].path.includes(path) && path !== '/' ? 'text-primaryRed' : isNavDropdown && activeItem?.text === item.text ? 'text-primaryGrey' : 'text-black'
                                            }
                                            `}
                                    >
                                        {item.text}
                                    </p>

                                    {isNavDropdown && activeItem?.text === item.text && (
                                        <div className="z-[9999999] lg:fixed flex lg:hidden left-0 top-full w-full bg-white lg:rounded-b-[40px] py-5 lg:py-10">
                                            <div className="w-full max-w-[95%] mx-auto px-3 xl:px-0 flex gap-5">
                                                <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-0">
                                                    {activeItem?.items.map((item, index) => (
                                                        <div key={index} className="flex flex-col gap-4 lg:gap-8">
                                                            <h3 className="text-[10px] h-5 md:text-xs font-light max-w-[200px]">
                                                                {item.heading}
                                                            </h3>
                                                            <div className="flex flex-col gap-3 lg:gap-4">
                                                                {item.subItems.map((subItem, index) => (
                                                                    <Link
                                                                        key={index}
                                                                        to={subItem.path}
                                                                        className="text-xs md:text-sm font-medium"
                                                                        onClick={() => {
                                                                            setIsNavDropdown(false);
                                                                            setIsMenu(false);
                                                                        }}
                                                                    >
                                                                        {subItem.text}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            }
                            return <Link
                                to={item.path}
                                key={index}
                                className={`text-[#5a5a5a] hover:text-primaryRed w-max text-base font-bold font-sans  tracking-tight ${path === item.path && 'text-primaryRed'}`}>
                                {item.text}
                            </Link>
                        })
                    }
                    <span><IoSearch size={25} /></span>
                </div>
                <span onClick={() => setIsMenu((prev) => !prev)} className='cursor-pointer flex lg:hidden'><LuMenu size={25} /></span>
            </nav>

            {/* BIG SCREEN DROPDOWN */}
            {isNavDropdown && activeItem?.text && (
                <div className="z-[999] lg:absolute hidden lg:flex left-0 top-full w-full min-h-[300px] bg-white rounded-b-[0px] py-10">
                    <div className="w-full max-w-sub mx-auto px-6 xl:px-0 flex gap-5">
                        <div
                            className={`grid  gap-0 ${activeItem?.items.length < 2
                                ? 'absolute top-10 grid-cols-1'
                                : 'static grid-cols-5'
                                }`}
                            style={
                                activeItem?.items.length < 2
                                    ? { left: `${dropdownPosition.left}px` }
                                    : {}
                            }
                        >
                            {activeItem?.items.map((item, index) => (
                                <div key={index} className="flex flex-col gap-8">
                                    <h3 className="text-[10px] h-5 md:text-xs font-light max-w-[200px]">
                                        {item.heading}
                                    </h3>
                                    <div className="flex flex-col gap-4">
                                        {item.subItems.map((subItem, index) => (
                                            <Link
                                                key={index}
                                                to={subItem.path}
                                                className="text-xs md:text-sm font-medium"
                                                onClick={() => {
                                                    setIsNavDropdown(false);
                                                    setIsMenu(false);
                                                }}
                                            >
                                                {subItem.text}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar