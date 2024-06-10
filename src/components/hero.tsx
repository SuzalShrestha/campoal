import Image from "next/image";
import heroText from "./data/herotext";
function HeroText() {
  return (
    <>
      <h1 className="mb-5 border-0 text-7xl">{heroText.title}</h1>
      <p className="mb-10 w-[62%] text-center font-circularstdnormal text-lg text-slate-500">
        {heroText.description}
      </p>
    </>
  );
}
function Hero() {
  return (
    <div className="flex flex-col items-center justify-center bg-hero-primary pt-[90px] font-circularstd">
      <HeroText />
      <Image
        className="border-0 border-hero-primary"
        src={"/hero.jpg"}
        alt={"hero"}
        width={840}
        height={700}
      />
    </div>
  );
}
export default Hero;
