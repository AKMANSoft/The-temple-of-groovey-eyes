import { Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { PrimaryButton } from "@/components/ui/Button";

export default function MenuBar() {
  const [isContentOpen, setIsContentOpen] = useState(false);

  const toggleContent = () => {
    setIsContentOpen(!isContentOpen);
  };
  return (
    <>
      <div className="xl:hidden">
        <img
          src="/images/menu-button.png"
          alt=""
          className="w-[50px] h-auto"
          onClick={toggleContent}
        />
      </div>
      {isContentOpen && (
        <div className="bg-primary/90 z-50   overflow-y-auto fixed w-[100vw]  top-0 right-0">
          <div className="flex justify-between  w-[100vw]  px-4">
            <div className="text-white text-[32px] font-normal  justify-between gap-[20px] flex flex-col  mt-[10px]">
              <img
                src="/images/logo.png"
                alt=""
                className="w-[60px] h-[58px] mb-[10px]"
              />
              <a href="/">Home</a>
              <a href="#roadmap">Roadmap</a>
              <a href="">Shop</a>
              <a href="#faq">FAQ</a>
              <a href="">GET ORDAINED</a>
              <PrimaryButton className="bg-white text-primary text-2xl px-[30px] py-5 my-10 text-center">
                Join Whitelist
              </PrimaryButton>
            </div>

            <div className="flex justify-end mt-4 text-white hover:cursor-pointer w-7 h-7">
              <Cross1Icon onClick={toggleContent} className="w-7 h-7 " />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
