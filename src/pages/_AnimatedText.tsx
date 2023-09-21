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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="text-center h-[168px] flex relative w-[180px] md:w-[336px] items-center justify-center">
      {
        <motion.p
          className={cn(
            `md:text-[50px] text-secondary w-[180px] md:w-[336px] md:leading-[56px]`,
            "text-2xl left-[24%] md:left-0 font-normal uppercase"
          )}
          animate={{
            scale: [0, 1, 0],
            translateX: [-80, 0, -80],
            translateY: [65, 0, 65],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            times: [0, 0.6, 1],
            repeat: Infinity,
            repeatDelay: 1,
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
