import { Cross1Icon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { PrimaryButton } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export default function MenuBar() {
  const [isContentOpen, setIsContentOpen] = useState(false);

  const toggleContent = () => {
    setIsContentOpen(!isContentOpen);
  };

  useEffect(() => {
    window.onresize = () => {
      if (isContentOpen && window.innerWidth >= 1280) {
        setIsContentOpen(false);
      }
    };
  }, [isContentOpen]);

  return (
    <>
      <div className="lg:hidden">
        <img
          src="/images/menu-button.png"
          alt=""
          className="w-[50px] h-auto"
          onClick={toggleContent}
        />
      </div>
      {isContentOpen && (
        <div className="bg-primary/90 z-50 fixed w-full px-4 pt-[10px] pb-[40px] top-0 right-0">
          <div className="w-full">
            <div className="flex w-full items-center justify-between">
              <img
                src="/images/logo.svg"
                alt=""
                className="w-[60px] h-[58px]"
              />
              <div className="flex justify-end mr-2 text-white hover:cursor-pointer w-7 h-7">
                <Cross1Icon onClick={toggleContent} className="w-7 h-7 " />
              </div>
            </div>
            <div className="text-white text-[32px] font-normal space-y-[20px] w-full mt-[30px]">
              <a href="/" className="block leading-[44px] ">
                Home
              </a>
              <a href="#roadmap" className="block leading-[44px] ">
                Roadmap
              </a>
              <a href="" className="block leading-[44px] ">
                Shop
              </a>
              <a href="#faq" className="block leading-[44px] ">
                FAQ
              </a>
              <a href="/ordained" className="block leading-[44px] ">
                GET ORDAINED
              </a>
            </div>
            <div className="flex w-full mt-[43px]">
              <PrimaryButton className="bg-white text-primary w-full text-2xl px-[30px] py-5 text-center">
                <Link to='/mint'>
                  Join Whitelist
                </Link>
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
