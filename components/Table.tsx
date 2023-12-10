import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({
  tableData,
  tableColumn,
}: {
  tableColumn: {
    label: string;
    key: string;
    chipTitle?: string;
    successChip?: string;
    errorChip?: string;
  }[];
  tableData: any[];
}) => {
  return (
    <div className="overflow-x-auto font-inter rounded-lg bg-white">
      <table className="min-w-full ">
        <TableHead columns={tableColumn} />
        <TableBody data={tableData} columns={tableColumn} />
      </table>
    </div>
  );
};

export default Table;
