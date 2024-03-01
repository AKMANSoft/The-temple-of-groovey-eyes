import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const texts = [
  "There's A New Religion In Town",
  "WHERE ALL PEOPLE ARE CREATED EQUAL",
  "AND YOUR NATURAL RIGHTS ARE SACRED",
  "JOIN US!",
] as const;

export default function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="text-center h-[168px] flex relative w-[180px] md:w-[336px] items-center justify-center">
      {
        <motion.p
          className={cn(
            `md:text-[50px] xl:text-[53.8px] text-secondary w-[180px] md:w-[336px] md:leading-[56px]`,
            "text-2xl font-normal uppercase",
            "mt-28 md:mt-48  lg:mt-[99px] xl:mt-[260px] -ml-0 md:-ml-3 xl:-ml-5"
          )}
          animate={{
            scale: [0, 1, 1, 0],
            // translateX: [translateX, 0, translateX],
            // translateY: [translateY, 0, translateY],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
            repeatType: "loop",
          }}
        >
          {texts[currentIndex]}
        </motion.p>
      }
    </motion.div>
  );
}

// export default function AnimatedText() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 4100);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className="text-center h-[168px] flex relative w-[180px] md:w-[336px] items-center justify-center">
//       {
//         <p
//           className={cn(
//             `md:text-[50px] text-secondary w-[180px] md:w-[336px] md:leading-[56px]`,
//             "text-2xl left-[24%] md:left-0 font-normal uppercase animate-zoom-out-in transition-opacity "
//           )}
//         >
//           {texts[currentIndex]}
//         </p>
//       }
//     </div>
//   );
// }
