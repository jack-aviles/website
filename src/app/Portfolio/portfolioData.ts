import { PortfolioItemContent } from "./portfolio";
import Figma from "@/components/Figma";
import React from "@/components/React";

export const portfolioData: PortfolioItemContent[] = [
    {
        key: 1,
        logo: [
            {
                src: Figma,
                alt: "Figma Icon"
            }
        ],
        
        title: "Website High Fidelity Prototype",
        description: "A high fidelity wireframe and working prototype of this website utlizing Figma",
        links: [
            {
                label: "View Mockup",
                url: "https://www.figma.com/design/95yI9NRdyEAJdwauwVrXiH/Professional-Website-Mockup?node-id=0-1&p=f&t=2JRkyaElUePOePCx-0"

            }
        ]

    },
    {
        key: 2,
        logo: [
            {
                src: React,
                alt: "React Icon"
            }
        ],
        title: "Website Codebase",
        description: "The codebase for this website built with React, Next.js, and Tailwind CSS",
        links: [
            {
                label: "View Code",
                url: "https://github.com/jack-aviles/website"
            }
        ],
        reverse: true,
       

    },

]