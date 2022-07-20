import { ParallaxLayer } from "@react-spring/parallax";

export const Slide1Title = () => {
  return (
    <ParallaxLayer offset={0} speed={2}>
      <div className={`w-full h-full relative grid grid-cols-10 `} style={{}}>
        <div className="z-10 flex flex-col items-center justify-center col-span-10 gap-8 p-8">
          <h1
            className={`text-gray-50 text-8xl font-black drop-shadow-md bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent font-gothic uppercase`}
          >
            Grey Ghost Division
          </h1>
          <div className={`w-min flex flex-row gap-4 opacity-0 pointer-events-none`}>
            <button
              className={`bg-yellow-600 hover:bg-yellow-500 transition-all w-max p-6 py-3 rounded-full text-white font-bold uppercase font-ubuntu`}
            >
              Member/Parent
            </button>
            <button
              className={`outline outline-gray-50 transition-all hover:bg-gray-50/30 w-max p-6 py-3 rounded-full text-white font-bold uppercase font-wsans`}
            >
              Prospective Cadet
            </button>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};
