import Image from "next/image"

export const MarketStoryBox = () => {
    return (
        <div className="w-[calc(100%-50px)] m-auto shadow-md min-h-[calc(100%/3)] border-2 my-5 rounded-md">
            <div className="relative h-[200px]">
                <Image
                    src={"/img1.jpg"}
                    alt="img1"
                    style={{objectFit: "cover"}}
                    fill
                />
            </div>
            <div className="p-2">
                <div>
                    Title
                </div>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus aspernatur, impedit pariatur saepe animi eius nostrum sapiente omnis inventore aut.
                </div>
            </div>
        </div>
    )
}