import { useState, FormEvent } from "react";
import { toCurrency } from "@utils/toCurrency";

interface DescriptionProps {
  placeholder?: string;
}

function Description({ placeholder }: DescriptionProps) {
  const [value, setValue] = useState<string>("");

  const handleOnChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <div className="relative w-full">
      <div className="relative">
        <textarea
          style={{ border: "1.5px solid #2e2e2e" }}
          className="border-2 rounded-lg p-2 pb-2 pt-4 text-lg w-full"
          maxLength={200}
          value={value}
          onChange={handleOnChange}
        />
        <p className="text-sm text-right">{value.length}/200</p>
      </div>

      <p className="absolute -top-3 left-2 bg-white px-2 font-normal">
        คำอธิบายเพิ่มเติม (ไม่จำเป็นต้องกรอก)
      </p>
    </div>
  );
}

export default Description;
