// import { PrimaryButton, SecondaryButton } from "../components/Buttons";
// import Footer from '@/components/Footer';
import MintFooter from '@/components/MintFooter';
import { useState } from 'react';




export default function MintPage() {
    const [nftCount, setNftCount] = useState(1);
    const [remainingCount, setRemainingCount] = useState(0);

    const handleIncrement = () => {
        if (nftCount < remainingCount) {
            setNftCount(nftCount + 1);
        }
        else {
            setRemainingCount;
        }
    };

    const handleDecrement = () => {
        if (nftCount > 0) {
            setNftCount(nftCount - 1);
        }
    };
    const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCount = parseInt(event.target.value);
        if (newCount >= 0 && newCount <= remainingCount) {
            setNftCount(newCount);
        }
    }
    const calculateProgressBarWidth = () => {
        return `${(remainingCount - nftCount) / remainingCount * 100}%`;
    };
    return (
        <div>
            <div className="pillar-of-temple-section bg-cover bg-no-repeat flex flex-col space-y-7 h-auto">
                {/* main header section with logo image and button*/}
                <div className="flex items-center justify-evenly py-5">
                    <div>
                        <a href="/">
                            <img src="/images/logo.svg" className="md:w-[170px] md:h-[105px] w-[130px] h-[80px]" />
                        </a>
                    </div>
                    <div className="">
                        <button  className="text-sm text-secondary">
                            CONNECT WALLET
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center my-[200px]">
                    <div className="flex flex-col bg-secondary lg:w-[846px] items-center justify-center lg:rounded-[40px] rounded-[20px] md:py-7 pt-10 space-y-7 mx-4">
                        <div>
                            <h3 className="md:text-[32px] text-2xl font-extrabold text-primary">
                                Mint Your NFT
                            </h3>
                        </div>
                        <div className="lg:flex gap-x-5 lg:w-[850px] px-7">
                            <div>
                                <img src="/images/piller-of-beginning.jpg" alt="" width={425} height={293} className="rounded-[20px] object-cover object-center w-[425px] h-[293px]" />
                            </div>
                            {/* status and price div*/}
                            <div className="lg:w-1/2 flex flex-col justify-between mx-4 py-5 md:space-y-0 space-y-2">
                                <div className="flex justify-between text-xs font-semibold text-primary">
                                    <p className="text-primary">
                                        STATUS
                                    </p>
                                    <p >
                                        STARTING IN 12 DAYS
                                    </p>
                                </div>
                                <div className="flex  justify-between text-xs font-semibold text-primary">
                                    <p className="text-primary">
                                        PRICE
                                    </p>
                                    <p >
                                        0.06 ETH
                                    </p>
                                </div>
                                <div className="space-y-2 md:space-y-0">
                                    <p className="text-primary text-base font-semibold input-for-proggressbar">
                                        {remainingCount - nftCount} Remaining
                                    </p>
                                    <div className="bg-gray h-3 rounded-full">
                                        <div className="w-[10%] h-full rounded-full bg-primary" style={{ width: calculateProgressBarWidth() }}></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div>
                                        <p className="text-base text-primary font-bold">
                                            How many NFT’s to mint?
                                        </p>
                                    </div>
                                    <div className="flex bg-gray  item-center py-2 justify-center relative">
                                        <button className="absolute top-1/2 left-4 -translate-y-1/2" onClick={handleDecrement} disabled={nftCount <= 0}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                                            <path d="M2 2H14" stroke="#0101FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                        <p className="text-2xl  font-inter text-primary" onChange={handleCountChange}>
                                            {nftCount}
                                        </p>
                                        <button className="absolute right-4 top-1/2 -translate-y-1/2" onClick={handleIncrement} disabled={nftCount >= remainingCount}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 2V14M2 8H14" stroke="#0101FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div>
                                        <button className="bg-white rounded-3xl text-primary lg:px-[132px] lg:py-3">
                                            MINT NOW
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            <div className="relative ">
                <div className="hidden md-flex items-center justify-center absolute  left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[127px] ">
                    <a href="/">
                        <img src="/images/logo.svg" alt="" className='w-[160px] md:w-[198px]' />
                    </a>
                </div>
                <div className="md:flex items-center py-40 justify-around mx-16 max-w-screen-xl xl:mx-auto">
                    <div className="md:flex hidden">
                        <p className="text-white text-base ">
                            © 2023 – Kraut9 – All Rights Reserved
                        </p>
                    </div>
                    <div className="hidden md-flex  md:space-x-[10px] justify-evenly ">
                    {/* <nav className="flex  items-center gap-5  "> */}
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
                     {/* </nav> */}
                    </div>
                    
                </div>
            </div>
            </div>
                    
                        <MintFooter />
        </div>
    )

}