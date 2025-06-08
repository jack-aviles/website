import Navbar from "@/components/Navbar";
import PortfolioEntry from "./PortfolioEntry";
import { portfolioData } from "./portfolioData";
import { PortfolioItemContent } from "./portfolio";

export default function Portfolio() {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Navbar />
            
            <div className="page-content">
                <header className="pt-24 pb-16 px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-6">PORTFOLIO</h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-4">A curated selection of design and development work.</p>
                        <p className="text-base text-gray-500 ">Scroll to explore →</p>
                    </div>
                </header>

                {/* Portfolio Items */}
                <main className="pb-20 ">
                    <div className="max-w-7xl mx-auto px-4 border-b border-black">
                        {portfolioData.map((item: PortfolioItemContent, index) => (
                            <div
                                key={item.key}
                                className={`${index !== portfolioData.length - 1 ? "border-b border-black" : ""}`}
                            >
                                <PortfolioEntry
                                    key={item.key}
                                    title={item.title}
                                    description={item.description}
                                    links={item.links}
                                    logo={item.logo}
                                    reverse={index % 2 === 1}
                                />
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}