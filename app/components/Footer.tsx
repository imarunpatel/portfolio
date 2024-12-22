"use client";

import React from "react";
import { menuItems } from "./Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className=" sm:hidden fixed bottom-0 bg-red w-full flex bg-white">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={`item flex-1 flex justify-center flex-col items-center py-2 text-gray-600`}
        >
          <i className={`${item.icon} ${pathname === item.path ? 'text-violet-700' : ''}`}></i>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Footer;
