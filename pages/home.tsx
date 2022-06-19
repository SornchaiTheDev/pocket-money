import { NextPage } from "next";
import BottomNav from "@components/BottomNav";

const Index: NextPage = () => {
  return (
    <>
      <title>My Pocket</title>

      <div className="p-4 bg-gray-50 h-screen">
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-xl">ใช้ไปแล้ว</h4>
            <h2 className="text-5xl font-medium">
              5,000<span className="text-2xl ml-2">บาท</span>
            </h2>
          </div>
          <div>
            <h4 className="text-xl">เงินคงเหลือเดือนนี้</h4>
            <h2 className="text-5xl font-medium">
              5,000<span className="text-2xl ml-2">บาท</span>
            </h2>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Index;
