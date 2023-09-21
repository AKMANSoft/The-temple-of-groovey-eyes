import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  heading: React.ReactNode;
  subheading: React.ReactNode;
  content: React.ReactNode;
  button: React.ReactNode;
  transbutton: React.ReactNode;
  className?: string;
  src: string;
};

export default function Card({
  heading,
  subheading,
  content,
  button,
  src,
  transbutton,
}: Props) {
  return (
    <div className="flex flex-col bg-secondary rounded-[40px] lg:max-w-[490px] w-full h-auto pt-[10px] px-[10px]">
      <div className="w-full h-[320px] overflow-hidden rounded-t-[40px]">
        <img
          src={src}
          width={470}
          className="object-cover object-center w-full h-full rounded-t-[50px]"
        />
      </div>
      <div className="md:px-[10px] py-5 flex flex-col justify-between text-start gap-5 md:gap-[72px]">
        <div className="">
          <h3 className="text-xl font-normal uppercase md:text-3xl leading-[22px] md:leading-[40px] text-primary">
            {heading}
          </h3>
          <h4 className="text-xs md:text-base mt-[2px] leading-[18px] md:leading-[22px] font-Inter font-bold text-primary pt-[2px] w-full max-w-[411px]">
            {subheading}
          </h4>
          <p className="mt-4 leading-[22px] text-sm font-normal font-Inter text-primary/70">
            {content}
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-5 md:gap-[34px] items-center ">
          <button
            type="button"
            className={cn(
              "text-sm md:text-lg font-normal text-secondary bg-primary h-[53px]",
              "px-[30px] md:w-[295px] w-full py-[14px] rounded-[40px] uppercase text-center"
            )}
          >
            {button}
          </button>
          <p className="text-sm font-normal uppercase md:text-lg text-primary">
            {transbutton}
          </p>
        </div>
      </div>
    </div>
  );
}
