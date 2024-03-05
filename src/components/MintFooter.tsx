// import { PrimaryButton } from "@/components/ui/Button";

export default function MintFooter() {
  return (
    <>
      <footer className="flex flex-col items-center justify-center bg-primary   -translate-y-1/2 pb-[106px]">
        <a href="" className="bg-white rounded-full mt-[-20%]">
          <img
            src="/images/logo.svg"
            alt=""
            className="w-[160px] h-[155px] md:h-[157px] "
          />
        </a>
        {/* <a href="" className="mt-[46px] md:mt-[30px]">
          <PrimaryButton className="text-white bg-pink">
            JOIN WHITELIST
          </PrimaryButton>
        </a> */}
        <nav className="flex  items-center gap-5  mt-[50px]">
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
        <p className="text-white text-base text-center mt-[30px]">
          © 2023 – Kraut9 – All Rights Reserved
        </p>
      </footer>
    </>
  );
}
