import Image from "next/image";
function Story() {
  return (
    <div className="grid grid-cols-2 bg-users-primary px-40 py-40">
      <div className="flex flex-col gap-5 pr-10 font-circularstdnormal text-lg text-slate-500">
        <h1 className="mb-5 font-circularstd text-6xl text-slate-700">
          Our Story
        </h1>
        <p>
          April 2016 when I was working part-time at a travel agency. At that
          time, there was an environmental problem in my country that made many
          people angry and they created a petition on Change dot org and shared
          it on Facebook. I am very interested in the idea of this website, it
          is really helpful and it has a strong life impact. I wonder why there
          is not such a website in my country? I think every country should have
          such a website and the world should have more than one in the
          community. So I decided to quit my part-time job and start developing
          a platform for social movements.
        </p>
        <p>
          Although I have some experience developing websites on WordPress at my
          company, I still face many challenges to develop and design. I work
          almost 12 hours a day, after 10 months the first version is released.
          I kept improving it over the next 3 years with hundreds of changes and
          new features added.
        </p>
        <p>
          Today, hundreds of websites powered by Campoal are running around the
          world, millions of people are signing to support for the problem they
          care about, starting social movements and making changes to make their
          country a better place. People have used websites to change tax laws
          in France, raise funds to protect animals in Germany, speak out about
          social problems in Turkey, Calls for an end to war in Middle Eastern
          countries Fundraising to help children in Africa and more.{" "}
        </p>
        <p>
          {" "}
          By empowering entrepreneurs and organizations to give people the
          opportunity to talk about their problems, I believe that anyone can
          make the world a better place.{" "}
        </p>
        <p>Long Ha – Founder</p>
      </div>
      <div className="grid grid-cols-2 gap-10 px-5">
        <div className="grid-cols-span flex flex-col gap-10">
          <Image
            className="rounded-xl"
            src="/stories/story-1.webp"
            alt="story-1"
            width={600}
            height={400}
          />
          <Image
            className="rounded-xl"
            src="/stories/story-2.jpg"
            alt="story-2"
            width={600}
            height={400}
          />
        </div>
        <div className="grid-cols-span flex flex-col gap-10 py-40">
          <Image
            className="rounded-xl"
            src="/stories/story-3.png"
            alt="story-3"
            width={600}
            height={400}
          />
          <Image
            className="rounded-xl"
            src="/stories/story-4.jpg"
            alt="story-4"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
export default Story;
