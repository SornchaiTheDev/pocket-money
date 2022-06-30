import React from "react";
import MoneyForm from "@components/form/MoneyForm";

function BudgetLimit() {
  return (
    <div className="absolute w-full h-full bg-black bg-opacity-60 top-0 left-0 z-20">
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-white px-4 pt-4 rounded-lg w-11/12">
          <div className="mt-6 flex justify-center w-full">
            <MoneyForm title="จำนวนเงินที่จะใช้ในแต่ละวัน" />
          </div>
          <div className="flex gap-2 justify-center items-stretch my-6 w-full">
            <button className="h-full border-2 border-gray-900 bg-gray-900 text-white px-4 py-2 p-2 rounded-lg w-full">
              ตกลง
            </button>
            <button className="h-full border-2 px-4 py-2 rounded-lg border-gray-900">
              ข้าม
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetLimit;
