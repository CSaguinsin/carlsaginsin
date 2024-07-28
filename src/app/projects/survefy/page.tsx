import {Chip} from "@nextui-org/react";
import Survefy from '../../../../public/survefyScreen.png';
import codeGraphic from '../../../../public/survefyObjectives.png';
import DesignRecode from '../../../../public/survefyUI.png';
import CodingRecode from '../../../../public/codingRecode.png';
import Image from "next/image";
import Socials from "../../socials/page";
export default function Page() {
  return (
    <>
      <section className="pt-[5rem] px-20 mx-auto max-w-[900px] ">
          <div className="pt-[32px]">
            <Chip color="success" variant="dot">UX Case Study</Chip>
          </div>
          <p className="pt-3 font-bold text-white">Project Duration:</p>
                <p className="font-semibold text-blue-400">June 23 2024 – July 21 2024</p>
          <div className="flex flex-row space-x-10 mx-auto">
              <div className="flex flex-col pt-5">
                <div className="flex-row ">
                  <h1 className="font-bold text-[6rem]">Survefy</h1>
                  <h3 className="text-[1rem] font-sans">Helps you gather user feedback to shape products users love!</h3>
                </div>
                <Image src={Survefy} alt="recode" className="pt-5 h-[25rem] w-[50rem]" />
              </div>
          </div>
      </section>


      <section className="pt-[6rem] px-20 mx-auto max-w-[900px]">
          <div className="flex justify-end pt-[32px]">
            <Chip color="success" variant="dot">Problem Statement</Chip>
          </div>
          <h1 className="text-white font-sans pt-10  font-bold text-[32px] w-[700px]">
          I built Survefy for business owners, developers, and solopreneurs who need a powerful yet easy-to-use feedback collection tool. Survefy enables you to gather valuable user insights effortlessly, helping you build products that truly resonate with your audience. With features like easy survey creation, real-time feedback analysis, and comprehensive CRUD operations, Survefy ensures you can manage your feedback boards efficiently. Plus, with multi-platform support, you can reach your users wherever they are, making it easier than ever to collect and act on feedback to create products people love.   
          </h1>
      </section>  

      <section className="pt-[6rem] px-20 mx-auto max-w-[900px]">
          <div className="pt-[32px]">
            <Chip color="success" variant="dot">Objective & Goals</Chip>
          </div>
          <div className="flex flex-col">
              <h1 className="text-white font-bold text-[20px] pt-10">📌 To provide business owners, developers, and solopreneurs with an intuitive and efficient tool for collecting and analyzing user feedback, enabling them to create products that truly resonate with their audience.</h1>
              <Image src={codeGraphic} alt="recode" className="pt-5 h-[25rem] w-[50rem]" />
          </div>
      </section>

      <section className="pt-[6rem] mx-auto w-[60rem]">
          <h1 className="text-center font-bold text-[3rem]">My Development Process</h1>
          <div className="flex justify-end pt-[32px]">
            <Chip color="success" variant="dot">UI Design Process</Chip>
          </div>
          <div className="flex flex-row space-x-5 pt-5">
              <p> 
              When designing software, I start by visualizing color palettes, fonts, and typography. I adhere to an 8-point grid system for consistent sizing, spacing, and component layout. This ensures that padding, margins, and button heights are always multiples of 8 pixels              
              </p>
              <Image src={DesignRecode} alt="recode" className="pt-2 h-full w-[40rem]" />
          </div>

          <div className="pt-[7rem]">
            <Chip color="success" variant="dot">Coding Process</Chip>
          </div>
          <div className="flex flex-row space-x-5 pt-5">
            <Image src={CodingRecode} alt="recode" className="pt-2 h-full w-[40rem]" />
              <p> 
              Choosing the TALL stack was a deliberate decision to ensure that Survefy embodies the principles of developer-centric design. It’s a reflection of my commitment to building not just a platform but a community where innovation thrives without barriers.Laravel was a natural choice for the backbone of Survefy. Its expressive syntax and robust features not only accelerated development but also provided a stable foundation for our platform to scale.   
              </p>
          </div>
      </section>

      <section className="pt-[6rem] px-20 mx-auto max-w-[700px]">
          <div className="flex justify-end pt-[32px]">
            <Chip color="success" variant="dot">Tech Stack</Chip>
          </div>
          <div className="flex flex-row space-x-5 pt-5">
                      <div className="bg-white drop-shadow-md w-[24]  p-5 mb-5 rounded-md">
                          <div className="h-14 w-14">
                              <svg viewBox="0 0 128 128">
                              <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"></path>
                              </svg>
                          </div>
                      </div>
                      <div className="bg-white drop-shadow-md w-[24]  p-5 mb-5  rounded-md">
                          <div className="h-14 w-14">
                          <svg viewBox="0 0 128 128">
                            <path fill="#77c1d2" fill-rule="evenodd" d="M98.444 35.562 126 62.997 98.444 90.432 70.889 62.997z" clip-rule="evenodd"></path><path fill="#2d3441" fill-rule="evenodd" d="m29.556 35.562 57.126 56.876H31.571L2 62.997z" clip-rule="evenodd"></path>
                          </svg>
                          </div>
                      </div>

                      <div className="bg-white drop-shadow-md w-[24]  p-5 mb-5  rounded-md">
                          <div className="h-14 w-14">
                          <svg viewBox="0 0 128 128">
<path fill="#f0513f" d="M27.271.11c-.2.078-5.82 3.28-12.487 7.112-8.078 4.644-12.227 7.09-12.449 7.32-.19.225-.34.482-.438.76-.167.564-.179 82.985-.01 83.578.061.23.26.568.44.754.436.46 48.664 28.19 49.25 28.324.272.065.577.054.88-.03.658-.165 48.76-27.834 49.188-28.286.175-.195.375-.532.44-.761.084-.273.115-4.58.115-13.655v-13.26l11.726-6.735c11.056-6.357 11.733-6.755 12.017-7.191l.29-.47V43.287c0-15.548.03-14.673-.585-15.235-.165-.146-5.798-3.433-12.53-7.31L100.89 13.71h-1.359l-11.963 6.87c-6.586 3.788-12.184 7.027-12.457 7.203-.272.18-.597.512-.73.753l-.242.417-.054 13.455-.048 13.46-9.879 5.69c-5.434 3.124-9.957 5.71-10.053 5.734-.175.049-.187-1.232-.187-25.966V15.293l-.26-.447c-.326-.545 1.136.324-13.544-8.114C27.803-.348 28.098-.2 27.27.11zm11.317 10.307c5.15 2.955 9.364 5.4 9.364 5.43 0 .031-4.516 2.641-10.035 5.813l-10.041 5.765-10.023-5.764c-5.507-3.173-10.02-5.783-10.02-5.814 0-.03 4.505-2.64 10.013-5.805l9.999-5.752.69.376c3.357 1.907 6.708 3.824 10.053 5.751zm71.668 13.261c5.422 3.122 9.908 5.702 9.95 5.744.114.103-19.774 11.535-20.046 11.523-.272-.008-19.915-11.335-19.907-11.473.01-.157 19.773-11.527 19.973-11.496.091.022 4.607 2.59 10.03 5.702zM16.3 25.328l9.558 5.503.055 27.247.05 27.252.233.368c.122.194.352.459.52.581.158.115 5.477 3.146 11.818 6.724l11.52 6.506v11.527c0 6.326-.043 11.516-.097 11.516-.041 0-10-5.699-22.124-12.676L5.793 97.201l-.03-38.966-.019-38.954.49.271c.283.15 4.807 2.748 10.065 5.775zm33.754 19.18v25.109l-.387.253c-.525.332-19.667 11.335-19.732 11.335-.03 0-.054-11.336-.054-25.193l.012-25.182 10-5.752c5.499-3.165 10.034-5.733 10.088-5.714.039.024.073 11.34.073 25.144zm38.15-5.775 10.023 5.763V55.92c0 10.838-.011 11.42-.176 11.357-.107-.041-4.642-2.64-10.083-5.774l-9.91-5.69v-11.42c0-6.287.032-11.424.062-11.424.043 0 4.577 2.592 10.084 5.764zm34.164 5.587c0 6.254-.042 11.412-.084 11.462-.072.115-19.896 11.538-20.022 11.538-.031 0-.062-5.135-.062-11.423v-11.42l10-5.756c5.507-3.16 10.042-5.752 10.084-5.752.053 0 .084 5.105.084 11.351zM95.993 70.933 52.005 96.04 32.056 84.693S76 59.277 76.176 59.343zm2.215 14.827-.034 11.442-22.028 12.676c-12.12 6.976-22.082 12.675-22.132 12.675-.053 0-.095-4.658-.095-11.516V99.51l22.08-12.592c12.132-6.923 22.101-12.59 22.154-12.602.043 0 .062 5.148.054 11.443z"></path>
</svg>
                          </div>
                      </div>

                      <div className="bg-white drop-shadow-md w-[24]  p-5 mb-5  rounded-md">
                          <div className="h-14 w-14">
                          <svg viewBox="0 0 128 128">
        <defs><clipPath id="a"><path d="M0 96.48h127V128H0Zm0 0" /></clipPath></defs><g clipPath="url(#a)"><path style={{stroke: 'none', fillRule: 'evenodd', fill: '#4e56a6', fillOpacity: 1}} d="M91.617 25.219c2.445 5.12 3.977 9.699 4.938 14.761.457 2.418.64 8.98.316 11.56-.766 6.179-3.117 12.444-6.734 17.948l-.977 1.485.805.359c1.262.566 3.219.395 4.375-.375 1.351-.902 3.16-3.602 4.398-6.57 5.387-12.895 3.399-27.371-5.281-38.442-.676-.86-1.672-2.023-2.215-2.578l-.992-1.012 1.367 2.864m-38.422 1.09c-1.383.265-2.886 1.09-3.89 2.12-3.075 3.169-2.805 8.66.57 11.473 2.008 1.672 5.063 2.133 7.402 1.118 4.141-1.801 5.774-7.024 3.477-11.122-1.484-2.644-4.664-4.156-7.559-3.59m2.258 3c1.668 1.278 1.938 3.579.59 5.036-2.02 2.183-5.477 1.453-6.36-1.344-.984-3.121 3.106-5.734 5.77-3.691M39.895 64.53c-1.067.356-2.075 1.332-3.547 3.43l-1.606 2.293.07 5.422c.063 5.11.094 5.472.528 6.238 1.086 1.902 2.707 2.824 4.98 2.832 1.38.004 1.758-.082 2.742-.598 1.2-.644 2.11-1.683 2.555-2.925.168-.465.25-2.848.25-7.41v-6.727l-1.062-1.055c-.586-.578-1.399-1.183-1.809-1.347-.723-.286-2.457-.371-3.101-.153m20.058.074c-1.125.45-1.96 1.29-3.52 3.543l-1.62 2.34.058 10.575.063 10.574.578 1.043c1.582 2.847 5.183 3.937 8.23 2.492 1.387-.66 2.117-1.344 2.883-2.703.465-.824.469-.926.531-12.293l.059-11.461-1.168-1.52c-1.527-1.984-2.59-2.668-4.285-2.742-.707-.035-1.52.035-1.809.152m19.922.168c-.922.399-1.883 1.41-3.145 3.309l-.773 1.16.129 7.246c.094 5.282.207 7.426.41 7.907a5.17 5.17 0 0 0 2.43 2.558c2.273 1.176 4.824.84 6.629-.875 1.648-1.566 1.699-1.875 1.699-10.36v-7.234l-.934-1.187c-.511-.652-1.207-1.43-1.547-1.73a4.678 4.678 0 0 0-4.898-.794m9.086 34.614c-1.32.625-1.844 2.3-1.188 3.8.887 2.012 4.473 2.012 5.36 0 1.172-2.667-1.477-5.082-4.172-3.8m2.93.773c1.07.664 1.156 2.375.164 3.317-.442.418-.75.515-1.625.515-.95 0-1.153-.078-1.7-.66-1.867-1.984.79-4.648 3.16-3.172m-81.35.774c-.606.574-.727.836-.724 1.57.004 1.164.375 1.816 1.282 2.262 1.586.777 3.656-.059 3.96-1.606.329-1.66-.855-2.91-2.757-2.914-.895 0-1.137.094-1.762.688m-8.664.03c-.363.188-.664.583-.813 1.06-.16.515-.21 4.382-.167 12.234l.066 11.48.512.52c.668.672 1.66.844 2.636.457 1.38-.547 1.332-.059 1.332-13.063v-11.82l-.699-.59c-.789-.672-1.894-.777-2.867-.277m115.293 6.578c-3.262.453-6.102 3.187-6.98 6.727-.41 1.66-.41 4.812.003 6.343.696 2.563 2.395 4.707 4.567 5.758 1.351.656 3.726 1.07 5.242.918 2.504-.25 5.043-1.164 6.035-2.18 1.23-1.25.633-3.796-.894-3.796-.282 0-1.215.32-2.079.707-2.62 1.18-4.613 1.277-6.273.3-.762-.445-1.535-1.746-1.734-2.914l-.125-.726h5.117c3.152 0 5.375-.086 5.785-.22.988-.327 1.25-1.32.93-3.57-.426-3.019-2.086-5.574-4.328-6.652-.856-.414-3.266-.949-3.926-.875-.117.012-.723.094-1.34.18m-60.758.379c-.797.46-1.254 1.418-1.097 2.305.062.359 1.468 4.027 3.128 8.152 2.641 6.555 3.114 7.578 3.778 8.176.707.632.843.675 1.847.582 1.649-.149 1.91-.547 4.075-6.23 1.039-2.727 1.953-5.028 2.027-5.106.074-.082 1.039 2.152 2.144 4.965 2.313 5.879 2.68 6.425 4.333 6.425 1.054 0 1.886-.484 2.375-1.386.707-1.305 6.312-15.45 6.312-15.93 0-1.719-2.184-2.95-3.582-2.02-.7.465-1.07 1.293-3.023 6.723-.973 2.703-1.829 4.914-1.903 4.914-.07-.004-1.043-2.394-2.156-5.32-2.313-6.063-2.68-6.633-4.27-6.633-1.59 0-1.957.57-4.257 6.633-1.11 2.926-2.07 5.32-2.133 5.32-.063-.004-.922-2.215-1.91-4.914-1.993-5.46-2.356-6.262-3.047-6.723-.645-.425-1.84-.398-2.64.067m32.597-.067c-1.094.727-1.113.891-1.113 9.508 0 8.621.02 8.782 1.113 9.512.265.176.914.316 1.488.316.82 0 1.152-.117 1.715-.593l.695-.59v-17.285l-.695-.594c-.563-.477-.895-.59-1.715-.59-.574 0-1.223.137-1.488.316m9.363-.035c-1.062.563-1.074.664-1.082 9.485-.008 5.976.063 8.39.246 8.777.692 1.438 3.633 1.465 4.485.043.19-.324.3-2.012.378-5.824.118-5.883.165-6.094 1.485-7.153.594-.472 1.289-.671 3.722-1.05 1.266-.2 2.047-1.051 2.047-2.227 0-1.73-.617-2.316-2.453-2.324-1.547-.008-3.547.8-4.426 1.793l-.566.64-.23-.804c-.297-1.059-1.09-1.64-2.22-1.63-.484.005-1.105.13-1.386.274m-39.574.618c.305.203 1.125 2.16 2.75 6.585 1.277 3.461 2.383 6.29 2.46 6.29.079 0 1.18-2.739 2.45-6.086 1.91-5.043 2.414-6.172 2.926-6.582.805-.641 1.289-.63 2.074.058.516.453 1.059 1.684 2.902 6.535 1.25 3.285 2.336 6.04 2.414 6.121.075.079 1.09-2.476 2.25-5.675 2.344-6.442 2.704-7.25 3.301-7.43.992-.297 2.367.617 2.367 1.578 0 .398-5.699 14.652-6.3 15.754-.54.988-1.954 1.227-2.95.496-.238-.172-1.402-2.793-2.812-6.328-2.293-5.738-2.426-6.004-2.656-5.43a672.581 672.581 0 0 0-2.258 5.875c-1.625 4.254-2.137 5.375-2.653 5.824-.75.653-1.347.7-2.242.184-.582-.34-.96-1.152-3.789-8.164-1.726-4.285-3.136-8-3.136-8.254 0-.629 1.171-1.64 1.894-1.64.313 0 .766.128 1.008.288m32.582-.066c.285.125.629.45.758.719.16.336.234 3.004.234 8.273 0 5.27-.074 7.942-.234 8.274-.508 1.058-2.043 1.242-2.98.351l-.626-.59v-7.906c0-5.383.078-8.066.239-8.402.406-.844 1.574-1.164 2.609-.719m9.187.008c.61.262.98 1.101.98 2.207 0 .863.528 1.258.759.566.222-.66 1.59-1.984 2.52-2.433.468-.23 1.398-.461 2.066-.52 1.043-.09 1.28-.043 1.668.328.496.47.613 1.594.238 2.258-.227.406-1.094.676-2.879.903-1.508.195-2.75.94-3.457 2.085l-.594.957-.105 5.266c-.114 5.461-.192 5.938-1.059 6.379-.625.316-1.617.246-2.129-.148-.254-.196-.55-.72-.66-1.165-.273-1.128-.262-14.593.016-15.542.355-1.215 1.41-1.672 2.636-1.141m20.91.187c2.41.856 4.165 3.266 4.641 6.383.297 1.926.149 2.66-.59 2.93-.297.105-2.968.195-5.933.195h-5.395l.184 1.133c.347 2.094 1.074 3.227 2.523 3.926 1.778.86 3.79.703 6.461-.5 2.063-.93 2.711-.715 2.711.887 0 1.492-3.57 3.085-6.902 3.082-3.227-.004-5.688-1.25-7.207-3.657-1.098-1.734-1.27-2.347-1.399-4.972-.148-3.051.453-5.188 2.008-7.13 1.89-2.359 5.832-3.37 8.899-2.277m-110.22.09c-.32.168-.679.485-.796.696-.293.515-.3 15.793-.008 16.515.266.672 1.524 1.195 2.453 1.031.375-.066.91-.355 1.192-.64l.515-.52.063-7.972.058-7.977-.593-.633c-.72-.761-1.98-.984-2.883-.5m7.597-.117c-.656.266-1.363 1.203-1.363 1.813 0 .605 6.84 15.277 7.39 15.855.2.207.716.48 1.15.602.652.183.925.164 1.573-.133.957-.43.829-.192 5.02-9.168 3.48-7.453 3.527-7.606 2.488-8.535-.273-.239-.828-.489-1.242-.551-1.363-.211-1.766.379-4.566 6.77-1.532 3.492-2.575 5.62-2.668 5.456-.086-.148-1.274-2.77-2.633-5.828-1.36-3.058-2.645-5.722-2.852-5.922-.445-.425-1.66-.617-2.297-.359m24.512.106c-2.21.656-3.93 2.113-4.98 4.218-.867 1.742-1.121 3.153-1 5.512.117 2.242.508 3.555 1.5 5.04 2.406 3.608 8.172 4.644 12.808 2.304 1.754-.887 2.383-2.32 1.477-3.38-.535-.624-1-.589-3.063.255-2.207.898-3.406 1.082-4.875.75-1.898-.434-3.101-1.817-3.355-3.867l-.125-1h11.355l.356-.512c.285-.414.328-.805.226-1.977-.328-3.672-2.367-6.468-5.355-7.332-1.277-.37-3.742-.375-4.969-.011m73.645 2.453c-1.48.734-2.32 1.949-2.625 3.816l-.188 1.133h8.91l-.132-1.063c-.204-1.625-1.098-3.199-2.125-3.746-1.028-.547-2.88-.613-3.84-.14m3.699.832c.652.449 1.469 1.906 1.57 2.8l.067.61-3.707.055-3.704.054.149-.765c.394-2.059 2.059-3.395 4.023-3.235.567.047 1.286.262 1.602.48m-72.559.227c.778.528 1.465 1.813 1.618 3.031l.109.86h-8.066l.003-.555c0-.73.871-2.465 1.516-3.027.781-.684 1.457-.875 2.863-.813.922.04 1.48.184 1.957.504" /></g><path style={{fillRule: 'evenodd', fill: '#fb70a9', fillOpacity: 1}} d="M98.262 63.816c-1.489 2.235-2.617 4.985-5.64 4.985-5.095 0-5.368-7.793-10.466-7.793-5.094 0-4.816 7.793-9.91 7.793-5.09 0-5.363-7.793-10.46-7.793-5.095 0-4.817 7.793-9.911 7.793-5.09 0-5.367-7.793-10.46-7.793-5.095 0-4.817 7.793-9.911 7.793-1.598 0-2.723-.77-3.672-1.824-3.645-6.293-5.738-13.672-5.738-21.555 0-23.086 17.965-41.8 40.125-41.8 22.164 0 40.129 18.714 40.129 41.8 0 6.601-1.47 12.844-4.086 18.394Zm0 0" /><path style={{fillRule: 'evenodd', fill: '#4e56a6', fillOpacity: 1}} d="M46.195 59.688v17.316c0 3.105-2.535 5.625-5.664 5.625-3.133 0-5.668-2.52-5.668-5.625V56.102c1.055-1.926 2.266-3.598 4.446-3.598 3.543 0 4.785 4.426 6.886 7.184Zm21.41.902v27.379c0 3.453-2.816 6.25-6.296 6.25-3.477 0-6.297-2.797-6.297-6.25V56.984c1.187-2.27 2.41-4.48 4.914-4.48 3.969 0 5.047 5.535 7.68 8.086Zm20.153-.5v19.875c0 3.105-2.54 5.625-5.668 5.625-3.13 0-5.668-2.52-5.668-5.625v-24.43c.988-1.676 2.16-3.031 4.125-3.031 3.723 0 4.902 4.875 7.21 7.586Zm0 0" /><path style={{fillRule: 'evenodd', fill: '#000', fillOpacity: '.298039'}} d="M46.195 64.996c-1.004-1.223-2.195-2.129-3.914-2.129-4.086 0-4.836 5.113-7.418 7.418V48.23c0-3.105 2.535-5.625 5.664-5.625 3.133 0 5.668 2.52 5.668 5.625Zm21.41.395c-1.07-1.418-2.324-2.524-4.226-2.524-4.547 0-4.965 6.328-8.367 8.078v-9.754c0-3.453 2.82-6.25 6.297-6.25 3.48 0 6.296 2.797 6.296 6.25Zm20.153-1.094c-.875-.856-1.906-1.43-3.281-1.43-4.403 0-4.934 5.938-8.055 7.899V50.973c0-3.106 2.539-5.625 5.668-5.625s5.668 2.52 5.668 5.625Zm0 0" /><path style={{fillRule: 'evenodd', fill: '#fb70a9', fillOpacity: 1}} d="M98.262 63.816c-1.489 2.235-2.617 4.985-5.64 4.985-5.095 0-5.368-7.793-10.466-7.793-5.094 0-4.816 7.793-9.91 7.793-5.09 0-5.363-7.793-10.46-7.793-5.095 0-4.817 7.793-9.911 7.793-5.09 0-5.367-7.793-10.46-7.793-5.095 0-4.817 7.793-9.911 7.793-1.598 0-2.723-.77-3.672-1.824-3.645-6.293-5.738-13.672-5.738-21.555 0-23.086 17.965-41.8 40.125-41.8 22.164 0 40.129 18.714 40.129 41.8 0 6.601-1.47 12.844-4.086 18.394Zm0 0" /><path style={{fillRule: 'evenodd', fill: '#e24ca6', fillOpacity: 1}} d="M89.578 67.969c10.516-15.528 10.79-32.754.817-51.672 7.39 7.515 11.953 17.832 11.953 29.21a41.526 41.526 0 0 1-4.235 18.329c-1.543 2.223-2.715 4.965-5.847 4.965a4.624 4.624 0 0 1-2.688-.832Zm0 0" /><path style={{fillRule: 'evenodd', fill: '#fff', fillOpacity: 1}} d="M60.07 55.848c13.953 0 19.828-8.035 19.828-19.446 0-11.414-8.878-21.918-19.828-21.918-10.953 0-19.832 10.504-19.832 21.918 0 11.41 5.875 19.446 19.832 19.446Zm0 0" /><path style={{fillRule: 'evenodd', fill: '#030776', fillOpacity: 1}} d="M62.176 28.898c0 4.5-3.332 8.145-7.438 8.145-4.105 0-7.437-3.645-7.437-8.145s3.332-8.148 7.437-8.148c4.106 0 7.438 3.648 7.438 8.148Zm0 0" /><path style={{fillRule: 'evenodd', fill: '#fff', fillOpacity: 1}} d="M57.215 27.02c0 2.074-1.664 3.757-3.715 3.757-2.055 0-3.719-1.683-3.719-3.757 0-2.079 1.664-3.762 3.719-3.762 2.05 0 3.715 1.683 3.715 3.762Zm0 0" />
      </svg>
                          </div>
                      </div>
          </div>

          <p>
          When envisioning Survefy, I sought a technology stack that resonated with my principles of simplicity and efficiency. The TALL stack—Tailwind CSS, Alpine.js, Laravel, and Livewire—stood out as the perfect fit.

Tailwind CSS revolutionized my approach to UI design. Its utility-first framework empowered me to craft bespoke interfaces with ease, ensuring that every element on ReCode aligns with our unique aesthetic and functional vision.

Alpine.js emerged as the ideal solution for introducing interactivity within our platform. Its lightweight nature meant I could sprinkle rich, JavaScript-driven interactions without weighing down the user experience—a crucial factor for a platform that prioritizes speed and agility.

Laravel was a natural choice for the backbone of Survefy. Its expressive syntax and robust features not only accelerated development but also provided a stable foundation for our platform to scale. Laravel’s vibrant ecosystem and its commitment to elegant code made it an indispensable ally in bringing ReCode to life.

Livewire allowed me to blend server-side stability with front-end reactivity seamlessly. It simplified state management and made real-time updates a breeze, which is essential for a collaborative environment where developers share and manage code snippets in real-time.
          </p>
      </section>

      <div className="pt-[6rem] px-20 mx-auto max-w-[900px] pb-10">
              <h1 className="pt-10 text-[4rem] text-center font-bold">Wanna start a project?</h1>
              <p className="text-center w-[19rem] mx-auto text-[20px]">Interested in working together? We should queue up a time to chat.</p>
              <p className="text-center pt-5 font-bold text-[20px]">👋 saguinsincarl8@gmail.com</p>
              <p className="text-center pt-1 font-bold text-[20px]">📲 +63 09156716478</p>

      </div>
    </>
  )
}