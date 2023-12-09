import Image from "next/image";
import React from "react";
import dropdown from "@/public/images/dropDownArrow.png";
import RegIcon from "@/components/icons/RegIcon";
import CattleIcon from "@/components/icons/CattleIcon";
import GoatIcon from "@/components/icons/GoatIcon";
import SheepIcon from "@/components/icons/SheepIcon";
import Linechart from "@/components/Linechart";
import Doughnut from "@/components/doughnut";

function page() {
  return (
    <div className="  ">
      <div className="flex justify-between  items-center">
        <p className="text-[25px] text-primary font-[700]">Dashborad</p>
        <div className="flex text-white bg-primary py-[16px] px-[32px] gap-5 rounded-lg">
          <p>Dec 2023</p>
          <Image src={dropdown} alt="" />
        </div>
      </div>

      <div className="flex justify-between mt-[38px]">
        <div className="   py-[33px] px-[20px] bg-white rounded-lg">
          <div className="flex   w-[250px]  justify-center">
            <RegIcon />
            <div className="mx-5">
              <p className="text-[22px] font-[700] text-primary">3000</p>
              <p className="text-[14px] font-[400] text-[#788B9A]">
                Registered Livestock
              </p>
            </div>
          </div>
        </div>

        <div className="   py-[33px] px-[20px] bg-white rounded-lg">
          <div className="flex   w-[250px]  justify-center">
            <CattleIcon />
            <div className="mx-5">
              <p className="text-[22px] font-[700] text-primary">300</p>
              <p className="text-[14px] font-[400] text-[#788B9A]">Cattles</p>
            </div>
          </div>
        </div>

        <div className="   py-[33px] px-[20px] bg-white rounded-lg">
          <div className="flex   w-[250px]  justify-center">
            <GoatIcon />
            <div className="mx-5">
              <p className="text-[22px] font-[700] text-primary">193</p>
              <p className="text-[14px] font-[400] text-[#788B9A]">Goat</p>
            </div>
          </div>
        </div>

        <div className="   py-[33px] px-[20px] bg-white rounded-lg">
          <div className="flex   w-[250px]  justify-center">
            <SheepIcon />
            <div className="mx-5">
              <p className="text-[22px] font-[700] text-primary">282</p>
              <p className="text-[14px] font-[400] text-[#788B9A]">Sheep</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  justify-between  mt-[30px] max-h-[300px]">
        <div className="w-[60%]">
          <Linechart />
        </div>
        <div className="w-[35%]">
          <Doughnut />
        </div>
      </div>
    </div>
  );
}

export default page;
