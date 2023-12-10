import React from "react";
import { clsx } from "clsx";

const chipColor: Record<string, string> = {
  vaccinated: "   bg-primary",
  notvaccinated: "   bg-[#FF5656]",
};

function Chip({
  label,
  classes = "",
  color = "vaccinated",
}: {
  label: string | undefined;
  color?: "vaccinated" | "notvaccinated";
  classes?: string;
}) {
  return (
    <div
      className={clsx(
        "font-[400] text-[14px] text-white text-center  py-[15px] rounded-md w-[161px] inline-block  font-inter",
        chipColor[`${color}`],
        classes || ""
      )}
    >
      {label}
    </div>
  );
}

export default Chip;
