"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconDashboard,
  IconBrandTabler,
  IconCircleLetterW,
  IconContract,
  IconSettings,
  IconMessageChatbot
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

const SideNav = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Landing Page Generator",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "SEO",
      href: "/SEO",
      icon: (
        <IconCircleLetterW className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Content Generator",
      href: "#",
      icon: (
        <IconContract className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Automation",
      href: "#",
      icon: (
        <IconMessageChatbot className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },

    
  ];

  const [open, setOpen] = useState(false);

  return (
    <Sidebar open={open} setOpen={setOpen} animate={false}>
      <SidebarBody className="h-screen justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <LogoIcon />
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Settings",
              href: "/settings",
              icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
};

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-10 w-12">
        <img
          src="\adEaseLogo.png"
          alt="Logo"
          className="h-full w-full object-contain rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"
        />
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        AdEase
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-10 w-12">
        <img
          src="./adEaseLogo.png"
          alt="Logo"
          className="h-full w-full object-contain rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"
        />
      </div>
      <span className="font-medium text-black dark:text-white whitespace-pre">
        AdEase
      </span>
    </Link>
  );
};

export default SideNav;
