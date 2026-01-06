"use client"
import React, {useEffect, useState} from 'react';
import "@/assets/css/nav.css"
import logo from "@/assets/rsz_2logo.png"
import Link from 'next/link';
import Image from "next/image";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1000px)').matches);

    useEffect(() => {
        const handleResize = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => {
            setIsMobile(e.matches);
        };

        const windowMatch = window.matchMedia('(max-width: 1000px)');
        windowMatch.addEventListener('change', handleResize);


        return () => windowMatch.removeEventListener('change', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className={"nav"}>
            <div className="logo" >
                <Image src={logo} alt="asd"/>
            </div>
            <div className={`nav_bottom ${isMenuOpen ? 'open' : ''}`}>
                <div className="nav_top">
                    <div className={"nav_top_element"}>Ish vaqti</div>
                </div>
                <div className="nav_list">
                    <ul>
                        <li><Link href={'#'} className="nav-link" >Home</Link></li>
                        <li><Link href={'#'} className="nav-link">Protection</Link></li>
                        <li><Link href={'#'} className="nav-link">automotive</Link></li>
                        <li><Link href={'#'} className="nav-link">technology</Link></li>
                        <li><Link href={'#'} className="nav-link">Contact</Link></li>
                        <li>
                         lang
                        </li>
                    </ul>

                </div>
            </div>
            <div className="navburger" onClick={toggleMenu}>
                {isMenuOpen ? "close" : "menu"}
            </div>
        </div>
    );
};

export default Navbar;