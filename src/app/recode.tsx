import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
import recodeLogo from '../../public/goodLogo.png';
import Image from "next/image";
import {Chip} from "@nextui-org/react";
export default function App() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"          
          src={recodeLogo}
          width={400}
        />
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Platform designed for developers. By providing a centralized hub to compile, store, and reuse code snippets.</p>
        <br />
        <div className="flex space-x-2 pt-2">
            <Chip>TailwindCSS</Chip>
            <Chip>AlpineJs</Chip>
            <Chip>Laravel</Chip>
            <Chip>Livewire</Chip>
        </div>
      </CardBody>
      <Divider/>
      <CardFooter>
        <div className="space-x-5">
        <Link
          isExternal
          showAnchorIcon
          href="https://recode.website/">
          https://recode.website
        </Link>

        <Link
          showAnchorIcon
          href="/projects/recode">
          View Case Study
        </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
