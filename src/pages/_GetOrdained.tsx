import Header from "@/components/Header";
// import borderImg from "/images/shape.png";
import Slider from "@/components/Slider";
import WhatYouGet from "@/components/WhatYouGet";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

export default function GetOrdained() {
  return (
    <>
      <div className="bg-primary">
        <Header />
        <div className={cn(
          "hidden md:flex items-center justify-center flex-col w-full h-auto banner-bg object-fit",
          "-mt-[18px] lg:-mt-[10px] md:px-[12px] lg:px-[11%] xl:px-[15%] py-[7%] "
        )}
        >
          
          {/* <img src={borderImg} alt="" className="" /> */}
          <div>
            <p className="text-sm lg:text-[53.85px] font-normal text-white mt-24">
              Ordination and other cool stuff
            </p>
            <p className="mt-10 text-white">
              <span className="text-white bold text-[14px]">
                ALL memberships come with the opportunity to be ordained!{" "}
              </span>
              <span>
                Simply navigate to the Membership page, provide your full name,
                contact info, and attest to the sincerely held belief that:{" "}
              </span>
              <span className="text-white bold text-[14px]">
                All People are Created Equal
              </span>
              <span>
                {" "}
                – that’s it! The entire process takes a few minutes. Your
                acceptance is immediate and your ordination package will be sent
                to you via US mail.
              </span>
              <br />
            </p>
            <p className="text-white">
              Ordination as a Temple “Groovy Eye” is a legal credential
              equivalent to any reverend, priest, rabbi, or minister. With this
              credential, you may represent our Philosophical Union and
              officiate life ceremonies, such as child-welcoming, hand-fastings,
              funerals and memorial services, but most importantly, commitment
              ceremonies, including legally binding marriages in all 50 states
              and anywhere in the world local jurisdictions allow.
            </p>
            <br />
            <p className="text-white">
              Along with your ordination credentials, you will receive a clergy
              parking pass, and an official Temple press pass to get you up
              close to newsworthy equality and social justice events to cover
              for the Temple. Members are also eligible to submit art and
              writing for consideration in the forthcoming GroovyVerse gallery,
              Groovy Union journal, and blog.
            </p>
            <br />
            <p className="text-white">
              You can even officiate weddings and other ceremonies in the
              GroovyVerse! Imagine sharing a beautiful celebration in real time,
              in a beautiful virtual space where guests from all over the world
              can gather and interact with one another, without travel expenses!
              We can make it happen! (Subject to local legal requirements.)
            </p>
            <br />
          </div>
        </div>

        <div className="grid-section-bg relative pb-[500px]">
          <div className=" relative top-[-300px] ">
            <Slider />
            <WhatYouGet />
          </div>
          <div className="xs:w-full lg:w-[1000px] bg-white py-[438px] mx-auto rounded-[80px] absolute z-50 top-[80%] lg:left-[15%]">
            <p className="font-normal text-[30px] text-primary text-center ">
              *Embedded google form view*
            </p>
        </div>
        </div>
        <div className="footer-bg relative py-[150px]">
          <Footer />
        </div>
      </div>
    </>
  );
}
