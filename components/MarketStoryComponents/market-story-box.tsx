import Image from "next/image"

interface MarketStoriesProps{
    imagePath: string,
    title: string,
    description: string
}

export const MarketStoryBox = ({
    imagePath, 
    title,
    description
} : MarketStoriesProps) => {
    return (
        <div className="w-[calc(100%-50px)] m-auto shadow-md min-h-[calc(100%/3)] border-2 my-5 rounded-md">
            <div className="relative h-[200px]">
                <Image
                    src={imagePath}
                    alt="img1"
                    style={{objectFit: "cover"}}
                    fill
                />
            </div>
            <div className="p-2">
                <div className="text-lg">
                    {title}
                </div>
                <div className="text-gray-500  text-sm overflow-hidden line-clamp-5">
                    {description}
                </div>
            </div>
        </div>
    )
}