import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo";

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <Link color="foreground" href="/">
        <p className="font-bold text-inherit">Carl Saginsin</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden space-x-8 sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/blogs">
            Blogs
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
