import { PortfolioItemContent } from "./portfolio";

interface PortfolioEntryProps extends PortfolioItemContent {
    reverse?: boolean;
}

export default function PortfolioEntry(props: PortfolioEntryProps) {
    return(
        <article className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${props.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Image/Visual Section */}
            <div className={`flex items-center justify-center min-h-[300px] lg:min-h-[400px] ${props.reverse ? 'lg:col-start-2' : ''}`}>
                <div className="logo-container flex justify-center items-center w-full h-full p-4">
                    {props.logo.map((icon, index) => (
                        typeof icon.src === 'string' ? (
                            <img key={index} src={icon.src} alt={icon.alt} className="w-full h-full object-contain" />
                        ) : (
                            <div key={index} className="w-full h-full flex items-center justify-center">
                                <div className="w-full h-full flex items-center justify-center">
                                    <icon.src />
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className={`space-y-6 ${props.reverse ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-2">
                    <h2 className="text-3xl lg:text-4xl font-light leading-tight">{props.title}</h2>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {props.title.includes('Figma') ? 'UX/UI Design' : 'Development'}
                    </p>
                </div>
                
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {props.description}
                </p>
                
                <div className="pt-4">
                    <a 
                        href={props.links[0].url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors border-b border-gray-300 hover:border-blue-600 pb-1"
                    >
                        {props.links[0].label}
                    </a>
                </div>
            </div>
        </article>
    )
}