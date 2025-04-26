"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const [menuOpen, setMenuOpen] = useState(false);
    
    // Navigation items array
    const navItems = [
        { path: "/About", label: "About" },
        { path: "/Portfolio", label: "Portfolio" },
        { path: "/contact", label: "Contact" },
        { path: "/resume", label: "Resume" }
    ];
    
    return (
        <nav className="fixed top-0 left-0 right-0 pt-4 pb-4 w-full z-50 bg-transparent">
            <div className="flex justify-between items-center px-4 md:px-8 lg:justify-center">
                {/* Home Link - The house icon that takes users to the homepage */}
                <Link 
                    href="/" prefetch={true}
                    className={`block pb-2 mr-8 lg:mr-16 ${isHomePage ? "border-b-2 border-[#0a192f]" : ""}`}
                >
                    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 44V24H30V44M6 18L24 4L42 18V40C42 41.0609 41.5786 42.0783 40.8284 42.8284C40.0783 43.5786 39.0609 44 38 44H10C8.93913 44 7.92172 43.5786 7.17157 42.8284C6.42143 42.0783 6 41.0609 6 40V18Z" stroke="#003366" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                
                {/* Mobile menu button - This toggles the mobile menu (not a Link) */}
                <button 
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="#0a192f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                
                {/* Desktop Navigation Links - These appear on medium and larger screens */}
                <ul className="hidden md:flex items-center space-x-8 text-[24px] lg:text-[30px]">
                    {navItems.map(item => (
                        <li key={item.path}>
                            <Link 
                                href={item.path} prefetch={true}
                                className={`hover:underline hover:text-[#0a192f] hover:underline-offset-2 ${
                                    pathname === item.path ? "underline underline-offset-2 text-[#0a192f] shadow-lg" : ""
                                }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Mobile Navigation Links - These appear only when the menu is open on small screens */}
            {menuOpen && (
                <ul className="md:hidden flex flex-col items-center space-y-4 pt-4 pb-2 text-[20px] border-t mt-4 bg-white">
                    {navItems.map(item => (
                        <li key={item.path}>
                            <Link 
                                href={item.path} prefetch={true}
                                className={`hover:underline hover:text-[#0a192f] hover:underline-offset-2 ${
                                    pathname === item.path ? "underline underline-offset-2 text-[#0a192f] shadow-lg" : ""
                                }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            
            {/* Horizontal line below the navbar */}
            <div className="fixed top-[65px] w-full h-[1px] bg-[#0a192f]"></div>
        </nav>
    )
}