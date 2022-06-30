import { useState } from "react";
import CategoryList from "@components/Category/CategoryList";
import { Category } from "types/Category";

function index() {
  const [selectedCategory, setSelectedCategory] = useState<string>("income");
  const handleOnClick = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-wrap gap-2 w-full">
      <CategoryList
        category="income"
        isSelected={selectedCategory === "income"}
        onClick={() => handleOnClick("income")}
      >
        รายรับ
      </CategoryList>
      <CategoryList
        category="shopping"
        isSelected={selectedCategory === "shopping"}
        onClick={() => handleOnClick("shopping")}
      >
        ช้อปปิ้ง
      </CategoryList>
      <CategoryList
        category="food"
        isSelected={selectedCategory === "food"}
        onClick={() => handleOnClick("food")}
      >
        อาหาร
      </CategoryList>
      <CategoryList
        category="travel"
        isSelected={selectedCategory === "travel"}
        onClick={() => handleOnClick("travel")}
      >
        การเดินทาง
      </CategoryList>
      <CategoryList
        category="entertainment"
        isSelected={selectedCategory === "entertainment"}
        onClick={() => handleOnClick("entertainment")}
      >
        ความบันเทิง
      </CategoryList>
      <CategoryList
        category="other"
        isSelected={selectedCategory === "other"}
        onClick={() => handleOnClick("other")}
      >
        อื่นๆ
      </CategoryList>
    </div>
  );
}

export default index;
