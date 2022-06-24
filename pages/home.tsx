import { useState } from "react";
import { NextPage } from "next";
import MoneyStatus from "@components/MoneyStatus";
import BottomNav from "@components/BottomNav";
import AddList from "@components/AddList";
import { months } from "@assets/months";

const Index: NextPage = () => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const [type, setType] = useState<"income" | "outcome" | "none">("none");
  return (
    <>
      <title>My Pocket</title>

      <div className="p-4 bg-gray-50 min-h-screen">
        <MoneyStatus />
        <div className="w-full bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg">
            วันนี้{" "}
            <span className="font-bold">
              ({day.toString().padStart(2, "0")} {months[month].short})
            </span>
          </h2>

          <div className="flex gap-2 mt-4">
            <button
              className={`border-green-500 hover:bg-green-500 hover:text-white text-green-500 border-2 px-4 py-2 rounded-lg
              ${type === "income" && "bg-green-500 text-white"}`}
              onClick={() => setType("income")}
            >
              เพิ่มรายรับ
            </button>
            <button
              className={`border-red-500 text-red-500 hover:bg-red-500 hover:text-white border-2 px-4 py-2 rounded-lg 
              ${type === "outcome" && "bg-red-500 text-white"}`}
              onClick={() => setType("outcome")}
            >
              เพิ่มรายจ่าย
            </button>
          </div>

          {type !== "none" && (
            <AddList type={type} onCancel={() => setType("none")} />
          )}
        </div>
        <div className="mt-4 w-full bg-white rounded-lg shadow-lg p-4 mb-32 ">
          <h2 className="text-lg mb-2">รายการวันนี้ (0)</h2>
          <hr />
          <div className="flex flex-col justify-center items-center m-10">
            <h2>ไม่มีรายการ</h2>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Index;
