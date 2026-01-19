"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { whatIDoData } from "./AboutData";
import InfoCard from "./InfoCard";

export default function About() {

    return (
    <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        
        {/* Wrap everything except Navbar with page-content */}
        <div className="page-content">
            <header>
                <div className="flex justify-center mt-[80px] sm:mt-[100px]">
                    <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]">
                        <Image 
                            src="/Pro-Headshot.png" 
                            alt="Pro-Headshot"
                            fill
                            sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 200px"
                            className="rounded-full object-cover z-10" 
                        />
                    </div>
                </div>
                <Link href="/Portfolio" className="block text-center">
                  <div className="flex justify-center mt-[20px] mb-8">
                    <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#0a192f] text-white text-sm sm:text-base md:text-lg font-medium rounded-full 
                    hover:bg-white hover:text-[#0a192f] transition-colors">
                        Explore My Portfolio
                    </button>
                  </div>
                </Link>
            </header>
            {/* What I Do - Centered under headshot */}
            <div className="flex justify-center max-w-6xl mx-auto mb-20">
                <div>
                    <h2 className="text-4xl font-extrabold text-center mb-12">What I Do</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center max-w-3xl mx-auto">
                        {whatIDoData.map((item, index) => (
                            <InfoCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                color={item.color}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div> 
    </main>
    )
}