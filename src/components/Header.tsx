import { useState,useEffect } from "react";
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeLink , setActiveLink] =useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  const onhandleClick = (link:string)=>{
    setActiveLink(link)
  }
  return (
    <header className="`w-full h-full bg-black`">
      <nav className="flex items-center justify-between w-full px-4 lg:px-5 pt-[10px] lg:pt-5 xl:px-[70px] xl:mx-auto ">
        <Link to="/">
          <img
            src="/images/logo.svg"
            width={120}
            height={116}
            className="w-[60px] h-auto lg:w-[120px] lg:h-[116px]"
          />
        </Link>
        <div className="text-white text-base font-normal lg:flex justify-between gap-[50px] hidden">
          <Link to="/" className={activeLink === '/' ? 'text-secondary' : 'text-white'}
            > Home </Link>
          <a href="#roadmap" className={activeLink === 'roadmap' ? 'text-secondary' : 'text-white'}
           onClick={()=>(onhandleClick('roadmap'))} >Roadmap </a>
          <Link to="" className={activeLink === '/shop' ? 'text-secondary' : 'text-white'}
            >Shop</Link>
          <a href="#faq" className={activeLink === 'faq' ? 'text-secondary' : 'text-white'}
            onClick={()=>(onhandleClick('faq'))}>FAQ</a>
          <Link to="/ordained" className={activeLink === '/ordained' ? 'text-secondary' : 'text-white'}
            >GET ORDAINED</Link>
        </div>
        <button className="text-lg font-normal text-primary bg-white px-[30px] py-[14px] uppercase rounded-[40px] lg:block hidden leading-[100%] h-[53px]">
          <Link to='/mint'>
          Join Whitelist
          </Link>
        </button>
        <MenuBar />
      </nav>
    </header>
  );
}
