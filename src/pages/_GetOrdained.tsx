import Header from "@/components/Header";
import borderImg from "/images/shape.png";
import Slider from "@/components/Slider";
import WhatYouGet from "@/components/WhatYouGet";
import Footer from "@/components/Footer";

export default function GetOrdained() {
  return (
    <>
      <div className="bg-primary w-full h-full ">
        <Header />
        <div className=" w-full xs:pb-0 pb-[450px] ">
          <img src={borderImg} alt="" className="" />
          <div className="text-center w-1/2 mx-auto absolute sm:top[20%] lg:top-96 sm:left-10 lg:left-80 text-white">
            <p className="text-sm lg:text-[53.85px] font-normal text-white h-auto lg:h-[65px]">
              Ordination and other cool stuff
            </p>
            <p>
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
            <p>
              Ordination as a Temple “Groovy Eye” is a legal credential
              equivalent to any reverend, priest, rabbi, or minister. With this
              credential, you may represent our Philosophical Union and
              officiate life ceremonies, such as child-welcoming, hand-fastings,
              funerals and memorial services, but most importantly, commitment
              ceremonies, including legally binding marriages in all 50 states
              and anywhere in the world local jurisdictions allow.
            </p>
            <br />
            <p>
              Along with your ordination credentials, you will receive a clergy
              parking pass, and an official Temple press pass to get you up
              close to newsworthy equality and social justice events to cover
              for the Temple. Members are also eligible to submit art and
              writing for consideration in the forthcoming GroovyVerse gallery,
              Groovy Union journal, and blog.
            </p>
            <br />
            <p>
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
