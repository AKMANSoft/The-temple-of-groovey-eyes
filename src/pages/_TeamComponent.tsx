
type TeamComponentProps = {
    src: string;
    heading: string;
    content: React.ReactNode;

}

export default function TeamComponent({ src, heading, content }: TeamComponentProps) {
    return (
        <>
            <div className="flex  flex-col w-[325px] h-auto md:w-[490px] md:h-[486px] px-[22px] pb-[33px] pt-10 md:p-10 md:pt-[30px] items-center  text-center rounded-[40px] bg-pink">
                <img src={src} alt="" className="w-[199px] h-[200px] rounded-full text-white" />
                <p className="mt-5 text-white text-xl md:text-[32px] font-normal">
                    {heading}
                </p>
                <p className="font-Inter font-normal text-white/80 text-sm mt-[11px] md:mt-[11px]">
                    {content}
                </p>

            </div>
        </>
    )
}