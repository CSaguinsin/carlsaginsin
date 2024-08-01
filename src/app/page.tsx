"use client"; // Add this line at the top

import { useState } from 'react';
import Image from "next/image";
import Navbar from './navbar';
import Me from '../../public/me.jpg';
import Aboutme from '../../public/aboutMe.png';
import { Chip } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import PocketDevs from './pocketdevs';
import ReCode from './recode';
import Survefy from './survefy';
import BuildMastersHub from './buildmastershub';
import { Button } from "@nextui-org/react"; // Corrected the closing quote
import Blogs from './blogs'; // Import the blogs component
import Projects from './projects'; // Import the projects component


export default function Home() {
  const [view, setView] = useState('projects'); // Set initial state to 'projects'

  return (
    <>
      <section className="mx-auto max-w-screen-lg text-center">
        <h1 className="text-[3rem] font-sans pt-[4rem] pb-8">Carl Saginsin</h1>
        <div className="flex justify-center items-center flex-col">
          <Image
            alt="Carl Saginsin"
            loading="lazy"
            width={128}
            height={128}
            decoding="async"
            className="rounded-full border-2 mb-8"
            style={{ color: "transparent" }}
            src={Me}
          />
        </div>
        <p className="mx-auto w-[30rem] text-10 font-sans text-neutral-400 pb-8">
          Crafting something new 👨🏼‍💻. Full stack developer in 1700 🇵🇭. Turning ideas into impactful web apps. Always learning, always improving. Its not just code; its passion.
        </p>
        <div className="flex justify-center items-center gap-x-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/rubengroot_"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram text-neutral-400 hover:text-neutral-300 transition-colors"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/rubenpdegroot"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter text-neutral-400 hover:text-neutral-300 transition-colors"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/degrootruben"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github text-neutral-400 hover:text-neutral-300 transition-colors"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/grootruben/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin text-neutral-400 hover:text-neutral-300 transition-colors"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width={4} height={12} x={2} y={9} />
              <circle cx={4} cy={4} r={2} />
            </svg>
          </a>
        </div>
      </section>

      <div className="pt-[5rem] flex flex-col lg:flex-row justify-center lg:space-x-[9rem]">
        <nav role="navigation" className="mb-4 lg:mb-0">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                className={view === 'projects' ? 'font-bold' : ''}
                href="#"
                onClick={() => setView('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className={view === 'blogs' ? 'font-bold' : ''}
                href="#"
                onClick={() => setView('blogs')}
              >
                Blog
              </a>
            </li>
            <li>
              <a className="" href="/about/">
                About
              </a>
            </li>
          </ul>
        </nav>

        <section className="posts">
          {view === 'blogs' ? <Blogs /> : view === 'projects' ? <Projects /> : (
            <ul className="space-y-4">
              {/* <li className="space-x-10">
                <a href="/blog/high-agency">High Agency</a>
                <time>2024/03/06</time>
              </li>
              <li className="space-x-10">
                <a href="/blog/social-capital">Social Capital</a>
                <time>2020/09/01</time>
              </li>
              <li className="space-x-10">
                <a href="/blog/vector-fields">Vector Fields</a>
                <time>2020/06/16</time>
              </li> */}
            </ul>
          )}
        </section>
      </div>
    </>
  );
}
