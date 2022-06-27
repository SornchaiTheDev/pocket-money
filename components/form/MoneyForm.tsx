import { useState, FormEvent } from "react";
import { toCurrency } from "@utils/toCurrency";

interface MoneyFormProps {
  placeholder: string;
}

function MoneyForm({ placeholder }: MoneyFormProps) {
  const [value, setValue] = useState<string>("");
  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    const valueAsNumber = Number(e.currentTarget.value.replace(",", ""));
    const assignValue = toCurrency(valueAsNumber);
    setValue(assignValue);
  };
  return (
    <div className="relative w-fit">
      <div className="relative w-1/2">
        <input
          type="text"
          className="border-2 rounded-lg p-2 text-lg w-full"
          value={value}
          onChange={handleOnChange}
        />
        <p className="absolute right-2 top-3">฿</p>
      </div>

      <p className="absolute -top-3 left-2 bg-white px-2 font-normal">
        {placeholder}
      </p>
    </div>
  );
}

export default MoneyForm;
