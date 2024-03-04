import React from 'react'


export const data = [
    {
        heading:'You get a beautiful piece of original NFT photographic art',
        content:'Created for the Temple of the Groovy Eye by Mary Salen, an American woman artist, which you may display proudly, gift, collect, trade, and print for personal use (commercial use prohibited). You also receive a single-use “Membership” NFT, which you may use, gift, or trade. Once exercised, the Membership NFT will be burned.        '
    },
    {
        heading:'A Temple of the Groovy Eye certificate of ordination',
        content:'Members attest to their sincerely held belief in equality, provide contact information – and that’s it! You’re ordained! Your Temple certificate will be delivered in the mail and serves as proof of your credentials!'
    },
    {
        heading:'A very groovy instant side-hustle – or main hustle!',
        content:'This is not only fun, and an opportunity to speak out on behalf of love and equality, but an instant money-maker! The Temple will maintain a directory of ordained persons (with your consent) where people who want a Groovy Eye wedding, or other life-event ceremony, can find you'
    },
    {
        heading:'You get a beautiful piece of original NFT photographic art',
        content:'Created specifically for the Temple of the Groovy Eye by an American woman artist. Temple NFT art is a beautiful artistic representation of our unfolding art and science-based philosophy. Your NFT may be displayedproudly, gifted, collected, traded, and even printed for personal use.'
    },
    {
        heading:'You’ll get a Temple of the Groovy Eye “clergy” parking pass',
        content:'To allow parking in spots reserved for “clergy” (that’s you!) near churches and other places of worship where you may be officiating a ceremony.         '
    },
    {
        heading:'You’ll get a Temple press pass',
        content:'Knowledge is power. We want to hear and learn from you and create a newsletter about Groovy Eyes everywhere. We want to know what’s going on around the world so we can work together. Use your press pass to cover events of interest to the Temple and submit your work for consideration to the GroovyVerse blog or newsletter. We want to hear from you!        '
    },
    {
        heading:'You will be able to get published!',
        content:'Members can submit their own writing and artwork for consideration in our blog, newsletter, and gallery. Share your work with the Temple of the Groovy Eye community and describe your own personal journey of self-discovery. We want to know!        '
    },
    {
        heading:'You get a day off!',
        content:'The Temple of the Groovy Eye has named state and federal general election days as our religious holidays! If your employer gives you time off for religious holidays, you can take state and federal general Election Days off to engage in the sacred activity of voting to promote equality. '
    },
    {
        heading:'You get a discount!',
        content:'The Temple funds itself through the sale of Temple art. Once you’ve purchased your NFT, you never need to buy another thing from us to retain your membership. We encourage you, however, to shop at our Temple for cool merch. It helps us grow and improve our outreach. We appreciate your support so much we’ll give free shipping and frequent special discounts to all NFT holders.        '
    },
    {
        heading:'You get equality!',
        content:'If we all do our part, we can make it happen!        '
    },
    {
        heading:'Is the membership transferable?',
        content:'Due to the official nature and legal status of ordination, membership cannot be transferred.  '
    },
]
export default function WhatYouGet() {
  return (
    <>
    <div className="w-full px-4 lg:px-0">
          <div
            className="flex flex-col items-center pb-[83px] md:pb-[80px] pt-[60px] bg-black/60 max-w-[1000px] mx-auto w-full backdrop-blur-[10px] rounded-[30px] lg:rounded-[80px] "
            id="roadmap"
          >
            <h2 className="text-pink text-[26px] lg:text-[60px] leading-[100%] uppercase font-normal">
                What you get:
            </h2>
            <p className="text-pink text-[26px] lg:text-[30px] leading-[100%] uppercase font-normal xs:w-full px-2 lg:w-[560px] text-center mt-2.5">A lot! The purchase of an NFT gets you a lifetime membership!  Plus:</p>
            <div className="flex flex-col gap-[30px] mt-[30px]"></div>
    {data.map((data,index)=>(
       <div key={index} className="w-full flex flex-col items-center  text-center gap-5 max-w-[810px] px-5 mt-10">
            <p className="bg-secondary  text-sm lg:text-xl rounded-[40px] lg:rounded-[60px] max-w-[800px] w-full text-primary h-auto lg:h-[65px] flex items-center justify-center px-8 py-3">
                {data.heading}
            </p>
            <p className="text-sm font-normal text-white lg:text-base ">
                {data.content}
            </p>
        </div> 

    ))}
    <button className='btn rounded-3xl bg-pink text-white text-center px-[30px] py-[14px]'>JOIN WHITELIST</button>
    </div>
    </div>
    
    </>
  )
}
