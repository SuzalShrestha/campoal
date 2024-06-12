import Image from "next/image";
import Link from "next/link";
function Logo() {
  return (
    <div className="col-span-5 mt-20 flex items-center justify-between py-5">
      <h1>&copy; 2021 Campoal. Powered by Conikal LLC</h1>
      <div className="flex w-[15%] justify-between">
        <Link
          href="https://facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex items-center justify-center gap-5 rounded-full bg-white px-3 py-2">
            <Image
              src={"/logos/facebook.svg"}
              width={10}
              height={10}
              alt="youtube"
            />
          </div>
        </Link>
        <Link href="https://x.com" rel="noopener noreferrer" target="_blank">
          <div className="flex items-center justify-center gap-5 rounded-full bg-white p-2">
            <Image
              src={"/logos/twitter.svg"}
              width={15}
              height={15}
              alt="youtube"
            />
          </div>
        </Link>
        <Link
          href="https://youtube.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex items-center justify-center gap-5 rounded-full bg-white p-2">
            <Image
              src={"/logos/youtube.svg"}
              width={15}
              height={15}
              alt="youtube"
            />
          </div>
        </Link>
        <Link
          href="https://medium.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex items-center justify-center gap-5 rounded-full bg-white p-2">
            <Image
              src={"/logos/medium.svg"}
              width={15}
              height={15}
              alt="youtube"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
function CompanyDetails() {
  return (
    <>
      <div className="col-span-2 mt-10 flex flex-col pr-20">
        <h1 className="mb-7 font-circularstd text-[#EFECE7]">
          What is Campoal?
        </h1>
        <p>
          Campoal is a completed Wordpress theme used to create Petition
          Platform, Foundation and Non-profit website where anyone can start a
          social movement, collect supporters and fundraising to change
          something in society.
        </p>
        <div className="flex items-center justify-between">
          <Image src={"/logos/gdpr.png"} width={80} height={50} alt="gdpr" />
          <Image
            src={"/logos/norton.png"}
            width={80}
            height={20}
            alt="norton"
          />
          <Image
            src={"/logos/stripe.svg"}
            width={60}
            height={50}
            alt="stripe"
          />
          <Image
            src={"/logos/paypal.svg"}
            width={90}
            height={70}
            alt="paypal"
          />
        </div>
      </div>
      <div className="col-span-1 mt-10 flex flex-col gap-7">
        <h1 className="font-circularstd text-[#EFECE7]">Company</h1>
        <ul className="flex flex-col gap-2">
          <li>About</li>
          <li>Contact</li>
          <li>Careers</li>
          <li>Impact</li>
          <li>Testimonials</li>
          <li>Team members</li>
        </ul>
      </div>
      <div className="col-span-1 mt-10 flex flex-col gap-7">
        <h1 className="font-circularstd text-[#EFECE7]">Resource</h1>
        <ul className="flex flex-col gap-2">
          <li>Guide</li>
          <li>FAQs</li>
          <li>Press kets</li>
          <li>Compliance</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="col-span-1 mt-10 flex flex-col gap-7">
        <h1 className="font-circularstd text-[#EFECE7]">Community</h1>
        <ul className="flex flex-col gap-2">
          <li>Shop</li>
          <li>Blog</li>
          <li>Forum</li>
          <li>Membership</li>
          <li>Help Center</li>
          <li>Support Desk</li>
        </ul>
      </div>
    </>
  );
}
function Footer() {
  return (
    <footer className="mt-40 grid grid-cols-5 bg-[#22140C] px-40 pt-10 font-circularstdnormal text-[#DCD7D2]">
      <CompanyDetails />
      <Logo />
    </footer>
  );
}

export default Footer;
