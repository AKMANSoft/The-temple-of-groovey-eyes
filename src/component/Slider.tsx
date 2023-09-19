
function Slider() {
  const images = [
    "/icons/surrender3.jpg",
    "/icons/surrender.jpg",
    "/icons/surrender2.jpg",
    "/icons/surrender.jppg"
  ];



  return (
    <div className="w-full mt-[60px]  relative overflow-x-hidden ">
      <div
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
      </div>
    
    </div>
  );
}

export default Slider;




