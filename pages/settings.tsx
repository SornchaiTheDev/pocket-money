import { NextPage } from "next";
import BottomNav from "@components/BottomNav";
import BudgetInput from "@components/BudgetInput";

const Index: NextPage = () => {
  return (
    <>
      <title>My Pocket</title>
      <div className="p-4 bg-gray-50 min-h-screen gap-4">
        <h2 className="text-xl font-semibold">การตั้งค่า</h2>
        <div className="flex flex-col gap-4 mt-4">
          <BudgetInput
            title="งบรายวัน"
            onChange={(value) => console.log(value)}
          />
          <BudgetInput
            title="งบรายเดือน"
            onChange={(value) => console.log(value)}
          />

          <button className="mt-4 w-full py-4 bg-red-500 hover:bg-red-400 rounded-lg p-2 text-white font-semibold">
            ออกจากระบบ
          </button>
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default Index;
