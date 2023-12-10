"use client";
import React from "react";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import { clsx } from "clsx";
import DashboardIcon from "./icons/DashboardIcon";
import LivestockIcon from "./icons/LivestockIcon";
import NotificationIcon from "./icons/NotificationIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ExitIcon from "./icons/ExitIcon";
import avater from "@/public/images/avater.png";

const menus: {
  id: number;
  url: string;
  icon: any;
  label: string;
  isActive: boolean;
}[] = [
  {
    id: 1,
    url: "/dashboard",
    icon: DashboardIcon,
    label: "Dashboard",
    isActive: false,
  },
  {
    id: 2,
    url: "/dashboard/livestock",
    icon: LivestockIcon,
    label: "LiveStock",
    isActive: false,
  },
  {
    id: 3,
    url: "/dashboard/notification",
    icon: NotificationIcon,
    label: "Notification",
    isActive: false,
  },
];

function SideBar() {
  const pathname = usePathname();

  return (
    <div className="w-max h-screen  bg-white  py-10 font-inter leading-normal not-italic flex flex-col justify-between gap-10 ">
      <div>
        <div className="w-[100px] mx-[60px]    ">
          <Image src={logo} alt="TrackPro logo " className="mx-[auto]  " />
          <p className="font-[700] text-[22px] text-primary"> TrackPro</p>
        </div>

        <div className="mt-[75px]">
          <div className="w-max">
            {menus.map((items) => {
              const isActive = pathname === items.url ? true : false;
              console.log(pathname);
              return (
                <Link href={`${items.url}`} key={items.id}>
                  <div
                    key={items.id}
                    className={clsx(
                      "group flex py-4 px-10 cursor-pointer mb-1 hover:bg-primary hover:rounded-r-lg",
                      isActive ? "rounded-r-lg bg-primary" : ""
                    )}
                  >
                    <div className="mr-4 ">
                      {
                        <items.icon
                          color={
                            isActive
                              ? "text-white"
                              : "text-[#788B9A] group-hover:text-white"
                          }
                        />
                      }
                    </div>
                    <div
                      className={clsx(
                        "text-sm not-italic font-normal group-hover:!text-white",
                        isActive ? "text-white" : "text-[#788B9A]"
                      )}
                    >
                      {items.label}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" group px-[24px] my-[34px] py-[13px]  flex justify-between items-center  hover:bg-primary  hover:rounded-r-lg ">
        <div className="rounded-full bg-white">
          <Image src={avater} alt="" />
        </div>
        <div className="text-[12px] font-[400] items-center group-hover:text-white">
          <p className="te">Easin Aarfat</p>
          <p className="text-[#788B9A]">Admin</p>
        </div>
        <ExitIcon color=" text-primary  group-hover:text-white" />
      </div>
    </div>
  );
}

export default SideBar;
