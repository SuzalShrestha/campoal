"use client";
import React from "react";
import MaxWidth from "./shared/css-reuse";
import Link from "next/link";
import Image from "next/image";
import { Search, SquarePen, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { navLinks } from "./data/navlinks";
import ButtonCustom from "./ui/button-custom";
function Logo() {
  return (
    <div className="flex items-center justify-between">
      <Link href={"/"} className="mr-8">
        <Image
          src="/logos/campoal-logo.svg"
          alt="Campoal Logo"
          width={200}
          height={80}
        />
      </Link>
      <div className="flex items-center justify-between">
        <Button
          variant={"outline"}
          className="flex items-center justify-center gap-1 rounded-full text-slate-500"
        >
          <Globe height={15} />
          Global
        </Button>
      </div>
    </div>
  );
}
function NavButtons() {
  return (
    <div className="ml-10 flex gap-5">
      <ButtonCustom className="flex items-center justify-between gap-2 rounded-xl bg-nav-primary">
        <SquarePen />
        Start a Campaign
      </ButtonCustom>
      <div className="flex gap-0">
        <ButtonCustom className="rounded-xl rounded-r-none border-r-0 bg-nav-secondary">
          Sign up
        </ButtonCustom>
        <ButtonCustom className="rounded-xl rounded-l-none border-l-0 bg-nav-primary">
          Sign in
        </ButtonCustom>
      </div>
    </div>
  );
}
function NavLinksMapped() {
  return navLinks.map((link) => (
    <Link href={link.url} key={link.url}>
      {link.name}
    </Link>
  ));
}
function NavLinks() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center">
        <Search height={15}></Search>
        Search
      </div>
      <NavLinksMapped />
    </div>
  );
}
function Navbar() {
  return (
    <MaxWidth>
      <nav className="mx-3 flex h-[75px] items-center justify-between gap-5 py-3 text-sm font-bold text-slate-600">
        <Logo />
        <NavLinks />
        <NavButtons />
      </nav>
    </MaxWidth>
  );
}
export default Navbar;
