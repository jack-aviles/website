import Navbar from "@/components/Navbar";

export default function About() {
    return (
    <main>
        <header>
            <Navbar />
            <div className="flex justify-center mt-[100px]">
                <img src="/Pro-Headshot.png" 
                alt="Pro-Headshot"
                className="w-[200px] h-[200px] rounded-full 
                object-cover z-10" />
                
            </div>
            <a href="/Portfolio">
            <div className="flex justify-center mt-[20px]">
            <button className="px-6 py-3 bg-[#0a192f] text-white font-medium rounded-full 
            hover:bg-white hover:text-[#0a192f] transition-colors">
                Explore My Portfolio
            </button>
            </div>
            </a>
        </header>
        
        {/* Content section with flexbox */}
        <section className="w-full p-8 mt-8 mb-16">
            <div className="flex justify-center">
                <div className="flex max-w-5xl ml-[1px]"> 
                    {/* Left column */}
                    <div className="w-1/2 pr-8 border-r-4">
                        <div>
                            <h2 className="text-1xl font-bold mb-4">Who I am:</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><span className="font-bold">UX/UI Design</span>: Gaining proficiency in React, Tailwind CSS, and Javascropt to build interactive and responsive user interfaces</li>
                                <li><span className="font-bold">Design & Prototyping</span>: Improve Figma skills for wireframing, prototyping, and UI design</li>
                                <li><span className="font-bold">Data Analysis</span>: Expanding knowledge of Tableau and Python with a focus on data visualization and analysis</li>
                                <li><span className="font-bold">Learning and Utilizing AI</span>: Gaining hands-on experience with AI tools like chatGPT, Cursor, and Clause, while learning about AI fundamentals and staying updated on trends to apply AI in design and development</li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Right column */}
                    <div className="w-1/2 pl-8">
                        <div>
                            <h2 className="text-1xl font-bold mb-4">What I Do: Digital Service & CX Analyst</h2>
                            <ul className="list-disc pl-5 space-y-2">
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