import Insta from '../../../public/instagram.png';
import Github from '../../../public/github.png';
import Image from "next/image";
import {Divider} from "@nextui-org/divider";
import { Link } from "@nextui-org/react";
export default function Page() {
    return (
<section className="flex mx-[2rem]">
<div className="max-w-[1087px] justify-center items-center mx-auto pt-[5rem]">
      <h1 className="text-white font-sans  font-bold text-[50px] w-[655px]">
      👋🏻
      Say hi 
      </h1>
      <h1 className="text-white pt-[24px] font-semibold text-[24px] w-[655px]">
        Socials
      </h1>
      <Divider className="my-4" />
      <Link color="foreground" href="https://www.instagram.com/carl_sgnsn/" target='_blank'>
      <div className='flex gap-5'>
            <Image src={Insta} alt='insta' className='h-8 w-8' />
            <p>Instagram</p>
      </div>
      </Link>

      <div className='flex pt-5 gap-5'>
      <Link color="foreground" href="https://github.com/CSaguinsin" target='_blank'>
      <div className='flex space-x-5'>
        <Image src={Github} alt='insta' className='h-8 w-8' />
        <p>Github</p>
      </div>
        </Link>
      </div>
      
</div>
</section>
    )
  }