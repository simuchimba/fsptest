"use client";

import Greeting from "@/components/dashboard/Greeting";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { FaBookOpen } from "react-icons/fa6";
import { MdEmergency, MdWaterDrop } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { RiMentalHealthFill } from "react-icons/ri";
import { HiChatBubbleBottomCenterText, HiUserGroup } from "react-icons/hi2";
import { BiSolidAlarmExclamation } from "react-icons/bi";
import { GiCupcake } from "react-icons/gi";
import { MdFactCheck } from "react-icons/md";
import Link from "next/link";

export default function Dashboard() {
  const { data: session, status } = useSession();

  // If session is loading, display a loading state
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // Redirect to login if session is not found
  if (!session) {
    if (typeof window !== "undefined") {
      window.location.href = "/login"; // Redirects to login on the client side
    }
    return null;
  }

  const userFirstName = session?.user?.name ? session.user.name.split(" ")[0] : "";

  const menuItems = [
    { color: "rose", label: "Cycle", href: "/tracker", icon: MdWaterDrop },
   
    {
      color: "emerald",
      label: "Fact Check",
      href: "/fact-check",
      icon: MdFactCheck,
    },
    {
      color: "fuchsia",
      label: "Knowledge",
      href: "/knowledge",
      icon: RiMentalHealthFill,
    },
    { color: "orange", label: "Community", href: "/social", icon: HiUserGroup },
   
    {
      color: "green",
      label: "Safety",
      href: "/safety",
      icon: AiFillSafetyCertificate,
    },
    {
      color: "pink",
      label: "Emergency",
      href: "/emergency",
      icon: MdEmergency,
    },
    
  ];

  return (
    <div className="relative">
      <div className="sticky top-16 bg-white z-10">
        <Greeting userFirstName={userFirstName} />
        <hr className="w-full opacity-20" />
      </div>
      {/* wwyltdt hero */}
      <div className="flex my-4">
        <div className="w-6/12 text-center flex flex-col justify-center items-center text-base font-semibold translate-x-8 text-[#DB6542]">
          How may we help you
          <span className="text-[#389F8A]">Today?</span>
        </div>
        <div className="w-6/12 overflow-hidden">
          <Image
            src={"/assets/dashboard/think.png"}
            width={998}
            height={622}
            className="translate-x-10"
            alt="think"
          />
        </div>
      </div>
      {/* Grid Menu */}
      <div className="grid grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <GridElement key={item.label} data={item} />
        ))}
      </div>
    </div>
  );
}

function GridElement({ data }) {
  return (
    <Link href={data.href}>
      <div
        className={`w-full aspect-square rounded-md flex flex-col justify-center items-center shadow-md gap-1 bg-gradient-to-br from-${data.color}-100 to-${data.color}-200 text-${data.color}-950`}
      >
        {React.createElement(data.icon, {
          className: `w-1/2 h-1/3 fill-${data.color}-900`,
        })}
        <span className="font-semibold">{data.label}</span>
      </div>
    </Link>
  );
}
