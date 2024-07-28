import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
import survefyLogo from '../../public/survefyLogo.png';
import Image from "next/image";
import {Chip} from "@nextui-org/react";
export default function App() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"          
          src={survefyLogo}
          width={400}
        />
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Survefy helps you gather user feedback to shape products users love!</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <div className="space-x-5">
        <Link
          isExternal
          showAnchorIcon
          href="https://survefy.website/">
          https://survefy.website
        </Link>

        <Link
          showAnchorIcon
          href="/projects/survefy">
          View Case Study
        </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
