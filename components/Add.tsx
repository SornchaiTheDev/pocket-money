import { BsPlus } from "react-icons/bs";

interface AddProps {
  onClick: () => void;
}

function Add({ onClick }: AddProps) {
  return (
    <button
      className="p-2 rounded-full cursor-pointer bg-lime-400  inline-flex justify-between"
      onClick={onClick}
    >
      <BsPlus size="1.5rem" color="white" />
      <h2 className="text-white font-bold">เพิ่มรายการ</h2>
    </button>
  );
}

export default Add;
