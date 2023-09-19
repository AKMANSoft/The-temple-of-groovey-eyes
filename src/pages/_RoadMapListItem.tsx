



type RoadMap = {
    heading: string,
    content: React.ReactNode,
}
type RoadMapListItemProps = {
    RoadMap: RoadMap
}

export default function RoadMapListItem({ RoadMap }: RoadMapListItemProps) {
    return (
        <div className="w-full flex flex-col items-center  text-center gap-5 lg:gap-10 max-w-[810px] px-5">
            <p className="text-sm font-normal text-white lg:text-base">
                {RoadMap.content}
            </p>
            <p className="bg-secondary  text-sm lg:text-xl rounded-[40px] lg:rounded-[60px] max-w-[800px] w-full text-primary h-auto lg:h-[65px] flex items-center justify-center px-8 py-3">
                {RoadMap.heading}
            </p>
        </div>
    )
}