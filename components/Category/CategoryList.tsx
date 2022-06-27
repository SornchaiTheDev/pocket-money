import { ReactNode, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import {
  FaTimes,
  FaHamburger,
  FaUmbrellaBeach,
  FaTheaterMasks,
} from "react-icons/fa";

interface CategoryListProps {
  children: ReactNode;
  category: "shopping" | "food" | "travel" | "entertainment";
}
function CategoryList({ children, category }: CategoryListProps) {
  const [isClick, setIsClick] = useState<boolean>(false);
  const handleOnClick = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <div
        onClick={handleOnClick}
        className={`inline-flex gap-2 justify-start items-center rounded-full px-1 pr-3 py-1 ${
          isClick && "border-green-300 bg-[#5ce250]"
        }  cursor-pointer`}
        style={{ border: "1.5px solid #2e2e2e" }}
      >
        <button
          className={`${
            isClick ? "bg-[#5ce250]" : "bg-gray-50"
          } rounded-full p-2`}
        >
          {category === "shopping" ? (
            <AiOutlineShopping size="1.15rem" />
          ) : category === "food" ? (
            <FaHamburger size="1.15rem" />
          ) : category === "entertainment" ? (
            <FaTheaterMasks size="1.15rem" />
          ) : (
            category === "travel" && <FaUmbrellaBeach size="1.15rem" />
          )}
        </button>
        <h4 className="font-normal text-sm">{children}</h4>
        {isClick && (
          <button onClick={handleOnClick}>
            <FaTimes size="0.75rem" />
          </button>
        )}
      </div>

      {/* <div
          style={{
            border: "1.5px solid #34da25",
          }}
          className="inline-flex gap-2 justify-start items-center rounded-full px-1 pr-3 py-1  cursor-pointer"
          onClick={handleOnClick}
        >
          <button className="bg-[#5ce250] rounded-full p-2">
            {category === "shopping" ? (
              <AiOutlineShopping size="1.15rem" />
            ) : category === "food" ? (
              <FaHamburger size="1.15rem" />
            ) : category === "entertainment" ? (
              <FaTheaterMasks size="1.15rem" />
            ) : (
              category === "travel" && <FaUmbrellaBeach size="1.15rem" />
            )}
          </button>
          <h4 className="font-normal text-sm">{children}</h4>
          <button>
            <FaTimes size="0.75rem" />
          </button>
        </div>
       */}
    </>
  );
}

export default CategoryList;
