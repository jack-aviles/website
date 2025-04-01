import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
    <main className="min-h-screen overflow-x-hidden">
        <header>
            <Navbar />
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
              <div className="flex justify-center mt-[20px]">
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#0a192f] text-white text-sm sm:text-base md:text-lg font-medium rounded-full 
                hover:bg-white hover:text-[#0a192f] transition-colors">
                    Explore My Portfolio
                </button>
              </div>
            </Link>
        </header>
        
        {/* Content section with flexbox */}
        <section className="w-full p-4 sm:p-6 md:p-8 mt-6 sm:mt-8 mb-16">
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row max-w-5xl"> 
                    {/* Left column */}
                    <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0 md:border-r-4">
                        <div>
                            <h2 className="text-xl font-bold mb-4">Who I am:</h2>
                            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                                <li><span className="font-bold">UX/UI Design</span>: Gaining proficiency in React, Tailwind CSS, and Javascript to build interactive and responsive user interfaces</li>
                                <li><span className="font-bold">Design & Prototyping</span>: Improve Figma skills for wireframing, prototyping, and UI design</li>
                                <li><span className="font-bold">Data Analysis</span>: Expanding knowledge of Tableau and Python with a focus on data visualization and analysis</li>
                                <li><span className="font-bold">Learning and Utilizing AI</span>: Gaining hands-on experience with AI tools like chatGPT, Cursor, and Claude, while learning about AI fundamentals and staying updated on trends to apply AI in design and development</li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Right column */}
                    <div className="w-full md:w-1/2 pl-0 md:pl-8">
                        <div>
                            <h2 className="text-xl font-bold mb-4">What I Do: Digital Service & CX Analyst</h2>
                            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                                <li><span className="font-bold">Project Management</span>: Oversee multiple project lifecycles using Jira to track progress and meet deadlines</li>
                                <li><span className="font-bold">Customer Experience Design</span>: Utilize Figma to create mockups, prototypes, and analyze wireframes for a seamless user experience</li>
                                <li><span className="font-bold">Customer Experience Journey Mapping</span>: Map out customer journeys using PowerPoint for visual presentations and Tableau to analyze data insights and assess digital experiences</li>
                                <li><span className="font-bold">Collaboration</span>: Work cross-functionally with delivery teams to implement and execute design solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}