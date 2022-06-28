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
      <div
        className="relative pt-2 border-2 rounded-lg px-2 text-lg w-full"
        style={{ border: "1.5px solid #2e2e2e" }}
      >
        <textarea
          maxLength={200}
          rows={3}
          value={value}
          onChange={handleOnChange}
          className="w-full outline-none max-h-48 resize-none text-md"
        />
      </div>
      <p className="text-sm text-right">{value.length}/200</p>

      <p className="absolute -top-3 left-2 bg-white px-2 font-normal text-sm">
        คำอธิบายเพิ่มเติม (ไม่จำเป็นต้องกรอก)
      </p>
    </div>
  );
}

export default Description;
