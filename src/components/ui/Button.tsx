import { cn } from "@/lib/utils";
type Props = {
    children?: React.ReactNode;
    className?: string
}

export function PrimaryButton({ children, className }: Props) {
    return (
        <>
            <a href="" className={cn("text-sm lg:text-lg font-normal text-secondary bg-primary px-[30px] py-[14px] uppercase rounded-[40px] ",
                className
            )}>
                {children}
            </a>
        </>
    )
}