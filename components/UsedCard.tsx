import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
function UsedCard() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => setIsOpen(!isOpen);
  return (
    <div className="w-full bg-white shadow-lg rounded-lg flex flex-col gap-3 cursor-pointer select-none">
      <div
        className="flex justify-between items-center  px-4 py-6"
        onClick={handleOnClick}
      >
        <h2>01 มิ.ย</h2>
        <div className="flex items-center gap-2">
          <h2>+1,900 บาท</h2>
          <BsChevronDown
            size="1.2rem"
            className={`transition ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </div>
      <div className={`px-4 pb-4 flex flex-col gap-4 ${isOpen ? "block" : "hidden"}`}>
        <div
          className={`flex justify-between items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col">
            <h3>รายรับ</h3>
            <h2 className="text-lg">100 บาท</h2>
          </div>
          <div className="flex flex-col">
            <h3>รายจ่าย</h3>
            <h2 className="text-lg">100 บาท</h2>
          </div>
        </div>
        <button className="px-2 border-2 rounded-lg hover:bg-gray-100">
          ดูรายละเอียด
        </button>
      </div>
    </div>
  );
}

export default UsedCard;
