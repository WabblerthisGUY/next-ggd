import { ParallaxLayer } from "@react-spring/parallax";

export const Slide1 = () => {
  return (
    <ParallaxLayer offset={0} speed={1}>
      <div className={`w-full h-full relative grid grid-cols-10 `} style={{}}>
        <div
          className={`absolute w-full h-full top-0 left-0 bg-cover bg-center brightness-100 saturate-50 contrast-100 bg-[url('https://gymhgy.github.io/GGD/img/IMG_9985.jpg')] -scale-x-100`}
        />
        <div className="z-10 flex flex-col items-center justify-center col-span-10 gap-8 p-8 bg-gray-900 bg-opacity-90"></div>
      </div>
    </ParallaxLayer>
  );
};
