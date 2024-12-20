import React from "react";
import { menuItems } from "./Sidebar";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" sm:hidden fixed bottom-0 bg-red w-full flex bg-white">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="item flex-1 flex justify-center flex-col items-center py-2 text-gray-600"
        >
          <i className={item.icon}></i>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Footer;
