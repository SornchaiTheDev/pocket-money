import React from "react";

function MoneyStatus() {
  return (
    <div className="w-full items-center bg-white p-4 shadow-lg mb-2 rounded-md">
      <div className="flex justify-between">
        <div className="">
          <h2>วันนี้ใช้ไป</h2>
          <h1 className="text-3xl">150 บาท</h1>
        </div>
        <div className="">
          <h2>เดือนนี้ใช้ไป</h2>
          <h1 className="text-3xl">3,500 บาท</h1>
        </div>
      </div>
      <p className="text-red-500 mt-2 font-bold">เฉลี่ยวันละ (150.32 บาท)</p>
    </div>
  );
}

export default MoneyStatus;
