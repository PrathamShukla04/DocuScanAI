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
        {/* Home Link */}
        <Link href="/" passHref>
          <div>
            <MenuItem setActive={setActive} active={active} item="Home" />
          </div>
        </Link>

        {/* Dropdown Menu */}
        <MenuItem setActive={setActive} active={active} item="Explore">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/upload">📄 Upload PDF</HoveredLink>
            <HoveredLink href="/results">📈 Results</HoveredLink>
            <HoveredLink href="/about">ℹ️ About</HoveredLink>
            <HoveredLink href="/techstack">🛠️ Tech Stack</HoveredLink>

          </div>
        </MenuItem>

        {/* Contact */}
        <Link href="/contact" passHref>
          <div>
            <MenuItem setActive={setActive} active={active} item="Contact Us" />
          </div>
        </Link>

        {/* Auth */}
        <Link href="/signin" passHref>
          <div>
            <MenuItem setActive={setActive} active={active} item="Sign In / Sign Up" />
          </div>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
