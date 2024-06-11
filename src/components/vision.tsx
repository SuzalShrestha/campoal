import Image from "next/image";

function Vision() {
  return (
    <div className="flex flex-col items-center gap-5 bg-hero-primary py-40">
      <h1 className="font-circularstdblack text-7xl text-slate-700">
        Our vision
      </h1>
      <p className="font-circularstdnormal text-2xl text-slate-500">
        Our vision is to be the best petition platform in the world.
      </p>
      <Image src={"/vision.png"} alt={"vision"} width={1200} height={700} />
    </div>
  );
}
export default Vision;
