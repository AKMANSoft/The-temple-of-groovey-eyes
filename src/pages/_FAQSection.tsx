import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import React from "react";

export type ExpandableProps = {
  heading: string;
  content: React.ReactNode;
};

const faqsList = [
  {
    heading: "What does Groovy Eye mean?",
    content: (
      <>
        {/* We perceive one another from an interior place, from the core belief
        system there tells our eyes how to regard the things they see. Too many
        people look upon expressions of love and see ugliness, sin, and disgust.
        Too many people look upon women’s bodies and see shamefulness. Too many
        people look upon people of different races or physical abilities and see
        lesser people. These are unnatural ways of seeing. We know love is
        always beautiful, women’s bodies are not shameful, and biological
        differences don’t make anyone less. The problem, therefore, must be in
        their eyes.
        <br />
        To be a Groovy Eye, all you have to do is look a bit deeper, below the
        surface, where inherent commonality of humanity resides, and the job is
        done. You’ve found your people! Welcome to the Temple of the Groovy Eye!
        Welcome home. */}
        
Yours are the Groovy Eyes. We perceive one another from an interior place, from the core belief system that tells our eyes how to regard the things they see. Too many people look upon expressions of love and see ugliness, sin, and disgust. Too many people look upon women’s bodies and see shamefulness. Too many people look upon those of different races or physical abilities and see lesser people. These are unnatural ways of seeing. We know love is always beautiful, women’s bodies are not shameful, and biological differences don’t make anyone less. The problem, therefore, must be in their eyes. To be a Groovy Eye, all you have to do is look a bit deeper, below the surface, where inherent commonality of humanity resides, and see that equality is the truth: the job is done. You’ve found your people! Welcome to the Temple of the Groovy Eye! Welcome home.


      </>
    ),
  },
  {
    heading: "How did you come up with the idea for your art?",
    content: (
      <>
        The first of two “Pillars” series I’ve created for the Temple NFTs are in this drop – “Creation” and “The Wave.” These represent a new kind of science-based creation story. The Pillar of “Creation” is first, a singular explosive event from which all biological life, all races and genders, originate equally––the simple truth from which every person’s natural rights are thereby derived and guaranteed. The colors are wild and unexpected and the figures and shapes, unformed, ultraviolet, and full of possibility. The Pillar of “The Wave” continues the story with images that are flowing, grainy, and edgy, like a universe in formation. A few contain mild, artistic nudity, and present the female form as present and powerful from the very beginning. The next drops will continue the story! <br /><br />
        As a lifelong feminist, I put the female form in the center to reclaim her rightful place in the act and process of creation. Each image is a single-capture photograph with only photoshop processing, not digitally or AI created. <br /><br />

Photography is art using a scientific instrument that allows you to “paint” with electromagnetic radiation. What a turn on! Each and every photo was set up and taken using proprietary lighting systems and really trippy studio designs. I created this art for you, and I hope you love it.


      </>
    ),
  },
  {
    heading: "What does that mean to be ordained?",
    content: (
      <>
        {/* As a religious institution, The Temple of the Groovy Eye ordains like-minded individuals, or “Groovy Eyes,” who are our clergy. Once ordained, you will have the full legal status required to officiate marriages in the name of the Temple of the Groovy Eye. You get real credentials and can officiate real, legally binding marriages––as well as all other life celebrations, in exactly the same way as any other priest or minister. */}
        As a religious institution, The Temple of the Groovy Eye ordains like-minded individuals, or “Groovy Eyes,” who are our clergy. Once ordained, you get real credentials and can officiate real, legally binding marriages––as well as all other life celebrations, in exactly the same way as any other priest or minister. In the name of the Temple of the Groovy Eye, our ordained clergy will commit to including in every marriage ceremony a statement of equality. 
Equality begins at home, let’s officially pronounce that. 

      </>
    ),
  },
  {
    heading: "Is the Temple of the Groovy Eye legally able to ordain individuals?",
    content: (
      <>
        {/* Yes! We are registered in the Commonwealth of Pennsylvania as a <span className="font-bold">non-profit</span> religious institution, and as such, individuals ordained by the Temple are recognized in all 50 states!Please check with your local jurisdiction to be sure that no additional paperwork or confirmation is required. Letters of good standing from the Temple are not generally required but are available upon request to ordained members for a nominal fee.
        International members should inquire with their local governments. We will work with you! */}
        Yes! We are registered in the Commonwealth of Pennsylvania as a {' '}<span className="font-bold">non-profit</span>  religious institution, and as such, individuals ordained by the Temple are recognized in all 50 states! Please check with your local jurisdiction to be sure that no additional paperwork or confirmation is required. Letters of good standing from the Temple are not generally required but are available upon request to ordained members for a nominal fee. International members should inquire with their local governments. We will work with you!

      </>
    ),
  },
  {
    heading: "Can I get paid to officiate weddings and other ceremonies?",
    content: (
      <>
        You bet! Being an ordained “Groovy Eye” a great side hustle––or main hustle! Get paid to join people together in <span className="font-bold">love and equality</span> in the name of the Temple of the Groovy Eye. The going rate for marriage officiants in the USA ranges from <span className="font-bold">$300-$800 per ceremony, plus expenses and extra for a rehearsal!</span> Get paid to do something beautiful! How cool is that?
      </>
    ),
  },
  {
    heading: "Sounds GREAT! How do I get ordained?",
    content: (
      <>
        {/* It’s quick and easy! Once you’ve purchased an NFT you are a member of the Temple, and you’ll have the opportunity to be instantly ordained! You’ll be asked to provide your full name, contact info, and attest to the sincerely held belief that: <span className="font-bold">All People are Created Equal – </span>that’s it! Everything that goes with that, goes with that. <br />
        It’s that easy! The entire ordination process takes about 30 seconds, and your acceptance is immediate. You can perform marriage ceremonies legally right away <span className="font-bold">– get your side-hustle business started the same day!</span> */}
      It’s quick and easy! When you purchase an NFT you will also receive a second single-use NFT (at no additional cost) that will entitle you to become a member of the Temple, upon which you’ll have the opportunity to be ordained! You’ll be asked to provide your full legal name, contact info, and attest to the sincerely held belief that: All People are Created Equal – that’s it! The entire ordination process only takes a few minutes, and your acceptance is immediate. As long as you continue to uphold our beliefs, you will remain on official Temple logs as an ordained member in good standing. You can perform marriage ceremonies legally as soon as you receive your credentials. You must be at least 18 years of age.
      </>
    ),
  },
  {
    heading: "How about virtual weddings in the GroovyVerse, are they legal?",
    content: (
      <>
        Yes! The Covid pandemic threw open the door to virtual weddings, which are now legal in many jurisdictions. Friends and family from across the world can share special moments and interact directly with friends and family members without the difficulties or expense of travel. The legal requirements of GroovyVerse weddings will vary depending on where the happy couple is located, so be sure to check with local officials.
      </>
    ),
  },
  {
    heading: "When will the GroovyVerse be up and running?",
    content: (
      <>
        {/* The Temple of the Groovy Eye has already secured the “land,” the virtual space to build the GroovyVerse. */}
        All “building funds” received from NFT sales will go directly into the development of the site, with the goal of raising sufficient funds to go live in 2024! Updates on progress will be regularly provided on the website.

      </>
    ),
  },
  {
    heading: "Do I have to believe in God to join?",
    content: (
      <>
        <span className="font-bold"> NO!</span> We are a philosophical union that welcomes all atheists, agnostics, and equality-loving spiritual people. Our only focus is on the sanctity of here and now, and the holy nature of our own actions in this, present world. 
            <br />
         <span className="font-bold">Here is a Holy Place to Be.</span>
      </>
    ),
  },
  {
    heading: "Do you charge annual dues?",
    content: (
      <>
        {/* We do not charge annual fees for "founding" NFT owners! We will charge a small annual fee for subsequent membership to enable us to maintain the functioning of the Temple. We want a community that is easy to join, inclusive, and welcoming. A first-time founding, first drop NFT purchase <span className="font-bold"> will cover you forever.</span> You will remain a member for as long as you continue to share the Temple’s love for equality. Of course, we’d appreciate it very much if you’d consider buying our merch online too. Your purchases help us grow and improve our outreach—and make cool gifts—but are in no way required. We do provide members with a sweet discount though! */}
        We do not charge annual fees for “founding” first-drop members! We will charge an annual fee for subsequent memberships that enable us to maintain the functioning of the Temple. We want a community that is easy to join, inclusive, and welcoming. Membership from the <span className="font-bold">first NFT drop will cover you forever.</span> You will remain a member for as long as you continue to share the Temple’s love for equality. Of course, we’d appreciate it very much if you’d consider buying our merch online too. Your purchases help us grow and improve our outreach—and make cool gifts—but are in no way required. We do provide members with free shipping and special discounts, though!
      <br /><br /><span className="font-bold">
      Mint details:
      </span><br />
      Our initial drop is small, meant to create a strong, founding group, and consists of 500 NFTs divided into the first two foundational Pillars – “Creation,” and “The Wave.” 
        Price: ___ ETH, 30% of which is tax-deductible (in the US) and will account for your lifetime Temple of the Groovy Eye membership fee and contribution to the “GroovyVerse Building Fund.”
        Founding members will have their names displayed in the Temple for the Grand Opening and archived as part of the Temple’s permanent history.
      </>
    ),
  },
  // {
  //   heading: "Mint details:",
  //   content: (
  //     <> 
  //       Our initial drop is small, meant to create a strong, founding group, and consists of 500 NFTs divided into the first two foundational Pillars – “Creation,” and “The Wave.” 
  //       Price: ___ ETH, 30% of which is tax-deductible (in the US) and will account for your lifetime Temple of the Groovy Eye membership fee and contribution to the “GroovyVerse Building Fund.”
  //       Founding members will have their names displayed in the Temple for the Grand Opening and archived as part of the Temple’s permanent history.

  //     </>
  //   ),
  // },
  {
    heading: "Why join?",
    content: (
      <>
        Join because we need you! Join because we can do a beautiful thing together! Join to be a legally ordained clergy member and a founding Groovy Eye! Join because you love equality and want a meaningful side-hustle. Let’s start something wonderful together.
      </>
    ),
  },
  {
    heading: "Why is this important? ",
    content: (
      <>
        Marriages, commitment ceremonies, and hand-fastings are important to the Temple because we know that equality begins at home. Equality is love’s natural bedfellow, and relationships anchored in equality model that respect and love to the world; and when the commitment to equality is included in the union, a strong foundation is mindfully laid for society. As an ordained Groovy Eye, you can include our (or your own) statement of equality in every celebration of a love commitment. 
<br /><br />
A broad foundation of equality in the home is central to our lives, opens eyes and minds and reaches out to broader relationships and organizations. It makes the Temple’s quest for Equality in Our Lifetime achievable, one love-match at a time. This is how we do it. This is how love wins.
      </>
    ),
  },
  // {
  //   heading: "What you get:",
  //   content: (
  //     <>
  //       A lot! The purchase of an NFT gets you a <span className="font-bold">lifetime membership!</span>
  //       Plus:<br/>
  //       <span className="font-bold">-You get a beautiful piece of original NFT photographic art,</span> created for the Temple of the Groovy Eye by an American woman artist, which you may display proudly, gift, collect, trade, and print for personal use.
  //       <br /><br />
  //       <span className="font-bold">-A Temple of the Groovy Eye certificate of ordination.</span> Members attest to their sincerely held belief in equality, provide contact information – and that’s it! You’re ordained! Your Temple certificate serves as proof of your credentials!
  //       <br /><br />
  //       <span className="font-bold">-A very groovy instant side-hustle – or main hustle!</span> This is not only fun, and an opportunity to speak out on behalf of love and equality, but an instant money-maker! The Temple will maintain a directory of ordained persons (with your consent) where people who want a Groovy Eye wedding, or other life-event ceremony, can find you.
  //       <br /><br />
  //       <span className="font-bold">-You’ll get a Temple of the Groovy Eye “clergy” parking pass,</span> to allow parking in spots reserved for “clergy” (that’s you!) near churches and other places of worship where you may be officiating a ceremony.
  //       <br /><br />
  //       <span className="font-bold">-You’ll get a Temple press pass.</span> Knowledge is power. We want to hear and learn from you and create a newsletter about Groovy Eyes everywhere. We want to know what’s going on around the world so we can work together. Use your press pass to cover events of interest to the Temple and submit your work for consideration to the GroovyVerse blog or newsletter. We want to hear from you!
  //       <br /><br />
  //       <span className="font-bold">-You will be able to get published!</span> Members can submit their own writing and artwork for consideration in our blog, newsletter, and gallery. Share your work with the Temple of the Groovy Eye community and describe your own personal journey of self-discovery. We want to know!
  //       <br /><br />
  //       <span className="font-bold">-You get a day off!</span> The Temple of the Groovy Eye has named state and federal general election days as our religious holidays! If your employer gives you time off for religious holidays, you can take state and federal general Election Days off to engage in the sacred activity of voting to promote equality.
  //       <br /><br />
  //       <span className="font-bold">-You get a discount!</span> The Temple funds itself through the sale of Temple art. Once you’ve purchased your NFT, you never need to buy another thing from us to retain your membership. We encourage you, however, to shop at our Temple for cool merch. It helps us grow and improve our outreach. We appreciate your support so much we’ll give a sweet discount to all NFT holders.
  //       <br /><br />
  //       <span className="font-bold">-You get equality!</span> If we all do our part we can make it happen!
  //     </>
  //   ),
  // },



];

export default function FAQsSection() {
  return (
    <Accordion
      type="single"
      collapsible
      className="space-y-[10px] px-[20px] lg:px-[120px] w-full"
    >
      {faqsList.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`faq-${index}`}
          className="px-[14px] py-[14px] md:py-[20px] md:px-6 bg-white/20 rounded-[40px] data-[state=open]:rounded-[30px] w-full"
        >
          <AccordionTrigger className="font-normal data-[state=open]:font-bold">
            <span className="w-full text-start">{faq.heading}</span>
          </AccordionTrigger>
          <AccordionContent className="text-xs">{faq.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
