import { useState, FormEvent } from "react";
import { toCurrency } from "@utils/toCurrency";

interface TimeFormProps {
  placeholder?: string;
}

function TimeForm({ placeholder }: TimeFormProps) {
  const now = new Date();
  const inTimeFormat =
    now.getHours().toString().padStart(2, "0") +
    ":" +
    now.getMinutes().toString().padStart(2, "0");
  const [value, setValue] = useState<string>(inTimeFormat);
  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="time"
          style={{ border: "1.5px solid #2e2e2e" }}
          className="border-2 rounded-lg p-2 pb-2 w-full text-md"
          value={value}
          onChange={handleOnChange}
        />
      </div>

      <p className="absolute -top-3 left-2 bg-white px-2 font-normal text-sm">
        เวลา
      </p>
    </div>
  );
}

export default TimeForm;
