import Image from "next/image";
function Voice() {
  return (
    <div className="py-30 grid grid-cols-1 grid-rows-2 items-center justify-center bg-[#FFFCF7] px-20">
      <div className="justify-centers flex flex-col gap-5 px-20">
        <p className="mb-5 font-circularstdblack text-6xl text-slate-700">
          We believe in your voice
        </p>
        <div className="text-md font-circularstd-normal grid grid-cols-2 gap-20 font-medium leading-7 tracking-widest text-slate-500">
          <p>
            We&apos;re in here with a simple and clear mission is building a
            powerful platform for the change, helping people around the world to
            raise their voices, collection signatures and contribute to the
            world.
          </p>
          <p>
            At Conikal, We believe that the power to change the world is in all
            human beings, we also believe that when everyone speaks out the
            problem of society and action together, the world will become a
            better place.
          </p>
        </div>
      </div>
      <div className="relative row-span-1 ml-20 flex h-[400px] w-[90%] flex-row items-center justify-center overflow-hidden">
        <Image
          className="rounded-xl"
          src={"/voice.jpg"}
          alt="voice"
          objectFit="cover"
          layout="fill"
          objectPosition="center"
        />
      </div>
    </div>
  );
}
export default Voice;
