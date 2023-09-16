import { PrimaryButton } from "@/component/Button";
import Card from "@/component/Card";
import React, { useEffect, useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/component/accordion"




export default function HomePage() {
    return (
        <div className="bg-primary">
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
                <div className="">
                    <Anim  />
                </div>

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
                    <TeamComponent
                        src={"/images/circle.png"}
                        heading="Stu Salen"
                        content={
                            <p>
                                Is an attorney, patent-holding inventor, Peace Corps volunteer alum, organic farmer, teacher,foster and adoptive parent, and social justice activist––devoted to the ideal of Equality in our Lifetime.
                            </p>
                        }
                    />

                </div>

            </section>
            <section className="h-[3774px] bg-whitepaper-image bg-primary flex flex-col items-center  ">

                <div className="flex flex-col items-center text-center max-w-[1000px] w-full px-[120px] py-[60px] bg-black/60 backdrop-blur-[10px]  rounded-[80px] mt-[100px]">
                    <p className="text-pink text-[60px] font-normal uppercase ">
                        WHITEPAPER
                    </p>
                    <p className="font-Inter font-normal text-base text-white/60 mt-5 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    </p>
                    <div className="mt-[43px]">
                        <PrimaryButton className="bg-pink text-white">
                            DOWNLOAD WHITEPAPER
                        </PrimaryButton>
                    </div>

                </div>
                <div className="flex mt-[60px] gap-10 overflow-hidden items-center justify-center ">
                    <img src="/icons/surrender3.png" className="w-[512px] h-[512px] rounded-full aspect-square" />
                    <img src="/icons/surrender.png" className="w-[512px] h-[512px] rounded-full aspect-square" />
                    <img src="/icons/surrender2.png" className="w-[512px] h-[512px] rounded-full aspect-square" />
                    <img src="/icons/surrender.png" className="w-[512px] h-[512px] rounded-full aspect-square" />

                </div>

                <div className="flex flex-col items-center pb-[80px] pt-[60px] mt-[60px] bg-black/60 max-w-[1000px] w-full backdrop-blur-[10px] rounded-[80px] ">
                    <p className="text-pink text-[60px] uppercase font-normal">
                        ROADMAP
                    </p>
                    <div className="flex flex-col gap-[30px]">
                        {
                            RoadMap.map((RoadMap) => (
                                <RoadMapListItem RoadMap={RoadMap} />

                            ))
                        }
                    </div>
                    <p className="text-white text-xl font-normal mt-[60px]">
                        This is the dream. This is the new way.
                    </p>
                    <a href="#" className="mt-[54px]">
                        <PrimaryButton className="bg-pink text-white">
                            JOIN WHITELIST
                        </PrimaryButton>
                    </a>
                </div>
                <div className="flex flex-col items-center pb-[100px] pt-[60px] mt-[60px] bg-black/60 max-w-[1000px] w-full backdrop-blur-[10px] rounded-[80px] ">
                    <p className="text-pink text-[60px] uppercase font-normal">
                        FAQs
                    </p>
                    <div className="space-y-[10px]">
                        <Expandable
                            heading=" What does Groovy Eye mean?"
                            content={<>
                                We perceive one another from an interior place, from the core belief system there tells our eyes how to regard the things they see. Too many people look upon expressions of love and see ugliness, sin, and disgust. Too many people look upon women’s bodies and see shamefulness. Too many people look upon people of different races or physical abilities and see lesser people. These are unnatural ways of seeing. We know love is always beautiful, women’s bodies are not shameful, and biological differences don’t make anyone less. The problem, therefore, must be in their eyes.<br />
                                To be a Groovy Eye, all you have to do is look a bit deeper, below the surface, where inherent commonality of humanity resides, and the job is done. You’ve found your people! Welcome to the Temple of the Groovy Eye! Welcome home.</>}
                        />
                        <Expandable
                            heading="How did you come up with the idea for your art?"
                            content={<>
                                The first two series of art I’ve created for the Temple NFTs – “Creation” and “The Wave” – tell a new kind of science-based creation story depicting a singular explosive event from which all biological life, all races and genders, originate equally––the simple truth from which every person’s natural rights are derived and guaranteed. As a lifelong feminist, I put the female form in the center to reclaim her rightful place in the act and process of creation. Each image is a single-capture photograph, not digitally or AI created art. Photography is art using a scientific instrument that allows you to “paint” with electromagnetic radiation. What a turn on! Each and every photo was set up and taken using proprietary lighting systems and really trippy studio designs. I created this art for you, and I hope you love it.</>}
                        />
                        <Expandable
                            heading="What does that mean to be ordained?"
                            content={<>
                                As a religious institution, The Temple of the Groovy Eye ordains like-minded individuals, or “Groovy Eyes,” who are our clergy. Once ordained, you will have the full legal status required to officiate marriages in the name of the Temple of the Groovy Eye. You get real credentials and can officiate real, legally binding marriages––as well as all other life celebrations, in exactly the same way as any other priest or minister.
                            </>}
                        />
                        <Expandable
                            heading="Is the Temple of the Groovy Eye legally able to ordain individuals?"
                            content={<>
                                Yes! We are registered in the Commonwealth of Pennsylvania as a <span className="font-bold">non-profit</span> religious institution, and as such, individuals ordained by the Temple are recognized in all 50 states!Please check with your local jurisdiction to be sure that no additional paperwork or confirmation is required. Letters of good standing from the Temple are not generally required but are available upon request to ordained members for a nominal fee.<br />
                                International members should inquire with their local governments. We will work with you!
                            </>}
                        />
                        <Expandable
                            heading="Can I get paid to officiate weddings and other ceremonies?"
                            content={<>
                                You bet! Being an ordained “Groovy Eye” a <span className="font-bold">great</span> side hustle––or main hustle! Get paid to join people together in <span className="font-bold">love and equality</span> in the name of the Temple of the Groovy Eye. The going rate for marriage officiants in the USA ranges from <span className="font-bold"> $300-$800 per ceremony, plus expenses and extra for a rehearsal!</span> Get paid to do something beautiful! How cool is that?
                            </>}
                        />
                        <Expandable
                            heading="Sounds GREAT! How do I get ordained?"
                            content={<>
                                It’s quick and easy! Once you’ve purchased an NFT you are a member of the Temple, and you’ll have the opportunity to be instantly ordained! You’ll be asked to provide your full name, contact info, and attest to the sincerely held belief that: <span className="font-bold">
                                    All People are Created Equal</span> – that’s it! Everything that goes with that, goes with that.
                                It’s that easy! The entire ordination process takes about 30 seconds, and your acceptance is immediate. You can perform marriage ceremonies legally right away <span className="font-bold">– get your side-hustle business started the same day!</span>
                            </>}
                        />
                        <Expandable
                            heading="How about virtual weddings in the GroovyVerse, are they legal?"
                            content={<>
                                Yes! The Covid pandemic threw open the door to virtual weddings, which are now legal in many jurisdictions. Friends and family from across the world can share special moments and interact directly with friends and family members without the difficulties or expense of travel. The legal requirements of GroovyVerse weddings will vary depending on where the happy couple is located, so be sure to check with local officials.
                            </>}
                        />
                        <Expandable
                            heading="When will the GroovyVerse be up and running?"
                            content={<>
                                The Temple of the Groovy Eye has already secured the “land,” the virtual space to build the GroovyVerse. All “building funds” received from NFT sales will go directly into the development of the site, with the goal of going live <span className="font-bold">this year!</span>  Updates on progress will be regularly provided on the website.
                            </>}
                        />
                        <Expandable
                            heading="Do I have to believe in God to join?"
                            content={<>
                                <span className="font-bold"> NO!</span> We welcome all atheists, agnostics, and equality-loving spiritual people. Our focus is on the sanctity of here and now, and the holy nature of our own actions in the world.<span className="font-bold"> Here is a Holy Place to Be.
                                </span>
                            </>}
                        />
                        <Expandable
                            heading="Do you charge annual dues?"
                            content={<>
                                We do not charge annual fees for founding NFT owners! We will charge a small annual fee for subsequent membership to enable us to maintain the functioning of the Temple. We want a community that is easy to join, inclusive, and welcoming. A first-time founding, first drop NFT purchase <span className="font-bold">will cover you forever.</span> You will remain a member for as long as you continue to share the Temple’s love for equality. Of course, we’d appreciate it very much if you’d consider buying our merch online too. Your purchases help us grow and improve our outreach—and make cool gifts—but are in no way required. We do provide members with a sweet discount though!
                            </>}
                        />
                        <Expandable
                            heading="Mint details:"
                            content={<>
                                Our initial drop is small, meant to create a strong, founding group, and consists of 500 NFTs divided into the first two foundational Pillars – “Creation,” and “The Wave.”<br />
                                Price: $150 each, 30% of which is tax-deductible (in the US) and will account for your lifetime Temple of the Groovy Eye membership fee and donation to the “GroovyVerse Building Fund.”<br />
                                Founding members will have their names displayed in the Temple for the Grand Opening and archived as part of the Temple’s permanent history.
                            </>}
                        />
                        <Expandable
                            heading="Why join?"
                            content={<>
                                Join because we need you! Join because we can do a beautiful thing together! Join to be a legally ordained clergy member and a founding Groovy Eye! Join because you love equality and want a meaningful side-hustle. Let’s start something wonderful together.
                            </>}
                        />
                        <Expandable
                            heading="What you get:"
                            content={<>
                                A lot! The purchase of an NFT gets you a <span className="font-bold">lifetime membership!</span>
                                Plus:<br />
                                <span className="font-bold">-You get a beautiful piece of original NFT photographic art,</span> created for the Temple of the Groovy Eye by an American woman artist, which you may display proudly, gift, collect, trade, and print for personal use.
                                <br /><br />
                                <span className="font-bold">-A Temple of the Groovy Eye certificate of ordination.</span> Members attest to their sincerely held belief in equality, provide contact information – and that’s it! You’re ordained! Your Temple certificate serves as proof of your credentials!
                                <br /><br />
                                <span className="font-bold">-A very groovy instant side-hustle – or main hustle!</span> This is not only fun, and an opportunity to speak out on behalf of love and equality, but an instant money-maker! The Temple will maintain a directory of ordained persons (with your consent) where people who want a Groovy Eye wedding, or other life-event ceremony, can find you.
                                <br /><br />
                                <span className="font-bold">-You’ll get a Temple of the Groovy Eye “clergy” parking pass,</span> to allow parking in spots reserved for “clergy” (that’s you!) near churches and other places of worship where you may be officiating a ceremony.
                                <br /><br />
                                -You’ll get a Temple press pass. Knowledge is power. We want to hear and learn from you and create a newsletter about Groovy Eyes everywhere. We want to know what’s going on around the world so we can work together. Use your press pass to cover events of interest to the Temple and submit your work for consideration to the GroovyVerse blog or newsletter. We want to hear from you!
                                <br /><br />
                                <span className="font-bold">-You will be able to get published!</span> Members can submit their own writing and artwork for consideration in our blog, newsletter, and gallery. Share your work with the Temple of the Groovy Eye community and describe your own personal journey of self-discovery. We want to know!
                                <br /><br />
                                <span className="font-bold"> -You get a day off!</span> The Temple of the Groovy Eye has named state and federal general election days as our religious holidays! If your employer gives you time off for religious holidays, you can take state and federal general Election Days off to engage in the sacred activity of voting to promote equality.
                                <br /><br />
                                <span className="font-bold">-You get a discount!</span> The Temple funds itself through the sale of Temple art. Once you’ve purchased your NFT, you never need to buy another thing from us to retain your membership. We encourage you, however, to shop at our Temple for cool merch. It helps us grow and improve our outreach. We appreciate your support so much we’ll give a sweet discount to all NFT holders.
                                <br /><br />
                                <span className="font-bold">-You get equality! </span> If we all do our part we can make it happen!
                            </>}
                        />
                    </div>




                </div>



            </section>
            <div className="h-[120px] bg-primary">

            </div>

            <footer className="bg-footer-image h-[838px] flex flex-col items-center justify-center ">
                <a href="" className="bg-white rounded-full mt-[170px]">
                    <img src="/images/logo.png" alt="" className="w-[160px] h-[157px]" />
                </a>
                <a href="" className="mt-[30px]">
                    <PrimaryButton className="text-white bg-pink">
                        JOIN WHITELIST
                    </PrimaryButton>
                </a>
                <nav className="flex  items-center gap-5 mt-[34px]">
                    <a href="">
                        <img src="/svg/soundcloud.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="/svg/twitter.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="/svg/insta.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="/svg/facebook.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="/svg/telegram.svg" alt="" />
                    </a>
                </nav>
            </footer>
        </div>
    )
}


function Anim() {
    const texts = [
        "There's A New Religion In Town",
        "WHERE ALL PEOPLE ARE CREATED EQUAL",
        "AND YOUR NATURAL RIGHTS ARE SACRED",
        "JOIN US!"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000); // Change text every 2 seconds (adjust as needed)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center relative ">
            {texts.map((text, index) => (
                <p
                    key={index}
                    className={`text-secondary text-4xl font-normal uppercase absolute top-0 left-0 opacity-${currentIndex === index ? '100' : '0'} animate-fade-in delay-2000 transition-opacity`}
                >
                    {text}
                </p>
            ))}
        </div>
    );
}

type ExpandableProps = {
    heading: string,
    content: React.ReactNode
}
function Expandable({ heading, content }: ExpandableProps) {
    const [isFontBold, setIsFontBold] = useState(false);
    const fontbold = () => {
        setIsFontBold(!isFontBold);
    };
    const headingStyle = {
        fontWeight: isFontBold ? 'bold' : 'normal',
    };

    return (
        <>
            <Accordion type="single" className="" collapsible>
                <AccordionItem value="item-1" className=" py-[22px] px-6 bg-white/20">
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













const RoadMap = [
    {
        heading: "This is not your grandfather’s religion.", content: <p><span className="font-Inter">
            It’s time for a new religion! The Temple of the Groovy Eye is where atheists, agnostics, and equality-loving spiritual people from all around the world can join together in the noble pursuit of: Equality in Our Lifetime! Be part of the new science-based movement rooted in truth and love! Come share ideas with one another, tell your stories and be part of a bright new community of voices in tune with love and amplified by the knowledge that:
        </span><span className="">All People Are Created Equal.</span><br /><br />
            <span className="font-Inter">
                Equality is a single thing. Groovy Eyes see the diversity inherent in our species as an evolutionary achievement––a glorious crown. Groovy Eyes embrace all genders and the LGBTQ+ community, we defend women’s rights and self-sovereignty, and we stand firmly against racism and prejudice. We are committed to preserving our environment for the next generation, and we are not afraid to speak on behalf of these issues and use our non-violent power to strive for equality.
            </span>

        </p>
    },
    {
        heading: "The GroovyVerse is our sacred space", content: <p className="font-Inter">It’s time for truth and love to take their rightful place in the world and deliver the dream of equality for us all. We can achieve it now like never before, together––in the Metaverse!
            <br /><br />
            The Temple of the Groovy Eye is a registered, non-profit religious institution in the Commonwealth of Pennsylvania, USA. A portion of the original purchase price for every NFT is tax-deductible (at least in the US) and will account for both your membership fee and a donation to the building fund for our Metaverse – the “GroovyVerse”. Original owners of the first drop of NFTs will have lifetime membership status.</p>
    },
    {
        heading: "ALL memberships come with the opportunity to be ordained!", content: <p> <span className="font-Inter"> A place to gather, share art and writing, tell our stories and be pro-active. A worldwide union of free-thinking, freedom-loving people who are hungry for a community to belong to that shares the sincerely held belief that: </span>  <span> Here is a Holy Place to Be.</span>
            <br /><br />
            <span className="font-Inter">
                The GroovyVerse is a safe space to be together as equals, regardless of physical ability or geographic location. It is place for wedding ceremonies, memorial services and solemnities, baby-welcoming ceremonies, hand-fastings and other celebrations of life and love. We want you with us!
            </span>
        </p>
    },
    {
        heading: "You can even officiate weddings and other ceremonies in the GroovyVerse!", content: <p> <span className="font-Inter"> Members are also eligible to submit art and writing for consideration in the GroovyVerse gallery, newsletter, and blog. Moreover, Temple ordination authorizes you to </span><span className="">legally officiate marriage ceremonies</span> <span className="font-Inter"> in all 50 states and wherever your country’s local laws allow. But that’s not all, you could officiate hand-fastings, child-welcoming ceremonies, funerals and memorial services. You’ll receive your ordination credentials, a clergy parking pass, and an official Temple press pass to get you up close to newsworthy equality and social justice events to cover for the GroovyVerse. </span>
            <br /><br />
            <span className="font-Inter">
                Be a love and equality activist—and earn extra income as a marriage officiant! Here in Pennsylvania, where the Temple is based, the fees for officiating a marriage range from $300-$800, plus expenses and a customary extra fee for a rehearsal. Of course, you can officiate for your friends and family for free, but it can also be a sweet side-hustle if you love the work and feel called to join people together in love and equality in the name of the Temple of the Groovy Eye.
            </span>
        </p>
    },
    {
        heading: "", content: <p className="font-Inter">Imagine sharing a beautiful celebration in real time, in a beautiful virtual space where guests from all over the world can gather and interact with one another, without travel expenses! We can make it happen!
            <br /><br />
            Groovy Eyes see groovy things. They look on love and see beauty, they look for truth and see equality. It’s time to embrace love and equality, here and now, as a way of thinking and a way of life! Inequality and hate have no place in the GroovyVerse. Here, all people, regardless of age, physical ability, or location can participate and be celebrated, honored as a beloved friends and equals. The Temple welcomes spiritual people, agnostics, and atheists alike. Our sincerely held belief is in the sacredness of our present power to do good, and the holy nature of our time spent on Earth dedicated to action in pursuit of equality.</p>
    }
]

type RoadMap = {
    heading: string,
    content: React.ReactNode,
}
type RoadMapListItemProps = {
    RoadMap: RoadMap
}




function RoadMapListItem({ RoadMap }: RoadMapListItemProps) {
    return (
        <div className="w-full flex flex-col items-center  text-center gap-10 max-w-[810px]">
            <p className="text-base text-white  font-normal">
                {RoadMap.content}
            </p>
            <p className="bg-secondary rounded-[60px] max-w-[800px] w-full text-primary h-[65px] flex items-center justify-center">
                {RoadMap.heading}
            </p>
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
            <div className="flex flex-col w-[490px] h-[486px] p-10 pt-[30px] items-center  text-center rounded-[40px] bg-pink">
                <img src={src} alt="" className="w-[199px] h-[200px] rounded-full text-white" />
                <p className="mt-5 text-white text-[32px] font-normal">
                    {heading}
                </p>
                <p className="font-Inter font-normal text-white/80 text-sm mt-[11px]">
                    {content}
                </p>

            </div>
        </>
    )
}