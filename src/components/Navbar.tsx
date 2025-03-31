"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    
    // Navigation items array
    const navItems = [
        { path: "/About", label: "About" },
        { path: "/Portfolio", label: "Portfolio" },
        { path: "/contact", label: "Contact" },
        { path: "/resume", label: "Resume" }
    ];
    
    return (
        <nav className="flex justify-center fixed top-0 pt-4 pb-4 mx-auto w-full text-[30px]">
            <ul className="flex items-center space-x-8 relative">
                <li className="absolute" style={{ right: "calc(100% + 0px)" }}>
                    <Link 
                        href="/" 
                        className={`block pb-2 ${isHomePage ? "border-b-2 border-[#0a192f]" : ""}`}
                    >
                        <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 44V24H30V44M6 18L24 4L42 18V40C42 41.0609 41.5786 42.0783 40.8284 42.8284C40.0783 43.5786 39.0609 44 38 44H10C8.93913 44 7.92172 43.5786 7.17157 42.8284C6.42143 42.0783 6 41.0609 6 40V18Z" stroke="#003366" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </li>
                
                {navItems.map(item => (
                    <li key={item.path}>
                        <Link 
                            href={item.path} 
                            className={`hover:underline hover:text-[#0a192f] hover:underline-offset-2 ${
                                pathname === item.path ? "underline underline-offset-2 text-[#0a192f] shadow-lg" : ""
                            }`}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="fixed top-[65px] w-full h-[1px] bg-[#0a192f]"></div>
        </nav>
    )
}