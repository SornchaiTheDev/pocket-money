import { Doughnut } from "react-chartjs-2";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { ChartData, ChartOptions } from "chart.js";
import Page from "layout/Page";
import BacktoHome from "@components/Backto";
const data: ChartData = {
  labels: ["ชอปปิ้ง", "อาหาร", "การเดินทาง", "ความบันเทิง", "อื่นๆ"],
  datasets: [
    {
      label: "ประเภทการใช้เงิน",
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions = {
  plugins: {
    tooltip: {
      enabled: false,
    },
  },
};

function Day() {
  return (
    <Page className="px-4">
      <BacktoHome href="/home" title="กลับหน้าหลัก" />
      <div className="bg-white w-full rounded-lg flex flex-col items-center justify-center p-4">
        <div className="w-1/2">
          <Doughnut data={data} options={options} />
        </div>
        <h2>ประเภทการใช้งาน</h2>
      </div>
      
    </Page>
  );
}

export default Day;
