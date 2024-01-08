import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { NavLink } from "react-router-dom";

const Header = ({
    fTitle,
    lTitle,
    homeLabel,
    cartLabel,
}) => {
    const navs = [
        {
            link: "Home",
            route: "/",
        },
        {
            link: "Cart",
            route: "/cart",
        },
        {
            link: "Login",
            route: "/login",
        },
        {
            link: "Sign Up",
            route: "/signup",
        }
    ]

    const activeLink = "text-[#c75701]";
    const normalLink = "";


    return (
        <>
            <header>
                <div className={`flex items-center justify-between py-6`}>
                    <NavLink to={navs[0].route}>
                        <h1 className="text-[#eee] text-[25px] font-[600] cursor-pointer">{fTitle}<span className="text-[#c75701]">{lTitle}</span></h1>
                    </NavLink>
                    <nav className='navLinks duration-[1s] lg:static absolute min-h-[40vh] lg:min-h-[0vh] top-[-100%] z-[100] left-0 w-full flex items-center px-5'>
                        <ul className={`text-[#eee] gap-[60px] flex lg:items-center flex-col lg:flex-row lg:justify-end w-full`}>
                            {navs.map(nav => {
                                return (
                                    <li key={nav.link} className={`cursor-pointer`}>
                                        <NavLink to={nav.route} className={({ isActive }) => (isActive ? activeLink: normalLink)}>
                                            {nav.link}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <Bars navs={navs} />
                </div>
            </header>
            <div className='flex items-center mt-[50px]'>
                <span className='text-[#eee] text-[14px]'>{homeLabel}
                    <span className='text-[10px] px-2'><FontAwesomeIcon icon={faChevronRight} /></span>
                    <span className='text-[#c75701]'>{cartLabel}</span>
                </span>
            </div>
            <div className='mt-[30px]'>
                <h1 className='font-[600] text-[30px] text-[#c75701]'>{cartLabel}</h1>
            </div>
        </>
    )
}

function Bars({ navs }) {
    const [isBarsClicked, setIsBarsClicked] = useState(false);

    const handleToggle = () => {
        setIsBarsClicked(!isBarsClicked);
    };

    const activeLink = "text-[#c75701]";
    const normalLink = "";

    return (
        <div className={`barsSection lg:hidden`}>
            <FontAwesomeIcon
                icon={isBarsClicked ? faXmark : faBars}
                className='text-[30px] cursor-pointer lg:hidden text-[white]'
                onClick={handleToggle}
            />
            <nav className={`navLinks duration-500 ease-in-out lg:static absolute bg-[#1a1a1a] min-h-[30vh] lg:min-h-[0vh] top-[8%] md:top-[16%]  z-[1000] left-0 w-full flex items-center px-5 shadow-lg transition-all ${isBarsClicked ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul className={`text-[#eee] gap-[20px] flex lg:items-center flex-col lg:flex-row`}>
                    {navs.map(nav => {
                        return (
                            <li key={nav.link} className={`cursor-pointer`}>
                                <NavLink to={nav.route} className={({ isActive }) => (isActive ? activeLink: normalLink)}>
                                    {nav.link}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Header;