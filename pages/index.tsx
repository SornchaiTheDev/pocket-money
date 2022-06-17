import { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col">
        <div>
          <h4 className="text-2xl">ใช้ไปแล้ว</h4>
          <h2 className="text-6xl font-medium leading-tight">5,000 ฿</h2>
        </div>
        <div>
          <h4 className="text-2xl">เงินคงเหลือเดือนนี้</h4>
          <h2 className="text-6xl font-medium leading-tight">5,000 ฿</h2>
        </div>
      </div>
    </div>
  );
};

export default Index;
