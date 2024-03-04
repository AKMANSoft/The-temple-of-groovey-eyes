import Header from "@/components/Header";
// import borderImg from "/images/shape.png";
import Slider from "@/components/Slider";
import WhatYouGet from "@/components/WhatYouGet";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

export default function GetOrdained() {
  return (
    <>
      <div className="bg-primary ">
        <Header />
        <div className="px-4">
          <div
            className={cn(
              "flex items-center justify-center flex-col w-full h-auto  banner-bg px-4",
              " md:px-[16px] lg:px-[11%] xl:px-[15%] py-[11%] "
            )}
          >
            <p className="text-2xl lg:text-[53.85px] font-normal text-white uppercase pt-[58px] lg:pt-[100px] w-[300px] sm:w-[500px] md:w-[600px] lg:w-auto text-center ">
              Ordination and other cool stuff
            </p>

            <div className=" text-center mb-[30%] md:mb-[10%]  w-[300px] sm:w-[500px] md:w-[600px] lg:w-[760px] font-Inter text-[14px]">
              <p className="mt-5 lg:mt-10 text-white">
                <span className="text-white font-bold ">
                  ALL memberships come with the opportunity to be ordained!{" "}
                </span>
                <span>
                  Simply navigate to the Membership page, provide your full
                  name, contact info, and attest to the sincerely held belief
                  that:{" "}
                </span>
                <span className="text-white font-bold ">
                  All People are Created Equal
                </span>
                <span>
                  {" "}
                  – that’s it! The entire process takes a few minutes. Your
                  acceptance is immediate and your ordination package will be
                  sent to you via US mail.
                </span>
              </p>
              <br />
              <p className="text-white">
                Ordination as a Temple “Groovy Eye” is a legal credential
                equivalent to any reverend, priest, rabbi, or minister. With
                this credential, you may represent our Philosophical Union and
                officiate life ceremonies, such as child-welcoming,
                hand-fastings, funerals and memorial services, but most
                importantly, commitment ceremonies, including legally binding
                marriages in all 50 states and anywhere in the world local
                jurisdictions allow.
              </p>
              <br />
              <p className="text-white">
                Along with your ordination credentials, you will receive a
                clergy parking pass, and an official Temple press pass to get
                you up close to newsworthy equality and social justice events to
                cover for the Temple. Members are also eligible to submit art
                and writing for consideration in the forthcoming GroovyVerse
                gallery, Groovy Union journal, and blog.
              </p>
              <br />
              <p className="text-white">
                You can even officiate weddings and other ceremonies in the
                GroovyVerse! Imagine sharing a beautiful celebration in real
                time, in a beautiful virtual space where guests from all over
                the world can gather and interact with one another, without
                travel expenses! We can make it happen! (Subject to local legal
                requirements.)
              </p>
              <br />
            </div>
          </div>
        </div>

        <div className="grid-section-bg pb-7 h-auto ">
          <div className="mt-[-200px] h-[230px] bg-primary mb-[100px]">
          <Slider />
          </div>
          <div className="mt-[200px] md:mt-[200px] lg:mt-[400px]">
            <WhatYouGet />
          </div>
          <div className="w-auto lg:w-[1000px] bg-white py-[438px] mx-4 lg:mx-auto mt-10 rounded-[80px] lg:relative  z-50">
            <p className="w-[208px] lg:w-full font-normal text-[30px] text-primary text-center  mx-auto">
              *Embedded google form view*
            </p>
          </div>
        </div>
        <div className="footer-bg py-[100px] lg:pt-[300px] lg:absolute lg:bottom-[-620%] xl:bottom-[-485%] w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
