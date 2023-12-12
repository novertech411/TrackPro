import React from "react";
import { IconType } from "./type/Icon.type";

const AddIcon = ({
  className = "h-10 w-10",
  color = "",
}: IconType): JSX.Element => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.00033 2.66669C8.36852 2.66669 8.66699 2.96516 8.66699 3.33335V7.33335H12.667C13.0352 7.33335 13.3337 7.63183 13.3337 8.00002C13.3337 8.36821 13.0352 8.66669 12.667 8.66669H8.66699V12.6667C8.66699 13.0349 8.36852 13.3334 8.00033 13.3334C7.63214 13.3334 7.33366 13.0349 7.33366 12.6667V8.66669H3.33366C2.96547 8.66669 2.66699 8.36821 2.66699 8.00002C2.66699 7.63183 2.96547 7.33335 3.33366 7.33335H7.33366V3.33335C7.33366 2.96516 7.63214 2.66669 8.00033 2.66669Z"
        fill="white"
      />
    </svg>
  );
};

export default AddIcon;
