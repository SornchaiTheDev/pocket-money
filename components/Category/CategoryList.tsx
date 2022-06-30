import { ReactNode, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import {
  FaTimes,
  FaHamburger,
  FaUmbrellaBeach,
  FaTheaterMasks,
} from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { Category } from "types/Category";
import Icons from "@components/Category/Icons";
interface CategoryListProps {
  children: ReactNode;
  category: Category;
  isSelected: boolean;
  onClick: () => void;
}
function CategoryList({
  children,
  category,
  isSelected,
  onClick,
}: CategoryListProps) {
  return (
    <>
      <div
        onClick={onClick}
        className={`inline-flex gap-2 justify-start items-center rounded-full px-1 pr-3 py-1  cursor-pointer  ${
          isSelected ? "text-white bg-lime-400" : "text-black"
        }`}
        style={{ border: `2px solid ${isSelected ? "#a3e635" : "#2e2e2e"}` }}
      >
        <button className="rounded-full p-2">
          <Icons category={category} />
        </button>
        <h4 className="font-normal text-sm">{children}</h4>
      </div>
    </>
  );
}

export default CategoryList;
