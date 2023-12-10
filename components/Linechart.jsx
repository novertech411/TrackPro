"use client";
import { useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { config } from "process";

Chart.register(...registerables);

function Linechart() {
  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");

    const gradientFill = ctx.createLinearGradient(500, 0, 20, 0);
    gradientFill.addColorStop(0, "rgba(32, 55, 41, 1)");
    gradientFill.addColorStop(1, "rgba(61, 198, 123, 0.5)");

    const myChart = new Chart(ctx, {
      type: "line",

      options: {
        elements: {
          line: {
            tension: 0.4, // smooth lines
          },
        },
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
            data: [100, 120, 125, 128, 130, 125, 130, 131, 120, 140, 135, 130],
            label: "Applied",
            pointRadius: 5,
            pointBackgroundColor: "rgba(61, 198, 123, 1)",
            pointBorderColor: "rgba(32, 55, 41, 1)",
            pointBorderWidth: 3,
            borderColor: gradientFill,
            backgroundColor: gradientFill,
            fill: true,
          },
        ],
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className=" bg-white rounded-md p-[25px]  w-full h-full  ">
      <p className="font-[500] text-[18px] mb-[25px] ">Report</p>
      <div className="">
        <canvas id="myChart" className="h-fit"></canvas>
      </div>
    </div>
  );
}

export default Linechart;
