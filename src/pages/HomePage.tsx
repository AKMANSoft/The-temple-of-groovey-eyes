import Card from "@/component/Card";
import React from "react";


export default function HomePage() {
    return (
        <div className="">
            <header className="bg-black w-full ">
                <nav className="flex justify-between items-center max-w-screen-xl mx-auto w-full pt-5">
                    <a href="#">
                        <img src="/images/logo.png" width={120} height={116} className="w-[120px] h-[116px]" />
                    </a>
                    <div className="text-white text-base font-normal flex justify-between gap-[50px]">
                        <a href="">
                            Home
                        </a>
                        <a href="">
                            Roadmap
                        </a>
                        <a href="">
                            Shop
                        </a>
                        <a href="">
                            FAQ
                        </a>
                        <a href="">
                            GET ORDAINED
                        </a>
                    </div>
                    <button className="text-lg font-normal text-primary bg-white px-[30px] py-[14px] uppercase rounded-[40px]">
                        Join Whitelist
                    </button>
                </nav>
            </header>
            <section className="flex flex-col bg-primary-image h-[1276px] bg-black items-center justify-center gap-[111px] -mt-9">

                <p className="text-secondary text-[53.8px] font-normal uppercase w-[336px] text-center">
                    There's A New Religion In Town
                </p>
                <button className="text-lg font-normal text-secondary bg-primary px-10 py-5 uppercase rounded-[40px]">
                    Get Ordained Today
                </button>

            </section>
            <section className="flex items-center justify-center bg-star-image  h-[1200px] -mt-[56px] ">
                <div className="flex flex-col items-center justify-center rounded-full bg-secondary max-w-[1000px] w-full max-h-[522px] h-full">
                    <p className="flex flex-col items-center justify-center text-primary font-normal uppercase">
                        <span className="text-[30px]">
                            Groovy Eyes hold this truth to be self-evident:
                        </span>
                        <span className="text-[50px]">
                            “All people are created equal.”
                        </span>
                    </p>
                    <p className="text-sm font-normal text-primary/70 max-w-[760px] w-full text-center font-Inter  mt-5 ">
                        The Temple of the Groovy Eye is a non-profit art and science-based religious institution registered in the Commonwealth of Pennsylvania, that relies on science to lead to fundamental truth and art to express it. Founded by artists, activists, and philosophers, the Temple is a place where spiritual people and atheists alike can come together and proclaim that: <span className="font-black">here is a holy place to be.</span> It is a place to meet; share ideas, art, and writing; learn about one another and form a more perfect union as we stand together to raise our voices in power, for equality of all people. And as an ordained member of the Temple of the Groovy Eye, you have both the moral authority to join people together in love and the legal authority to officiate marriage ceremonies that declare it so.
                    </p>
                    <button className="text-lg font-normal text-secondary bg-primary px-[30px] py-[14px] uppercase rounded-[40px] mt-10">
                        Get Ordained Today
                    </button>

                </div>

            </section>
            <section className="flex  items-center justify-center bg-pillar-image h-[1113px]">
                <div className="max-w-[1000px] w-full text-center">
                    <p className="text-white text-[60px] font-normal uppercase">
                        THE PILLARS of the temple
                    </p>
                    <p className="text-base font-normal font-Inter text-white mt-[10px] max-w-[904px] w-full">
                        The Pillars are built on the bedrock of the science of creation and represent the stages of our unfolding philosophy. Our NFTs are designed to tell this story, each Pillar with its own unique style and message. We begin here with the first two Founding Pillars. Get ordained into one of these two and be the very first of the Groovy Eyes!
                    </p>
                    <div className="mt-10 flex gap-5">
                        <Card
                            src={"/images/piller-of-beginning.png"}
                            heading="THE PILLAR OF THE BEGINNING"
                            subheading="“Matter is energy solidified.” – Albert Einstein"
                            content={
                                <p>
                                    The foundation of our Temple is laid with the evidence of the single creative instant from which everything in the known universe was born. All the energy that would one day become a particle, a star, an atom, a rose, an ocean, or a human, everything the universe could ever and would ever be, originated in that single instant. Every particle of every person of every race, gender and culture can trace its history to that same original Beginning  <span className="font-bold">–– EQUALLY.</span>
                                </p>
                            }
                            button="Join Whitelist"
                            transbutton="View NFTS"
                        />
                        <Card
                            src={"/images/piller-of-wave.png"}
                            heading="THE PILLAR OF THE BEGINNING"
                            subheading="“Life is a wave, which in no two consecutive moments of its existence is composed of the same particles.” –John Tyndall"
                            content={
                                <p>
                                    As an artist I have a deep fascination with waves, their sacred geometry is the shape of our universe’s construction.
                                    <br />
                                    <br />
                                    The current discovery of gravity waves thrills me. I can’t help but imagine we are in an ocean we can’t see, where the space between
                                </p>
                            }
                            button="Join Whitelist"
                            transbutton="View NFTS"
                        />
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center bg-ourteam-image h-[772px] ">
                    <p className="text-pink text-[60px] font-normal uppercase">
                        OUR TEAM
                    </p>
                    <div className="flex items-center justify-between gap-5 max-w-[1000px] w-full">
                        <TeamComponent
                            src={"/images/circle.png"}
                            heading="Mary Salen"
                            content={
                                <p>
                                    Mary is a photographer, artist, writer, lifelong science enthusiast, and social justice activist. These have been both cornerstones and guiding stars in Mary’s personal quest to create an equality-based philosophy, something practical and beautiful we can all share in—and the Temple of the Groovy Eye was born.
                                </p>
                            }
                        />
                    </div>

            </section>
        </div>
    )
}

type TeamComponentProps = {
    src: string;
    heading: string;
    content: React.ReactNode;

}

function TeamComponent({ src, heading, content }: TeamComponentProps) {
    return (
        <>
            <div className="flex flex-col w-[490px] items-center justify-center text-center p-10 pt-[30px] rounded-[40px] bg-pink">
                <img src={src} alt="" className="w-[199px] h-[200px] rounded-full text-white" />
                <p className="mt-5 text-white text-[32px] font-normal">
                    {heading}
                </p>
                <p className="font-Inter font-normal text-white/80 text-sm">
                    {content}
                </p>

            </div>
        </>
    )
}