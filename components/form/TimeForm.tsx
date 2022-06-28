import { useState, FormEvent } from "react";
import { toCurrency } from "@utils/toCurrency";

interface TimeFormProps {
  placeholder?: string;
}

function TimeForm({ placeholder }: TimeFormProps) {
  const [value, setValue] = useState<string>("");
  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="time"
          style={{ border: "1.5px solid #2e2e2e" }}
          className="border-2 rounded-lg p-2 pb-2 pt-4 text-lg w-full"
          value={value}
          onChange={handleOnChange}
        />
      </div>

      <p className="absolute -top-3 left-2 bg-white px-2 font-normal">เวลา</p>
    </div>
  );
}

export default TimeForm;
