import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
import buildLogo from '../../public/buildmastershub.png';
import Image from "next/image";
export default function App() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"          
          src={buildLogo}
          width={400}
        />
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Full stack web app project that aims to create a platform for construction workers and foreman to showcase their skills and connect with potential clients</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/CSaguinsin/BuildMastersHub"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
