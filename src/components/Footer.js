import React from "react";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram, BsDiscord } from "react-icons/bs";

const socials = [
  {
    href: "#",
    icon: BsInstagram,
  },
  {
    href: "#",
    icon: FaTwitter,
  },
  {
    href: "#",
    icon: BsDiscord,
  },
];

function Footer() {
  return (
    <div className="flex flex-col bg-[#121426] p-10">
      <div className="flex flex-row justify-between justify-center content-center">
        <div className="flex justify-start">
          <img src={require("./images/Comicrunes.png")} alt="" />
        </div>
        <div className="flex bg-red flex-row justify-center items-center self-center">
          {socials.map((item) => (
            <div className="border rounded-md p-2 ml-5 justify-center items-center self-center border-white">
              <a href={item.href}>
                <item.icon className="flex justify-center items-center self-center" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <h1 className="mt-5 mb-5 text-gray-200 font-medium text-lg">
        Fair Use Policy and Legal Disclaimer
      </h1>
      <h1 className="text-white">From 2021 Comicrunes.com</h1>
    </div>
  );
}

export default Footer;
