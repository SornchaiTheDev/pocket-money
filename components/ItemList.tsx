import { ChangeEvent, useState } from "react";
import { ItemsI } from "types/Items";
import { BiTrash } from "react-icons/bi";

interface ItemListProps {
  onChange: (value: ItemsI) => void;
  onBlur: () => void;
  deleteItem: () => void;
}

const ItemList = ({ onBlur, onChange, deleteItem }: ItemListProps) => {
  const [item, setItem] = useState<ItemsI>({ title: "", price: "" });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItem({ ...item, [event.currentTarget.name]: event.currentTarget.value });
    onChange(item);
  };

  return (
    <div className="w-full flex justify-between items-center gap-2">
      <span className="ml-4">•</span>
      <input
        name="title"
        onBlur={onBlur}
        value={item.title}
        onChange={handleOnChange}
        type="text"
        placeholder="รายการสินค้า (ไม่จำเป็น)"
        className="border-2 w-full p-2 rounded-lg flex-1"
      />
      <input
        name="price"
        value={item.price}
        onChange={handleOnChange}
        type="number"
        placeholder="ราคา"
        inputMode="numeric"
        className="border-2 w-24 p-2 rounded-lg"
      />
      <div
        className="bg-red-500 hover:bg-red-400 cursor-pointer p-2 rounded-full"
        onClick={deleteItem}
      >
        <BiTrash color="white" />
      </div>
    </div>
  );
};

export default ItemList;
