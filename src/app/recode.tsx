import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
import recodeLogo from '../../public/goodLogo.png';
import Image from "next/image";
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
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/CSaguinsin/ReCode"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
