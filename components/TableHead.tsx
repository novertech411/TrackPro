import React from "react";

import ThreeIcon from "./icons/ThreeIcon";
import ArrowIcon from "./icons/ArrowIcon";

interface TableColumn {
  key: string;
  label: string;
}

interface TableHeadProps {
  columns: TableColumn[];
}

const TableHead: React.FC<TableHeadProps> = ({ columns }) => {
  return (
    <thead className=" bg-white pt-[10px] ">
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            scope="col"
            className="pl-4 py-14 pr-6 text-sm font-inter not-italic font-medium bg-white rounded-md  "
          >
            <div className="flex  gap-2 items-center  justify-center">
              {" "}
              {column.label} <ArrowIcon />{" "}
            </div>
          </th>
        ))}
        <th className=" pl-4 py-4 mx-[30px]  bg-white rounded-md">
          {" "}
          <ThreeIcon className="" />
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
