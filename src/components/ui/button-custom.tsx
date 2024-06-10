import { Button } from "./button";
import React from "react";
function ButtonCustom({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      variant={"outline"}
      className={`${className} px-8 font-bold text-white`}
    >
      {children}
    </Button>
  );
}
export default ButtonCustom;
