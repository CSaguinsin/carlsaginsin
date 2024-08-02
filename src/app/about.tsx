import Image from "next/image";
import Image1 from '../../public/image1.jpg';
import Image2 from '../../public/image2.jpg';
import Image3 from '../../public/image3.jpg'
function about() {
  return (
   <>
        <section className="posts">
          <ul className="space-y-2 w-[32.5rem]">
                <h1 className="text-[2rem]">Hi there 👋</h1>
                <p>
                    Im Carl 👨‍💻, 22 years old Full Stack Software Developer from 📍 1700.
                    I love to build softwares 🐱‍💻,  Besides programming I love to drive, especially in the night either using a car 🚗 or a motor 🛵
                </p>
          </ul>
            <div className="pt-10 pb-10 flex flex-row">
                    <Image src={Image1} alt="image1" className="h-[20rem] w-[15rem]"/>
                    <Image src={Image2} alt="image1" className="h-[20rem] w-full"/>
                    <Image src={Image3} alt="image1" className="h-[20rem] w-[15rem]"/>
            </div>
        </section>
   </>
  )
}

export default about