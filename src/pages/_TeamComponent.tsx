import { cn } from "@/lib/utils";

type TeamComponentProps = {
  src: string;
  heading: string;
  content: React.ReactNode;
};

export default function TeamComponent({
  src,
  heading,
  content,
}: TeamComponentProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center rounded-[40px] bg-pink",
        "w-full max-w-[325px] min-w-[80%] md:min-w-0 md:max-w-full md:w-[490px] px-[22px] pb-[33px] pt-10 md:p-10 md:pt-[30px]",
        "first:ml-[22px] last:mr-[22px]"
      )}
    >
      <img
        src={src}
        alt=""
        className="w-[200px] aspect-square h-[200px] rounded-full text-white"
      />
      <h4 className="mt-5 text-white text-xl md:text-[32px] font-normal leading-[28px] md:leading-[41px]">
        {heading}
      </h4>
      <p className="font-Inter font-normal text-white/80 text-sm leading-[24px] mt-[11px]">
        {content}
      </p>
    </div>
  );
}
