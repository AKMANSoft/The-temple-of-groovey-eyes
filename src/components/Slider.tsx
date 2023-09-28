import { cn } from "@/lib/utils";
import { motion, useTransform, useSpring, useScroll } from "framer-motion";
import { useRef } from "react";

const images = [
	"/icons/surrender3.jpg",
	"/icons/surrender.jpg",
	"/icons/surrender2.jpg",
	"/icons/surrender.jpg",
	"/icons/surrender2.jpg",
	"/icons/surrender.jppg",
];

function Slider() {
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const ghostRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
	});
	const transform = useTransform(scrollYProgress, (value) => {
		return (
			(value - 1) * (1500 * 0.5)
			// ((containerRef?.current?.scrollWidth ?? window.innerWidth) * 0.5)
			// (scrollRef.current
			//   ? scrollRef.current.scrollWidth - (window.innerWidth - 50)
			//   : window.innerWidth)
		);
	});
	// const transform = useTransform(
	//   scrollYProgress,
	//   [0, 1],
	//   [0, -scrollRange + viewportW]
	// );
	const physics = { stiffness: 80, damping: 30 };
	const spring = useSpring(transform, physics);

	return (
		<div
			ref={containerRef}
			className="w-full py-[60px] overflow-x-auto no-scroll-bar relative"
		>
			<motion.div
				ref={scrollRef}
				className={cn("flex w-auto gap-10 px-10")}
				style={{ x: spring }}
			>
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Image ${index + 1}`}
						className="lg:min-w-[512px] lg:min-h-[512px] lg:w-[512px] lg:h-[512px] min-w-[320px] min-h-[320px] w-[320px] h-[320px] rounded-full !aspect-square"
					/>
				))}
			</motion.div>
			{/* <div className="min-h-[1500px]"></div> */}
			<div ref={ghostRef} style={{}} className="ghost" />
		</div>
	);
}

export default Slider;
