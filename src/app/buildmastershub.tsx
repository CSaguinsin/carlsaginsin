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
      </CardBody>
      <Divider/>
      <CardFooter>
      <div className="space-x-5">
        <Link
          isExternal
          showAnchorIcon
          href="https://buildmastershub.web.app/"
        >
          buildmastershub.web.
        </Link>

        <Link
          isExternal
          showAnchorIcon
          href="https://buildmastershub.web.app/"
        >
          View Case Study
        </Link>
      </div>

      </CardFooter>
      </Card>
  );
}
