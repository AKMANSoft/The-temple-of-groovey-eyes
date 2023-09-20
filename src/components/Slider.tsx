
import { cn } from '@/lib/utils';
import { motion, useTransform, useViewportScroll, useSpring } from 'framer-motion'
import {  useLayoutEffect, useRef, useState } from 'react';


const images = [
  "/icons/surrender3.jpg",
  "/icons/surrender.jpg",
  "/icons/surrender2.jpg",
  "/icons/surrender.jppg",
  "/icons/surrender.jpg",
  "/icons/surrender2.jpg",
  "/icons/surrender.jppg",
];

function Slider(props: { containerRef: React.RefObject<HTMLDivElement> }) {
  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current?.scrollWidth)
  }, [scrollRef])


  const { scrollYProgress } = useViewportScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <div className="w-full mt-[60px] overflow-x-hidden overflow-y-auto h-[512px] relative">
      <motion.div
        ref={scrollRef}
        className={cn(
          "flex w-full gap-10 px-10 sticky top-0",
        )}
        style={{ translateX: spring }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="lg:w-[512px] lg:h-[512px] w-[320px] h-[320px]  rounded-full aspect-square "
          />
        ))}
      </motion.div>
      <div className='min-h-[1500px]'>

      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />

    </div>
  );
}

export default Slider;




