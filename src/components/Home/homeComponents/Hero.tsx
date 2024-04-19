import { BiCloudDownload, BiCoffee } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      <div className=" py-10 dark:bg-gradient-to-l from-bgColorsInDark via-[#001f1b] to-bgColorsInDark ">
        <div className=" container grid grid-cols-12 gap-y-10">
          <div className=" sm:col-span-9 col-span-12 flex justify-center items-center">
            <div className=" relative ">
              <img
                src="./pyramid.png"
                alt="pyramin.png"
                className=" absolute -left-24 -top-14 h-20 w-20"
              />
              <h1 className=" lg:text-6xl md:text-5xl text-3xl uppercase font-semibold dark:text-white">
                Ibrahim Khalil
              </h1>
              <p className=" dark:text-white ">MERN Stack Developer</p>
              <div className=" flex gap-2">
                <button className="bg-cyan-500 relative inline-flex group p-2 mt-5 rounded-md hover:ring-1 ring-offset-1 transition-all overflow-hidden dark:hover:drop-shadow-glow ">
                  <span className=" absolute top-0 left-0 w-0 group-hover:w-full h-full -z-1 transition-all duration-500 ease-in-out bg-cyan-400"></span>
                  <span className="flex items-center gap-2 z-10 text-white">
                    <BiCloudDownload size={20} />
                    <span>Resume</span>
                  </span>
                </button>
                <button className=" bg-cyan-500 relative inline-flex group p-2 mt-5 rounded-md hover:ring-1 ring-offset-1 transition-all overflow-hidden dark:hover:drop-shadow-glow ">
                  <span className=" absolute top-0 left-0 w-0 group-hover:w-full h-full -z-1 transition-all duration-500 ease-in-out bg-cyan-400"></span>
                  <span className="flex items-center gap-2 z-10 text-white">
                    <BiCoffee size={20} />
                    <span>Hire me</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className=" sm:col-span-3 col-span-12 flex justify-center items-center dark:text-white sm:order-last order-first ">
            <div className="h-60 sm:h-auto rounded-full border-cyan-400 border overflow-hidden shadow-xl shadow-cyan-400 dark:drop-shadow-glow ">
              <img
                src="./heroimg.png"
                alt="..."
                className=" w-auto h-auto max-h-full "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
