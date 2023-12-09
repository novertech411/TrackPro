"use client";
import { useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { config } from "process";

Chart.register(...registerables);

function Linechart() {
  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");

    const myChart = new Chart(ctx, {
      type: "line",

      options: {
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
            data: [86, 114, 106, 106, 107, 111, 133, 70, 80, 101, 108, 132],
            label: "Applied",
            borderColor: "#F4AF29",
            backgroundColor: "#F4AF29",
            fill: false,
            legend: {
              display: false,
            },
          },
          {
            data: [70, 90, 44, 60, 83, 90, 100],
            label: "Accepted",
            borderColor: "#27AE60",
            backgroundColor: "#27AE60",
            fill: false,
          },
        ],
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className=" bg-white rounded-md pt-0   w-full h-fit my-auto  max-h-[500px]  ">
      <p className="font-[500] text-[18px] ">Report</p>
      <div className="">
        <canvas id="myChart" className=""></canvas>
      </div>
    </div>
  );
}

export default Linechart;
