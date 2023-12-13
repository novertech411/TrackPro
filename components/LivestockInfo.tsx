import React from "react";
import AddIcon from "./icons/AddIcon";
import { global } from "styled-jsx/css";
import CancelIcon from "./icons/cancelIcon";
import QRcode from "@/public/images/QRcode.png";
import Image from "next/image";

function LivestockInfo() {
  return (
    <div className=" w-full h-screen  bg-white py-[48px] px-[19px]  ">
      <div className="flex justify-between  items-center">
        <p className=" font-[700] text-[22px]">Livestock info</p>{" "}
        <div className="bg-primary rounded-full p-[13px] ">
          <CancelIcon />
        </div>
      </div>

      <div className="mt-[55px]  ">
        <Image src={QRcode} alt="" className="mx-[auto]" />
        <div className="my-[25px] text-center">
          <p className="text-[14px] text-[#788B9A]">Tage no</p>
          <p className="text-[22px] text-[700] "> 89567</p>
        </div>
      </div>
    </div>
  );
}

export default LivestockInfo;
