import Image from "next/image";
import ButtonCustom from "./ui/button-custom";
import teamImageData from "./data/teamimage";
function TeamImage({
  src,
  alt,
  name,
  position,
}: {
  src: string;
  alt: string;
  name: string;
  position: string;
}) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative h-[280px] w-[250px] overflow-hidden rounded-xl">
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="relative bottom-7 flex flex-col items-center justify-center rounded-lg bg-white px-7 py-3 font-circularstdnormal text-slate-700 shadow-md">
        <h1 className="text-md font-circularstd">{name}</h1>
        <p className="text-sm text-slate-400">{position}</p>
      </div>
    </div>
  );
}
function Team() {
  return (
    <div className="flex h-[500px] bg-users-primary px-40 font-circularstdnormal text-lg">
      <div className="flex flex-col justify-center gap-2">
        <h1 className="font-circularstd text-5xl">Our team</h1>
        <p className="mb-10 text-slate-500">
          We need talented, passionate people to the changing world
        </p>
        <ButtonCustom className="w-[70%] rounded-xl bg-card-primary py-6 text-lg text-white">
          See all members
        </ButtonCustom>
      </div>
      <div className="flex w-[75%] items-center justify-evenly gap-5">
        {teamImageData.map((image, index) => (
          <TeamImage key={index} {...image} />
        ))}
      </div>
    </div>
  );
}
export default Team;
