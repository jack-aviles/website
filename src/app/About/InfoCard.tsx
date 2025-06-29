interface InfoCardProps {
    title: string;
    description:string;
    color: string;
}

export default function InfoCard({
    title = "Card Title",
    description = "Card Description",
    color = "border-blue-600"
}: InfoCardProps) {
    return (
        <div
            className={`rounded-xl shadow-lg bg-white px-6 py-8 flex flex-col items-center border-t-4 mb-2 hover:shadow-2xl transition-shadow duration-200`}
            style={{ borderTopColor: color }}
        >
            <div className="w-full h-full flex flex-col justify-end">
                <h3 className='text-lg front-semibold text-blue-800 mb-2'> {title} </h3>
                <hr className="border-t border-gray-300 w-full mb-3"/>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    )
}
    
