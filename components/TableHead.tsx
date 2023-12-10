import React from "react";
import Arrow from "@/public/images/";

interface TableColumn {
  key: string;
  label: string;
}

interface TableHeadProps {
  columns: TableColumn[];
}

const TableHead: React.FC<TableHeadProps> = ({ columns }) => {
  return (
    <thead className="bg-white  rounded-md">
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            scope="col"
            className="pl-4 py-4 pr-6 text-sm font-inter not-italic font-medium  text-center  "
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
