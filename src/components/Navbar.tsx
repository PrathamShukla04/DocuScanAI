"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 left-1/2 -translate-x-1/2 w-2xl z-50", className)}>
      <Menu setActive={setActive}>
        <Link href="/" passHref>
          <div>
            <MenuItem setActive={setActive} active={active} item="Home" />
          </div>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advance Composition</HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>

        <Link href="/contact" passHref>
          <div>
            <MenuItem setActive={setActive} active={active} item="Contact Us" />
          </div>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
