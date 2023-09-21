import { PrimaryButton } from "@/components/ui/Button";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-center">
        <a href="" className="bg-white rounded-full mt-[170px]">
          <img
            src="/images/logo.svg"
            alt=""
            className="w-[160px] h-[155px] md:h-[157px]"
          />
        </a>
        <a href="" className="mt-[46px] md:mt-[30px]">
          <PrimaryButton className="text-white bg-pink">
            JOIN WHITELIST
          </PrimaryButton>
        </a>
        <nav className="flex  items-center gap-5  mt-[30px] md:mt-[34px]">
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
    </>
  );
}
