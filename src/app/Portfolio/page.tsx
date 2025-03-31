import Navbar from "@/components/Navbar";
import Tile from "@/components/Tile";
import Figma from "@/components/Figma";
import ReactLogo from "@/components/React";

const tiles = [
    {
        name: "Figma Mockup for Website",
        description: "In this project, I created a figma mockup for a website. I used figma to design the website. You will also find a functional prototype I created by using Figma.",
        icon: <Figma />,
        iconLink: "https://www.figma.com/proto/95yI9NRdyEAJdwauwVrXiH/Professional-Website-Mockup?node-id=0-1&t=uAAfmbnLv4uK9V5A-1",
    },
    {
        name: "Website Code Base",
        description: "This is the code base for the website. I utilzied react, next.js, typescript, and tailwind css.",
        icon: <ReactLogo />,
        iconLink: "https://github.com/joshua-davis-dev/portfolio",
    },
]

export default function Portfolio() {
    return (
        <div className="relative min-h-screen">
            <header>
                <Navbar />
            </header>
            
            <div className="pt-24 px-[300px] mb-8 text-center">
                <h1 className="text-4xl font-bold">Welcome to my Portfolio</h1>
                <p className="text-gray-500">Here are some of the projects I have worked on by utlizing various tools like Figma, React, Next.js, and Tailwind CSS. and Cursor IDE.</p>
            </div>
            
            <div className="px-[300px]">
                <div className="grid grid-cols-2 gap-8">
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
    )
}