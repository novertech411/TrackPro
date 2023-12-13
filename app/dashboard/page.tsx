import Image from "next/image";
import React from "react";
import dropdown from "@/public/images/dropDownArrow.png";
import RegIcon from "@/components/icons/RegIcon";
import CattleIcon from "@/components/icons/CattleIcon";
import GoatIcon from "@/components/icons/GoatIcon";
import SheepIcon from "@/components/icons/SheepIcon";
import Linechart from "@/components/Linechart";
import Doughnut from "@/components/doughnut";
import Chip from "@/components/Chip";
import Table from "@/components/Table";

function page() {
  return (
    <div className="  pl-8 pt-5  overflow-y-scroll no-scrollbar ">
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

      <div className="flex  justify-between  mt-[30px] h-[550px] ">
        <div className="w-[60%]">
          <Linechart />
        </div>
        <div className="w-[35%]">
          <Doughnut />
        </div>
      </div>

      {/* <Chip label="vaccinated" color={"notvaccinated"} /> */}
      <div className="mt-[60px]">
        <div className="bg-white rounded-lg  p-[40px]">
          {" "}
          <p className="text-[18px] font-[500]">Recent Additions</p>{" "}
        </div>
        <Table
          tableData={[
            {
              tag: "#29293",
              age: "3",
              sex: "male",
              bread: "cattle",
              method: "trasfer",
              vstatus: "vaccinated",
            },
            {
              tag: "#29293",
              age: "3",
              sex: "male",
              bread: "cattle",
              method: "bitrh",
              vstatus: "notvaccinated",
            },
            {
              tag: "#29293",
              age: "3",
              sex: "male",
              bread: "cattle",
              method: "trasfer",
              vstatus: "vaccinated",
            },
            {
              tag: "#29293",
              age: "3",
              sex: "male",
              bread: "cattle",
              method: "birth",
              vstatus: "notvaccinated",
            },
          ]}
          tableColumn={[
            { label: "Tag no", key: "tag" },
            { label: "Age", key: "age" },
            { label: "Sex", key: "sex" },
            { label: "Bread", key: "bread" },
            { label: "Method of Possession", key: "method" },
            {
              label: "Vaccination Status",
              key: "vstatus",
              chipTitle: "status",
              successChip: "vaccinated",
              errorChip: "notvaccinated",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default page;
