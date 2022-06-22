import { NextPage } from "next";
import BottomNav from "@components/BottomNav";
import AddList from "@components/AddList";

const Index: NextPage = () => {
  return (
    <>
      <title>My Pocket</title>

      <div className="p-4 bg-gray-50 h-screen">
        <div className="w-full bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg">
            วันนี้ <span className="font-bold">(20 มิ.ย)</span>
          </h2>

          <div className="flex gap-2 mt-4">
            <button className="border-green-500 hover:bg-green-500 hover:text-white text-green-500 border-2 px-4 py-2 rounded-lg">
              เพิ่มรายรับ
            </button>
            <button className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white border-2 px-4 py-2 rounded-lg">
              เพิ่มรายจ่าย
            </button>
          </div>

          <AddList />
        </div>
        <div className="mt-4 w-full bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-lg mb-2">รายการวันนี้ (0)</h2>
          <hr />
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h2>ไม่มีรายการ</h2>
          </div>
          <div className="flex flex-col"></div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Index;
