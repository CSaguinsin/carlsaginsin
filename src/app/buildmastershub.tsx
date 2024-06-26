import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
import buildLogo from '../../public/buildmastershub.png';
import Image from "next/image";
import {Chip} from "@nextui-org/react";
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
        <div className="flex space-x-2 pt-2">
            <Chip>TailwindCSS</Chip>
            <Chip>ReactJs</Chip>
            <Chip>Firebase</Chip>
        </div>
      </CardBody>
      <Divider/>
      <div className="flex space-x-2 pt-2">
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://buildmastershub.web.app/"
        >
          buildmastershub.web
        </Link>
      </CardFooter>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="/projects/buildmastershub"
        >
          View Case Study
        </Link>
      </CardFooter>
      </div>
    </Card>
  );
}
