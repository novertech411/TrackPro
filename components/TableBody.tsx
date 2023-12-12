import React from "react";

import Chip from "./Chip";
import ThreeIcon from "./icons/ThreeIcon";

interface TableBodyProps {
  data: any[];
  columns: {
    label: string;
    key: string;
    chipTitle?: string;
    successChip?: string;
    errorChip?: string;
  }[];
}

const TableBody: React.FC<TableBodyProps> = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((row, i: number) => {
        return (
          <tr key={row.id}>
            <>
              {columns.map((each, i) => {
                return (
                  <td
                    key={i}
                    className="px-4 py-4 my-[12px]  text-center rounded-sm  bg-white mb-4 whitespace-nowrap tracking-[0.1px]  "
                  >
                    {each["chipTitle"] ? (
                      <Chip
                        label={
                          row[each["key"]] === each["chipTitle"]
                            ? each["successChip"]
                            : each["errorChip"]
                        }
                        color={
                          row[each["key"]] === each["chipTitle"]
                            ? "vaccinated"
                            : "notvaccinated"
                        }
                        classes=" text-center font-normal"
                      />
                    ) : (
                      row[each["key"]]
                    )}
                  </td>
                );
              })}
            </>
            <td className="px-4 py-4 my-[12px] mb-4 whitespace-nowrap bg-white">
              {" "}
              <ThreeIcon />{" "}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
