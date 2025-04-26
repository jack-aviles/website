import Navbar from "@/components/Navbar";
import Tile from "@/components/Tile";
import Figma from "@/components/Figma";
import ReactLogo from "@/components/React";

const tiles = [
    {
        name: "Figma Mockup for Website",
        description: "For this project, I used Figma to design a website and put together a working prototype so you can get a feel for how it all comes together.",
        icon: <Figma />,
        iconLink: "https://www.figma.com/proto/95yI9NRdyEAJdwauwVrXiH/Professional-Website-Mockup?node-id=0-1&t=uAAfmbnLv4uK9V5A-1",
    },
    {
        name: "Website Code Base",
        description: "Here is the codebase for the site — I used React, Next.js, TypeScript, and styled everything with Tailwind CSS.",
        icon: <ReactLogo />,
        iconLink: "https://github.com/jack-aviles/website",
    },
]

export default function Portfolio() {
    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <header>
                <Navbar />
            </header>
            <div className="page-content">
            
            <div className="pt-24 px-4 md:px-8 lg:px-16 xl:px-[300px] mb-8 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Welcome to my Portfolio</h1>
                <p className="text-sm sm:text-base text-gray-500 mt-2">Here are some of the projects I have worked on by utlizing various tools like Figma, React, Next.js, and Tailwind CSS.</p>
            </div>
            
            <div className="px-4 md:px-8 lg:px-16 xl:px-[300px] pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {tiles.map((tile, index) => (
                        <Tile key={index} 
                        name={tile.name} 
                        description={tile.description}
                        icon={tile.icon}
                        iconLink={tile.iconLink} />
                    ))}
                </div>
            </div>
            </div>
        </div>  
    )
}