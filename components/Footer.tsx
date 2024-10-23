import Link from "next/link";
import React from "react";
import { RiGithubFill, RiLinkedinFill  } from "react-icons/ri";
import { CiMail } from "react-icons/ci";

export const Footer = () => {
  return (
    <div
      style={{ height: "7vh" }}
      className="px-10 flex items-center justify-center "
    >
      <ul className="flex text-center ">
        <li className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="https://github.com/ShieldCubed/shell">
            <a target="_blank" rel="noreferrer noopener" aria-label="github">
              <RiGithubFill size={20} className="hover:text-third" />
            </a>
          </Link>
        </li>
        <li className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="mailto:team@shieldcubed.xyz">
            <a target="_blank" rel="noreferrer noopener" aria-label="mail">
              <CiMail size={20} className="hover:text-third" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
