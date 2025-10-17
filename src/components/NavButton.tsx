import { LucideIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type props = {
  icon: LucideIcon;
  label: string;
  href?: string;
};

const NavButton = ({ icon: Icon, label, href }: props) => {
  return (
    <Button variant={"ghost"} size={"icon"} aria-label={label} title={label} className="rounded-full">
      {href? (
        <Link href={href}>
          <Icon></Icon>
        </Link>
      ):(
        <Icon></Icon>
      )}
    </Button>
  );
};

export default NavButton;
