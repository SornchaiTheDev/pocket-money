import { AiOutlinePlus } from "react-icons/ai";
import { ChangeEvent, useState } from "react";
import ItemList from "@components/ItemList";
import { v4 as uuid } from "uuid";
import { ItemsI } from "types/Items";

interface AddListProps {
  type: "income" | "outcome";
}

function AddList({ type }: AddListProps) {
  const [item, setItem] = useState<ItemsI>({ title: "", price: 0 });
  const [items, setItems] = useState<ItemsI[]>([]);

  const handleOnChangeItem = (value: ItemsI, uid: string) => {
    const newItems = items.map((item) => {
      if (item.uid === uid) return { ...value, uid };
      return item;
    });
    setItems(newItems);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItem({
      ...item,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onAddItem = () => {
    setItems([...items, { title: "", price: 0, uid: uuid() }]);
  };

  const onItemBlur = (_uid: string, index: number) => {
    const otherItems = items.filter(({ uid }) => uid !== _uid);
    if (items[index].title.length === 0) setItems(otherItems);
  };

  const handleDeleteItem = (_uid: string) => {
    const otherItems = items.filter(({ uid }) => uid !== _uid);
    setItems(otherItems);
  };

  return (
    <div className="my-4 flex flex-col gap-3">
      <div className="w-full flex justify-between items-center gap-2">
        <input
          type="text"
          name="title"
          onChange={handleOnChange}
          value={item.title}
          placeholder="ชื่อรายการ"
          className="border-2 w-full p-2 rounded-lg flex-1"
        />
        <input
          name="price"
          value={Number(item.price)}
          onChange={handleOnChange}
          type="text"
          placeholder="ราคา"
          inputMode="numeric"
          className="border-2 w-24 p-2 rounded-lg"
        />
      </div>
      {items.map(({ uid }, i) => (
        <ItemList
          deleteItem={() => handleDeleteItem(uid!)}
          key={uid}
          onChange={(value) => handleOnChangeItem(value, uid!)}
          onBlur={() => onItemBlur(uid!, i)}
        />
      ))}
      <button
        className="my-2 w-fit inline-flex items-center gap-2"
        onClick={onAddItem}
      >
        <AiOutlinePlus />
        เพิ่มรายการสินค้า
      </button>
      <div className="flex justify-between items-center gap-4">
        <button className="w-full bg-green-500 text-white rounded-lg p-2 shadow-md">
          บันทึก
        </button>
        <button className="w-full bg-red-500 text-white rounded-lg p-2 shadow-md">
          ยกเลิก
        </button>
      </div>
    </div>
  );
}

export default AddList;
