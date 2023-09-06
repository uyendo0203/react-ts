import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

const HeaderCpn = ({ isHomepage }) => {
    const router = useRouter();
    const [active, setActive] = useState(false)
    const [isFixed, setFixed] = useState(false)
    const [classHeader, setClassHeader] = useState('')

    const { DataScrollToSec } = useSelector((state) => state.FicReducers)

    const toggleMenu = () => { setActive(!active) }

    const isSticky = (e) => {
        const scrollTop = window.scrollY;
        if (scrollTop >= 250) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    };

    // click menu on homepage and hide menu mobile
    useEffect(() => {
        if (DataScrollToSec && DataScrollToSec.id) {
            setActive(false)
        }
    }, [DataScrollToSec]);

    // change page and hide menu mobile
    useEffect(() => {
        if (active) {
            setActive(false)
        }
    }, [router.asPath]);

    useEffect(() => {

    }, []);

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    });

    useEffect(() => {
        if (isHomepage === false && isFixed === true) {
            setClassHeader('bg-[#ffffffed] border-fic-black border-b')
        }
        else if (isHomepage === true && isFixed === true) {
            setClassHeader('bg-[#727b7ad1]')
        } else {
            setClassHeader('bg-[transparent]')
        }
    }, [isHomepage, isFixed])

    return (
        <header className={`${classHeader} ${isFixed ? 'is-sticky top-0' : 'sm:top-[40px]'} ${active ? 'menu-fixed' : ''} ${isHomepage ? 'absolute  left-[50%] -translate-x-[50%] text-fic-white border-fic-white' : 'text-fic-black border-fic-black'} header flex w-full lg:w-[calc(100%-90px)] mx-auto py-[1rem] md:py-[1.563rem] md:px-[1.25rem] px-[0.75rem] z-10 border-b`}>
            <h1 className={`logo text-[20px] md:text-[32px] flex items-center font-RanuaTrialsMedium`}>
                <Link href='/'>
                    <a data-gtm-category="Top Navigation"
                        data-gtm-action="Clicked_Navigation_Link"
                        data-gtm-label='logo'
                        className='max-w-[160px] btn-gtm'>
                        <img alt='Fiction' src={`/images/logo-${isHomepage ? 'white' : 'black'}.svg`} className="w-full" />
                    </a>
                </Link>
            </h1>
            <div className='menu flex justify-end items-center w-full z-[99999]'>
                <ul className={`${active === true ? 'menu-active' : 'hidden'} md:flex justify-between flex-1 md:flex-none items-center`}>
                    {navLinks.map(({ navLinkId, scrollToId, navLinkText, navLinkRoute }, idx) => (
                        <NavLink isHomepage={isHomepage} key={idx} navLinkId={navLinkId} navLinkText={navLinkText} navLinkRoute={navLinkRoute} scrollToId={scrollToId} />
                    ))}
                </ul>
                <Link href="/booking">
                    <a
                        data-gtm-category="Top Navigation"
                        data-gtm-action="Clicked_Navigation_Link"
                        data-gtm-label='booking'
                        className='btn-gtm whitespace-nowrap
                        flex items-center justify-center
                        px-[1rem] 
                        text-[1.2rem] text-lg-[1rem] 
                        min-h-[2.5rem] md:min-w-[195px] md:min-h-[2.5rem] 
                        md:px-[20px] py-[5px] md:py-0 
                        rounded-[27px] 
                        text-fic-white hover:text-fic-white 
                        bg-green-dark hover:bg-green-dark-hover'>
                        Make a reservation
                    </a>
                </Link>
                <div onClick={() => toggleMenu()} className={`${active === true ? 'active' : ''} ${isHomepage === true ? 'home' : ''} md:hidden strip burger-strip-2 flex flex-col justify-center ml-2 cursor-pointer`}>
                    <div></div><div></div><div></div>
                </div>
            </div>
        </header>
    );
};
export default HeaderCpn;