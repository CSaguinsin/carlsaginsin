import React from "react";
import Image from "next/image";
import pocketLogo from '../../public/pocketLogo.jpg'
export default function App() {
  return (
    <Image
      width={300}
      height={300}
      className="rounded-lg"
      alt="NextUI hero Image"
      src={pocketLogo}
    />
  );
}

