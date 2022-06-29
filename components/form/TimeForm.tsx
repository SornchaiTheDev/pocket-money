import { useState, FormEvent, useEffect } from "react";
import { toCurrency } from "@utils/toCurrency";

interface TimeFormProps {
  placeholder?: string;
  isAddnewList: boolean;
}

function TimeForm({ placeholder, isAddnewList }: TimeFormProps) {
  const [value, setValue] = useState<string>("");
  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  useEffect(() => {
    const now = new Date();
    const inTimeFormat =
      now.getHours().toString().padStart(2, "0") +
      ":" +
      now.getMinutes().toString().padStart(2, "0");
    setValue(inTimeFormat);
  }, [isAddnewList]);

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="time"
          style={{ border: "1.5px solid #2e2e2e" }}
          className="border-2 rounded-lg md:p-2 px-2 w-full text-md appearance-none py-4"
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
