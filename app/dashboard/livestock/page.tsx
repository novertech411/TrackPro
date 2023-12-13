import React from "react";
import Image from "next/image";
import dropdown from "@/public/images/dropDownArrow.png";
import AddIcon from "@/components/icons/AddIcon";
import Table from "@/components/Table";
import LivestockInfo from "@/components/LivestockInfo";
import "@/app/globals.css";
function page() {
  return (
    <div className=" flex     overflow-y-scroll no-scrollbar">
      <div className="w-full  pt-5  px-8 overflow-y-scroll no-scrollbar ">
        <div className="flex justify-between  items-center mb-[32px]">
          <div className="flex text-white bg-primary py-[16px] px-[32px] gap-5 rounded-lg">
            <p>Cattle</p>
            <Image src={dropdown} alt="" />
          </div>

          <div className="flex text-white bg-primary py-[16px] px-[32px] gap-5 rounded-lg items-center">
            <p>Add New</p>
            <AddIcon />
          </div>
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
      <div className=" w-[25%]   ">
        <LivestockInfo />
      </div>
    </div>
  );
}

export default page;
