import MenuBar from "./MenuBar";

export default function Header() {
    return (
        <>
            <header className="bg-black w-full  h-full ">
                <nav className="flex justify-between items-center max-w-screen-xl px-5 xl:px-0 xl:mx-auto w-full pt-5 ">
                    <a href="#">
                        <img src="/images/logo.png" width={120} height={116} className="w-[60px] h-auto lg:w-[120px] lg:h-[116px]" />
                    </a>
                    <div className="text-white text-base font-normal xl:flex justify-between gap-[50px]  hidden">
                        <a href="/"> Home </a>
                        <a href="#roadmap">Roadmap </a>
                        <a href="">Shop</a>
                        <a href="#faq">FAQ</a>
                        <a href="">GET ORDAINED</a>
                    </div>
                    <button className="text-lg font-normal text-primary bg-white px-[30px] py-[14px] uppercase rounded-[40px] xl:block hidden">
                        Join Whitelist
                    </button>
                    <MenuBar />

                </nav>

            </header>
        </>
    )
}