import React from "react";
import AddIcon from "./icons/AddIcon";
import { global } from "styled-jsx/css";

function LivestockInfo() {
  return (
    <div className=" w-full h-screen overflow-y-scroll no-scrollbar  bg-white">
      <div className="flex justify-center">
        <p className="">Livestock info</p>{" "}
        <div className="bg-primary rounded-full p-[] ">
          <AddIcon />{" "}
        </div>
      </div>
    </div>
  );
}

export default LivestockInfo;
