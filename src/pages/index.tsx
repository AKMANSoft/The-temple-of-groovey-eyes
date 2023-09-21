import { PrimaryButton } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";

import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import RoadMapListItem from "./_RoadMapListItem";
import TeamComponent from "./_TeamComponent";
import FAQsSection from "./_FAQSection";
import AnimatedText from "./_AnimatedText";

export default function Page() {
  return (
    <div className="bg-black">
      <Header />
      <section
        className={cn(
          "flex flex-col h-full md:h-auto w-full aspect-[3.7/4] bg-primary-image md:aspect-[1.2/1] bg-no-repeat",
          "  md:bg-black  mt-4 md:-mt-6 lg:mt-[0px]  items-center justify-center"
        )}
      >
        <AnimatedText />
        <button className="text-sm md:text-lg font-normal text-secondary bg-primary py-[14px] px-[30px] md:px-10 md:py-5 uppercase rounded-[40px] md:mt-[140px] ">
          Get Ordained Today
        </button>
      </section>
      <section className="relative z-10 px-4 py-20 pb-[98px] -mt-4 bg-primary md:hidden">
        <div className="pt-2">
          <img
            src="/images/start-bottom.png"
            alt=""
            className="absolute bottom-[18px] w-[calc(100vw_-_42px)] -translate-x-1/2 left-1/2 -z-10"
          />
          <img
            src="/images/star-top.png"
            alt=""
            className="absolute top-2 w-[calc(100vw_-_42px)] -translate-x-1/2 left-1/2 -z-10"
          />
          <div className=" flex flex-col items-center text-center justify-center rounded-[310px] bg-secondary max-w-[1000px] w-full h-auto xl:p-16 xl:pt-[80px] xl:pb-[74px] p-5 pt-[60px] pb-[88px] md:max-lg:p-5">
            <p className=" flex flex-col items-center justify-center text-primary font-normal uppercase w-[201px] md:w-full  ">
              <span className="text-base xl:text-[30px] ">
                Groovy Eyes hold this truth to be self-evident:
              </span>
              <span className="text-2xl xl:text-[50px] lg:mt-2 ">
                “All people are created equal.”
              </span>
            </p>
            <p className=" text-sm font-normal text-primary/70 lg:w-[760px] md:w-[500px] w-[343px] text-center font-Inter   mt-5  md:max-lg:mt-1 px-4">
              The Temple of the Groovy Eye is a non-profit art and science-based
              religious institution registered in the Commonwealth of
              Pennsylvania, that relies on science to lead to fundamental truth
              and art to express it. Founded by artists, activists, and
              philosophers, the Temple is a place where spiritual people and
              atheists alike can come together and proclaim that:{" "}
              <span className="font-black">here is a holy place to be.</span>{" "}
              <span className="md:max-lg:hidden">
                It is a place to meet; share ideas, art, and writing; learn
                about one another and form a more perfect union as we stand
                together to raise our voices in power, for equality of all
                people. And as an ordained member of the Temple of the Groovy
                Eye, you have both the moral authority to join people together
                in love and the legal authority to officiate marriage ceremonies
                that declare it so.
              </span>
            </p>

            <div className="z-10 mt-5 lg:mt-10 bg-secondary ">
              <PrimaryButton className="text-sm lg:text-lg font-normal uppercase rounded-[40px] ">
                Get Ordained Today
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>
      <section
        className={cn(
          "hidden md:flex items-center justify-center bg-star-image w-full h-auto aspect-[1.82/1] xl:aspect-[1.9/1]",
          "-mt-[18px] lg:-mt-[20px] md:px-[12px] lg:px-[11%] xl:px-[15%] py-[9%]"
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center text-center justify-center rounded-[310px] bg-secondary w-full h-full",
            "xl:p-16 xl:pt-[80px] xl:pb-[74px] p-5 pt-[60px] pb-[88px] md:max-lg:p-5"
          )}
        >
          <h2 className="text-primary font-normal uppercase w-[201px] md:w-full">
            <span className="text-base xl:text-[30px] leading-[22px] xl:leading-[44px]">
              Groovy Eyes hold this truth to be self-evident:
            </span>
            <br />
            <span className="text-2xl xl:text-[50px] mt-2 lg:mt-0 leading-[24px] xl:leading-[50px]">
              “All people are created equal.”
            </span>
          </h2>
          <p className="text-sm font-normal leading-[23px] text-primary/70 lg:w-[760px] md:w-[500px] w-[343px] text-center font-Inter  mt-5  md:max-lg:mt-1">
            The Temple of the Groovy Eye is a non-profit art and science-based
            religious institution registered in the Commonwealth of
            Pennsylvania, that relies on science to lead to fundamental truth
            and art to express it. Founded by artists, activists, and
            philosophers, the Temple is a place where spiritual people and
            atheists alike can come together and proclaim that:{" "}
            <span className="font-black">here is a holy place to be.</span>{" "}
            <span className="md:max-lg:hidden">
              It is a place to meet; share ideas, art, and writing; learn about
              one another and form a more perfect union as we stand together to
              raise our voices in power, for equality of all people. And as an
              ordained member of the Temple of the Groovy Eye, you have both the
              moral authority to join people together in love and the legal
              authority to officiate marriage ceremonies that declare it so.
            </span>
          </p>

          <div className="mt-5 lg:mt-10">
            <PrimaryButton className="text-sm lg:text-lg font-normal uppercase rounded-[40px] ">
              Get Ordained Today
            </PrimaryButton>
          </div>
        </div>
      </section>
      <section className="flex justify-center px-4 bg-pillar-image lg:h-auto">
        <div className="w-full  max-w-[1000px] text-center pt-[53px] pb-[65px] lg:py-[100px]">
          <h2 className="text-white text-[26px] leading-[30px] lg:text-[60px] lg:leading-[60px] font-normal uppercase">
            THE PILLARS of the temple
          </h2>
          <p className="text-sm lg:text-base lg:leading-[24px] font-normal font-Inter text-white mt-[10px] max-w-[904px] w-full">
            The Pillars are built on the bedrock of the science of creation and
            represent the stages of our unfolding philosophy. Our NFTs are
            designed to tell this story, each Pillar with its own unique style
            and message. We begin here with the first two Founding Pillars. Get
            ordained into one of these two and be the very first of the Groovy
            Eyes!
          </p>
          <div className="grid grid-cols-1 gap-5 mt-5 place-items-center lg:grid-cols-2 lg:mt-10">
            <Card
              src={"/images/piller-of-beginning.jpg"}
              heading="THE PILLAR OF THE BEGINNING"
              subheading="“Matter is energy solidified.” – Albert Einstein"
              content={
                <p>
                  The foundation of our Temple is laid with the evidence of the
                  single creative instant from which everything in the known
                  universe was born. All the energy that would one day become a
                  particle, a star, an atom, a rose, an ocean, or a human,
                  everything the universe could ever and would ever be,
                  originated in that single instant. Every particle of every
                  person of every race, gender and culture can trace its history
                  to that same original Beginning{" "}
                  <span className="font-bold">–– EQUALLY.</span>
                </p>
              }
              button="Join Whitelist"
              transbutton="View NFTS"
            />
            <Card
              src={"/images/piller-of-wave.jpg"}
              heading="THE PILLAR OF THE BEGINNING"
              subheading="“Life is a wave, which in no two consecutive moments of its existence is composed of the same particles.” –John Tyndall"
              content={
                <p>
                  As an artist I have a deep fascination with waves, their
                  sacred geometry is the shape of our universe’s construction.
                  <br />
                  <br />
                  The current discovery of gravity waves thrills me. I can’t
                  help but imagine we are in an ocean we can’t see, where the
                  space between
                </p>
              }
              button="Join Whitelist"
              transbutton="View NFTS"
            />
          </div>
        </div>
      </section>
      <section
        className={cn(
          "flex flex-col items-center justify-center bg-ourteam-image",
          "lg:px-0 pt-[63px] lg:pt-[100px] pb-[138px] lg:pb-[100px]"
        )}
      >
        <p className="text-pink text-[26px] md:text-[60px] leading-[100%] font-normal uppercase">
          OUR TEAM
        </p>
        <div className="flex gap-5 overflow-x-auto max-w-[1000px] h-full w-full mt-[18px] md:mt-[26px] no-scroll-bar">
          <TeamComponent
            src={"/images/circle.png"}
            heading="Mary Salen"
            content={
              <p>
                Mary is a photographer, artist, writer, lifelong science
                enthusiast, and social justice activist. These have been both
                cornerstones and guiding stars in Mary’s personal quest to
                create an equality-based philosophy, something practical and
                beautiful we can all share in—and the Temple of the Groovy Eye
                was born.
              </p>
            }
          />
          <TeamComponent
            src={"/images/circle.png"}
            heading="Stu Salen"
            content={
              <p>
                Is an attorney, patent-holding inventor, Peace Corps volunteer
                alum, organic farmer, teacher,foster and adoptive parent, and
                social justice activist––devoted to the ideal of Equality in our
                Lifetime.
              </p>
            }
          />
        </div>
      </section>
      <motion.section className="flex flex-col items-center w-full h-fit bg-whitepaper-image bg-primary">
        <div className="px-4 lg:px-0">
          <div className="text-center max-w-[1000px] w-full lg:px-[120px] py-[60px] bg-black/60 backdrop-blur-[10px] rounded-[30px]  lg:rounded-[80px] mt-[60px]  lg:mt-[100px] px-4">
            <h2 className="text-pink text-[26px] lg:text-[60px] leading-[100%] font-normal uppercase ">
              WHITEPAPER
            </h2>
            <p className="font-Inter font-normal text-sm lg:text-base text-white/60 mt-[10px] leading-[220x] lg:leading-[26px] lg:mt-5 min-h-[78px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
            <div className="flex justify-center mt-[30px] lg:mt-[43px]">
              <PrimaryButton className="text-white bg-pink h-[53px]">
                DOWNLOAD WHITEPAPER
              </PrimaryButton>
            </div>
          </div>
        </div>
        <Slider />

        <div className="w-full px-4 lg:px-0">
          <div
            className="flex flex-col items-center pb-[83px] md:pb-[80px] pt-[60px] bg-black/60 max-w-[1000px] mx-auto w-full backdrop-blur-[10px] rounded-[30px] lg:rounded-[80px] "
            id="roadmap"
          >
            <h2 className="text-pink text-[26px] lg:text-[60px] leading-[100%] uppercase font-normal">
              ROADMAP
            </h2>
            <div className="flex flex-col gap-[30px] mt-[30px]">
              {RoadMap.map((RoadMap) => (
                <RoadMapListItem RoadMap={RoadMap} />
              ))}
            </div>
            <div className="w-full flex flex-col items-center  text-center gap-5 lg:gap-10 max-w-[810px] px-5 mt-5 lg:mt-[30px]">
              <p className="text-sm font-normal text-white lg:text-base font-Inter">
                Imagine sharing a beautiful celebration in real time, in a
                beautiful virtual space where guests from all over the world can
                gather and interact with one another, without travel expenses!
                We can make it happen!
                <br />
                <br />
                Groovy Eyes see groovy things. They look on love and see beauty,
                they look for truth and see equality. It’s time to embrace love
                and equality, here and now, as a way of thinking and a way of
                life! Inequality and hate have no place in the GroovyVerse.
                Here, all people, regardless of age, physical ability, or
                location can participate and be celebrated, honored as a beloved
                friends and equals. The Temple welcomes spiritual people,
                agnostics, and atheists alike. Our sincerely held belief is in
                the sacredness of our present power to do good, and the holy
                nature of our time spent on Earth dedicated to action in pursuit
                of equality.
              </p>
            </div>
            <p className="text-white text-base lg:text-xl font-normal mt-10 lg:mt-[60px]">
              This is the dream. This is the new way.
            </p>
            <div className="mt-[30px] flex">
              <PrimaryButton className="text-white bg-pink">
                JOIN WHITELIST
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* FAQ Section  */}
        <div
          id="faq"
          className={cn(
            "flex flex-col items-center pt-[60px] pb-[41px] lg:pb-[100px] mt-[20px] lg:mt-[40px] bg-black/60",
            "max-w-[1000px] w-full backdrop-blur-[10px] rounded-[30px] lg:rounded-[80px]"
          )}
        >
          <h2 className="text-pink text-[60px] uppercase leading-[100%] font-normal">
            FAQs
          </h2>
          <div className="mt-[33px] w-full">
            <FAQsSection />
          </div>
        </div>
      </motion.section>
      <motion.div className="flex flex-col items-center bg-footer-image -mt-[332px] h-[838px] pt-[342px] lg:pt-[214px]">
        <Footer />
      </motion.div>
    </div>
  );
}

const RoadMap = [
  {
    heading: "This is not your grandfather’s religion.",
    content: (
      <p>
        <span className="font-Inter">
          It’s time for a new religion! The Temple of the Groovy Eye is where
          atheists, agnostics, and equality-loving spiritual people from all
          around the world can join together in the noble pursuit of: Equality
          in Our Lifetime! Be part of the new science-based movement rooted in
          truth and love! Come share ideas with one another, tell your stories
          and be part of a bright new community of voices in tune with love and
          amplified by the knowledge that:
        </span>
        <span className="">All People Are Created Equal.</span>
        <span className="block font-Inter mt-[20px]">
          Equality is a single thing. Groovy Eyes see the diversity inherent in
          our species as an evolutionary achievement––a glorious crown. Groovy
          Eyes embrace all genders and the LGBTQ+ community, we defend women’s
          rights and self-sovereignty, and we stand firmly against racism and
          prejudice. We are committed to preserving our environment for the next
          generation, and we are not afraid to speak on behalf of these issues
          and use our non-violent power to strive for equality.
        </span>
      </p>
    ),
  },
  {
    heading: "The GroovyVerse is our sacred space",
    content: (
      <p className="font-Inter">
        It’s time for truth and love to take their rightful place in the world
        and deliver the dream of equality for us all. We can achieve it now like
        never before, together––in the Metaverse!
        <br />
        <br />
        The Temple of the Groovy Eye is a registered, non-profit religious
        institution in the Commonwealth of Pennsylvania, USA. A portion of the
        original purchase price for every NFT is tax-deductible (at least in the
        US) and will account for both your membership fee and a donation to the
        building fund for our Metaverse – the “GroovyVerse”. Original owners of
        the first drop of NFTs will have lifetime membership status.
      </p>
    ),
  },
  {
    heading: "ALL memberships come with the opportunity to be ordained!",
    content: (
      <p>
        <span className="font-Inter">
          {" "}
          A place to gather, share art and writing, tell our stories and be
          pro-active. A worldwide union of free-thinking, freedom-loving people
          who are hungry for a community to belong to that shares the sincerely
          held belief that:{" "}
        </span>{" "}
        <span> Here is a Holy Place to Be.</span>
        <br />
        <br />
        <span className="font-Inter">
          The GroovyVerse is a safe space to be together as equals, regardless
          of physical ability or geographic location. It is place for wedding
          ceremonies, memorial services and solemnities, baby-welcoming
          ceremonies, hand-fastings and other celebrations of life and love. We
          want you with us!
        </span>
      </p>
    ),
  },
  {
    heading:
      "You can even officiate weddings and other ceremonies in the GroovyVerse!",
    content: (
      <p>
        <span className="font-Inter">
          {" "}
          Members are also eligible to submit art and writing for consideration
          in the GroovyVerse gallery, newsletter, and blog. Moreover, Temple
          ordination authorizes you to{" "}
        </span>
        <span className="">legally officiate marriage ceremonies</span>{" "}
        <span className="font-Inter">
          {" "}
          in all 50 states and wherever your country’s local laws allow. But
          that’s not all, you could officiate hand-fastings, child-welcoming
          ceremonies, funerals and memorial services. You’ll receive your
          ordination credentials, a clergy parking pass, and an official Temple
          press pass to get you up close to newsworthy equality and social
          justice events to cover for the GroovyVerse.{" "}
        </span>
        <br />
        <br />
        <span className="font-Inter">
          Be a love and equality activist—and earn extra income as a marriage
          officiant! Here in Pennsylvania, where the Temple is based, the fees
          for officiating a marriage range from $300-$800, plus expenses and a
          customary extra fee for a rehearsal. Of course, you can officiate for
          your friends and family for free, but it can also be a sweet
          side-hustle if you love the work and feel called to join people
          together in love and equality in the name of the Temple of the Groovy
          Eye.
        </span>
      </p>
    ),
  },
];
