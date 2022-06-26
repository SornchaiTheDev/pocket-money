import BottomNav from "@components/BottomNav";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
function Detail() {
  return (
    <div className="bg-gray-50 min-h-screen mb-24  h-screen pt-4">
      <Link href="/home" passHref>
        <div className="inline-flex justify-center items-center gap-2 px-4 py-6">
          <BsArrowLeft />
          <h2 className="font-medium">กลับหน้าหลัก</h2>
        </div>
      </Link>
      <div className="bg-white rounded-t-2xl h-full p-4 pt-6">
        <h2 className="text-lg font-medium">รายละเอียด</h2>
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex justify-between items-center">
            <h4 className="text-md">
              <span className="font-bold">{1}.</span> นมข้นหวานตรามะลิ
            </h4>
            <h4>
              28 <span className="text-sm">บาท</span>
            </h4>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="text-md">
              <span className="font-bold">{2}.</span> โค้กไม่มีน้ำตาล
            </h4>
            <h4>
              18 <span className="text-sm">บาท</span>
            </h4>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="text-md">
              <span className="font-bold">{3}.</span> ไม้แขวนเสื้อ
            </h4>
            <h4>
              48 <span className="text-sm">บาท</span>
            </h4>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default Detail;
