
import React from "react";


type Props = {
    heading: React.ReactNode;
    subheading: React.ReactNode;
    content: React.ReactNode;
    button: React.ReactNode;
    transbutton:React.ReactNode;
    className?: string;
    src: string;

};

export default function Card({ heading, subheading, content, button, src,transbutton }: Props) {
    return (
        <div
            className="flex flex-col bg-secondary rounded-[40px] max-w-[490px] w-full h-auto  p-[10px]" >
            <div className="max-w-[470px] w-full  h-[320px]  overflow-hidden    rounded-t-[40px] flex items-center">
                <img
                    src={src}
                    width={470}
                    className="h-full w-full object-cover  object-center border rounded-t-[40px]  "
                />

            </div>
            <div className="px-[10px] py-5 flex flex-col justify-between text-start gap-[72px]">
                <div className="">
                    <p className="font-normal text-3xl text-primary uppercase">
                        {heading}
                    </p>
                    <p className="text-base font-Inter font-bold text-primary pt-[2px] w-full max-w-[411px]">
                        {subheading}
                    </p>
                    <p className="font-Inter  text-sm font-normal pt-4 text-primary/70">
                        {content}
                    </p>
                </div>
                <div className="flex gap-[34px] items-center ">
                    <p className="text-lg font-normal text-secondary bg-primary px-[30px] w-[295px] py-[14px]  rounded-[40px] uppercase text-center">
                        {button}
                    </p>
                    <p className="text-lg text-primary font-normal uppercase ">
                        {transbutton}
                    </p>

                </div>
            </div>
        </div>
    );
}

