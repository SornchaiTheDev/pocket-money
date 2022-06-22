import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { months } from "@assets/months";
interface UsedCardProps {
  day: number;
  month: number;
}
function UsedCard({ day, month }: UsedCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => setIsOpen(!isOpen);
  return (
    <div
      className="w-full bg-white shadow-lg rounded-lg flex flex-col gap-3 cursor-pointer select-none"
      onClick={handleOnClick}
    >
      <div className="flex justify-between items-center  px-4 py-6">
        <h2>
          {day.toString().padStart(2, "0")} {months[month].short}
        </h2>
        <div className="flex items-center gap-2">
          <h2>
            + <span className="text-green-600 font-bold">1,900</span> บาท
          </h2>
          <BsChevronDown
            size="1.2rem"
            className={`transition ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </div>
      <div
        className={`px-4 pb-4 flex flex-col gap-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between">
          <h3>งบวันนี้</h3>
          <h3>
            <span className="text-green-600 font-bold">+250</span> บาท
          </h3>
        </div>
        <hr />
        <div className="flex justify-between">
          <h3>ซื้อของTops</h3>
          <h3>
            <span className="text-red-500 font-bold">-75</span> บาท
          </h3>
        </div>
        <div className="ml-4">
          <div className="flex justify-between">
            <h3>- นมข้นหวานตรามะลิ</h3>
            <h3>
              <span className="text-red-500 font-bold">-20</span> บาท
            </h3>
          </div>
          <div className="flex justify-between">
            <h3>- โค้กไม่มีน้ำตาล</h3>
            <h3>
              <span className="text-red-500 font-bold">-18</span> บาท
            </h3>
          </div>
          <div className="flex justify-between">
            <h3>- ไม้แขวนเสื้อ</h3>
            <h3>
              <span className="text-red-500 font-bold">-44</span> บาท
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsedCard;
