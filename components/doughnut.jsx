"use client";
import { useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
function doughnut() {
  useEffect(() => {
    const ctx = document.getElementById("duChart").getContext("2d");

    const duChart = new Chart(ctx, {
      type: "doughnut",

      options: {
        borderRadius: 15,
        stack: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },

      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Set",
          "Oct",
          "Nov",
          "Dec",
        ],

        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ["#203729", "#20A361", "#FF69B4"],
            hoverOffset: 4,
          },
        ],
      },
    });

    return () => {
      duChart.destroy();
    };
  }, []);

  return (
    <div className="p-[25px]  bg-white rounded-lg  max-h-[500px]  w-full h-fit my-auto">
      <p className="font-[500] text-[18px]">Analytics</p>
      <div className=" max-w-[300px] mx-[auto] relative mt-[20px] ">
        <div className=" absolute inset-1/3 text-center">
          <p className="font-[700] text-[28px]">80%</p>
          <p className="font-[500] text-[16px] flex">Mortality Rate</p>
        </div>
        <canvas id="duChart" className=""></canvas>
      </div>

      <div className="flex px-[40px] justify-between my-[35px]">
        <div className="flex gap-2 items-center">
          <div className="w-[15px] h-[15px] bg-primary rounded-md  "></div>
          <p className="text-[#788B9A] font-[500] text-[16px]">Death</p>
        </div>

        <div className="flex gap-2 items-center">
          <div className="w-[15px] h-[15px] bg-[#20A361] rounded-md  "></div>
          <p className="text-[#788B9A] font-[500] text-[16px]">Birth</p>
        </div>

        <div className="flex gap-2 items-center">
          <div className="w-[15px] h-[15px] bg-[#FF69B4] rounded-md  "></div>
          <p className="text-[#788B9A] font-[500] text-[16px]">Transfers</p>
        </div>
      </div>
    </div>
  );
}

export default doughnut;
