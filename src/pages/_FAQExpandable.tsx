import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/component/ui/Accordion"
import React, {  useState } from "react";


export type ExpandableProps = {
    heading: string,
    content: React.ReactNode
}
export default function FAQExpandable({ heading, content }: ExpandableProps) {
    const [isFontBold, setIsFontBold] = useState(false);
    const fontbold = () => {
        setIsFontBold(!isFontBold);
    };
    const headingStyle = {
        fontWeight: isFontBold ? 'bold' : 'normal',
    };

    return (
        <>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="p-[30px]  py-[14px]  md:py-[22px] md:px-6 bg-white/20">
                    <AccordionTrigger className="" onClick={fontbold}>
                        <span style={headingStyle}>{heading}</span>
                    </AccordionTrigger>
                    <AccordionContent className="">
                        {content}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}

