import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export const FirstSection = () => {
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 760
      ? "public/assets/videos/smallHero.mp4"
      : "public/assets/videos/hero.mp4"
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 760) {
        setvideoSrc("public/assets/videos/smallHero.mp4");
      } else {
        setvideoSrc("public/assets/videos/hero.mp4");
      }
    });
  }, []);

  useGSAP(() => {
    gsap.to(".iphone", {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 1,
    });
    gsap.to(".buy", {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 1,
    });
  }, []);
  return (
    <>
      <div className="min-h-[50vh]  flex items-center flex-col ">
        <h1 className="iphone text-3xl font-semibold text-zinc-50 mt-10 translate-x-5 opacity-0 md:text-4xl md:mt-15  ">
          iPHONE 16 Pro
        </h1>
        <p className="iphone text-xl tracking-[-0.25] text-zinc-50 translate-x-10 mt-1 opacity-0 md:text-m ">
          Build for Apple Intelligence
        </p>
        <div className="mt-5 md:mt-20 w-100 md:w-fit lg:w-[90vw]">
          <video
            src={videoSrc}
            className="pointer-events-none"
            autoPlay
            muted
          ></video>
        </div>
        <div className="flex flex-col items-center">
          <button className="buy px-6 py-2 bg-blue-600 text-white rounded-2xl hover:bg-transparent hover:border-1 translate-x-10 opacity-0">
            Buy
          </button>
          <p className=" iphone text-l tracking-[-0.25] text-zinc-500 translate-x-10 mt-3 opacity-0 md:text-s">
            Build for Apple Intelligence
          </p>
        </div>
      </div>
    </>
  );
};
