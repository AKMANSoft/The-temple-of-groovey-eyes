import { cn } from '@/lib/utils';
import { useRef } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';

function Slider() {
  const images = [
    "/icons/surrender3.jpg",
    "/icons/surrender.jpg",
    "/icons/surrender2.jpg",
    "/icons/surrender.jppg",
    "/icons/surrender3.jpg",
    "/icons/surrender.jpg",
    "/icons/surrender2.jpg",
    "/icons/surrender.jppg",
  ];

  const containerRef = useRef(null)

  return (
    <div  className="w-full mt-[60px]  relative  ">
      {
        containerRef &&
        <ReactVisibilitySensor key={"sasasasasa"} >
          {({ isVisible }: { isVisible: boolean }) => {
            console.log(isVisible)
            return (
              <div
                className={cn(
                  "flex w-full gap-10 ",
                  isVisible && "animate-scroll overflow-hidden"

                )}

              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="lg:w-[512px] lg:h-[512px] w-[320px] h-[320px]  rounded-full aspect-square"
                  />
                ))}
              </div>);
          }}
        </ReactVisibilitySensor>
      }


    </div>
  );
}

export default Slider;




/* <div
className="flex w-full gap-10 animate-scroll"

>
  {images.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Image ${index + 1}`}
      className="lg:w-[512px] lg:h-[512px] w-[320px] h-[320px]  rounded-full aspect-square"
    />
  ))}
</div> */