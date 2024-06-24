import React from "react";
import Image from 'next/image';
import Logo from '../../public/LOGO.png';

export const AcmeLogo = () => (
  <Image src={Logo} alt="Acme Logo" className="h-8 w-8" />
);
