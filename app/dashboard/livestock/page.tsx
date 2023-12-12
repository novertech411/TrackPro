import React from "react";
import Image from "next/image";
import dropdown from "@/public/images/dropDownArrow.png";
import AddIcon from "@/components/icons/AddIcon";
import Table from "@/components/Table";
import LivestockInfo from "@/components/LivestockInfo";

function page() {
  return (
    <div className=" flex whitespace-nowrap overflow-auto scrollbar-hide ">
      <div className="w-[80%]">
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
      <div className=" w-[20%]">
        <LivestockInfo />
      </div>
    </div>
  );
}

export default page;
