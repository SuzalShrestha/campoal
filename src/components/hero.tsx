import Image from "next/image";
import heroText from "./data/herotext";
function HeroText() {
  return (
    <>
      <h1 className="mb-5 border-0 text-7xl">{heroText.title}</h1>
      <p className="font-circularstdnormal mb-10 w-[62%] text-center text-lg text-slate-500">
        {heroText.description}
      </p>
    </>
  );
}
function Hero() {
  return (
    <div className="font-circularstd bg-hero-primary flex flex-col items-center justify-center py-[90px]">
      <HeroText />
      <Image
        className="border-hero-primary border-0"
        src={"/hero.jpg"}
        alt={"hero"}
        width={840}
        height={700}
      />
    </div>
  );
}
export default Hero;
