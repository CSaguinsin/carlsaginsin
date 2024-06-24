import Image from "next/image";
import Navbar from './navbar';
import Me from '../../public/Me.jpg';
import Aboutme from '../../public/aboutMe.png'
import {Chip} from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export default function Home() {
  return (
<>
<section className="flex mx-[2rem]">
<div className="max-w-[1087px] justify-center items-center mx-auto pt-[5rem]">
    <Chip color="success" variant="dot">Open for works!</Chip>
      <h1 className="text-white font-sans  font-bold pt-5 text-[20px]">
        Hi👋, I’m Carl Saginsin
      </h1>
      <h1 className="text-white font-sans  font-bold text-[50px] w-[655px]">
        Full Stack Developer passionate with building software solutions
      </h1>
      <Link color="foreground" href="/socials">
      <p className="font-bold pt-5 text-[20px]">Say Hi!👋</p>
      </Link>
</div>

<div className="pt-[5rem]">
    <Image src={Me} alt="pic" className="h-[60rem] w-full"/>
</div>
</section>
</>
  );
}

