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
          {category === "shopping" ? (
            <AiOutlineShopping size="1.15rem" />
          ) : category === "food" ? (
            <FaHamburger size="1.15rem" />
          ) : category === "entertainment" ? (
            <FaTheaterMasks size="1.15rem" />
          ) : category === "travel" ? (
            <FaUmbrellaBeach size="1.15rem" />
          ) : (
            category === "other" && <BsThreeDots size="1.15rem" />
          )}
        </button>
        <h4 className="font-normal text-sm">{children}</h4>
        {isSelected && (
          <button>
            <FaTimes size="0.75rem" />
          </button>
        )}
      </div>
    </>
  );
}

export default CategoryList;
