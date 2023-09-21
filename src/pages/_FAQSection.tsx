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
        We perceive one another from an interior place, from the core belief
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
        Welcome home.
      </>
    ),
  },
  {
    heading: "How did you come up with the idea for your art?",
    content: (
      <>
        The first two series of art I’ve created for the Temple NFTs –
        “Creation” and “The Wave” – tell a new kind of science-based creation
        story depicting a singular explosive event from which all biological
        life, all races and genders, originate equally––the simple truth from
        which every person’s natural rights are derived and guaranteed. As a
        lifelong feminist, I put the female form in the center to reclaim her
        rightful place in the act and process of creation. Each image is a
        single-capture photograph, not digitally or AI created art. Photography
        is art using a scientific instrument that allows you to “paint” with
        electromagnetic radiation. What a turn on! Each and every photo was set
        up and taken using proprietary lighting systems and really trippy studio
        designs. I created this art for you, and I hope you love it.
      </>
    ),
  },
  {
    heading: "What does Groovy Eye mean?",
    content: (
      <>
        We perceive one another from an interior place, from the core belief
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
        Welcome home.
      </>
    ),
  },
  {
    heading: "How did you come up with the idea for your art?",
    content: (
      <>
        The first two series of art I’ve created for the Temple NFTs –
        “Creation” and “The Wave” – tell a new kind of science-based creation
        story depicting a singular explosive event from which all biological
        life, all races and genders, originate equally––the simple truth from
        which every person’s natural rights are derived and guaranteed. As a
        lifelong feminist, I put the female form in the center to reclaim her
        rightful place in the act and process of creation. Each image is a
        single-capture photograph, not digitally or AI created art. Photography
        is art using a scientific instrument that allows you to “paint” with
        electromagnetic radiation. What a turn on! Each and every photo was set
        up and taken using proprietary lighting systems and really trippy studio
        designs. I created this art for you, and I hope you love it.
      </>
    ),
  },
  {
    heading: "What does Groovy Eye mean?",
    content: (
      <>
        We perceive one another from an interior place, from the core belief
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
        Welcome home.
      </>
    ),
  },
  {
    heading: "How did you come up with the idea for your art?",
    content: (
      <>
        The first two series of art I’ve created for the Temple NFTs –
        “Creation” and “The Wave” – tell a new kind of science-based creation
        story depicting a singular explosive event from which all biological
        life, all races and genders, originate equally––the simple truth from
        which every person’s natural rights are derived and guaranteed. As a
        lifelong feminist, I put the female form in the center to reclaim her
        rightful place in the act and process of creation. Each image is a
        single-capture photograph, not digitally or AI created art. Photography
        is art using a scientific instrument that allows you to “paint” with
        electromagnetic radiation. What a turn on! Each and every photo was set
        up and taken using proprietary lighting systems and really trippy studio
        designs. I created this art for you, and I hope you love it.
      </>
    ),
  },
  {
    heading: "What does Groovy Eye mean?",
    content: (
      <>
        We perceive one another from an interior place, from the core belief
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
        Welcome home.
      </>
    ),
  },
  {
    heading: "How did you come up with the idea for your art?",
    content: (
      <>
        The first two series of art I’ve created for the Temple NFTs –
        “Creation” and “The Wave” – tell a new kind of science-based creation
        story depicting a singular explosive event from which all biological
        life, all races and genders, originate equally––the simple truth from
        which every person’s natural rights are derived and guaranteed. As a
        lifelong feminist, I put the female form in the center to reclaim her
        rightful place in the act and process of creation. Each image is a
        single-capture photograph, not digitally or AI created art. Photography
        is art using a scientific instrument that allows you to “paint” with
        electromagnetic radiation. What a turn on! Each and every photo was set
        up and taken using proprietary lighting systems and really trippy studio
        designs. I created this art for you, and I hope you love it.
      </>
    ),
  },
  {
    heading: "What does Groovy Eye mean?",
    content: (
      <>
        We perceive one another from an interior place, from the core belief
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
        Welcome home.
      </>
    ),
  },
  {
    heading: "How did you come up with the idea for your art?",
    content: (
      <>
        The first two series of art I’ve created for the Temple NFTs –
        “Creation” and “The Wave” – tell a new kind of science-based creation
        story depicting a singular explosive event from which all biological
        life, all races and genders, originate equally––the simple truth from
        which every person’s natural rights are derived and guaranteed. As a
        lifelong feminist, I put the female form in the center to reclaim her
        rightful place in the act and process of creation. Each image is a
        single-capture photograph, not digitally or AI created art. Photography
        is art using a scientific instrument that allows you to “paint” with
        electromagnetic radiation. What a turn on! Each and every photo was set
        up and taken using proprietary lighting systems and really trippy studio
        designs. I created this art for you, and I hope you love it.
      </>
    ),
  },
  {
    heading: "What does Groovy Eye mean?",
    content: (
      <>
        We perceive one another from an interior place, from the core belief
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
        Welcome home.
      </>
    ),
  },
  {
    heading: "How did you come up with the idea for your art?",
    content: (
      <>
        The first two series of art I’ve created for the Temple NFTs –
        “Creation” and “The Wave” – tell a new kind of science-based creation
        story depicting a singular explosive event from which all biological
        life, all races and genders, originate equally––the simple truth from
        which every person’s natural rights are derived and guaranteed. As a
        lifelong feminist, I put the female form in the center to reclaim her
        rightful place in the act and process of creation. Each image is a
        single-capture photograph, not digitally or AI created art. Photography
        is art using a scientific instrument that allows you to “paint” with
        electromagnetic radiation. What a turn on! Each and every photo was set
        up and taken using proprietary lighting systems and really trippy studio
        designs. I created this art for you, and I hope you love it.
      </>
    ),
  },
  {
    heading: "What does Groovy Eye mean?",
    content: (
      <>
        We perceive one another from an interior place, from the core belief
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
        Welcome home.
      </>
    ),
  },
  {
    heading: "How did you come up with the idea for your art?",
    content: (
      <>
        The first two series of art I’ve created for the Temple NFTs –
        “Creation” and “The Wave” – tell a new kind of science-based creation
        story depicting a singular explosive event from which all biological
        life, all races and genders, originate equally––the simple truth from
        which every person’s natural rights are derived and guaranteed. As a
        lifelong feminist, I put the female form in the center to reclaim her
        rightful place in the act and process of creation. Each image is a
        single-capture photograph, not digitally or AI created art. Photography
        is art using a scientific instrument that allows you to “paint” with
        electromagnetic radiation. What a turn on! Each and every photo was set
        up and taken using proprietary lighting systems and really trippy studio
        designs. I created this art for you, and I hope you love it.
      </>
    ),
  },
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
          className="p-[30px] py-[14px] md:py-[22px] md:px-6 bg-white/20 w-full"
        >
          <AccordionTrigger className="font-normal data-[state=open]:font-bold">
            <span>{faq.heading}</span>
          </AccordionTrigger>
          <AccordionContent className="">{faq.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
