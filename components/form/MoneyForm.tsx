import { useState, FormEvent } from "react";
import { toCurrency } from "@utils/toCurrency";

interface MoneyFormProps {
  placeholder: string;
}

function MoneyForm({ placeholder }: MoneyFormProps) {
  const [value, setValue] = useState<string>("");
  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    const valueAsNumber = Number(e.currentTarget.value.replaceAll(",", ""));
    const assignValue = toCurrency(valueAsNumber);
    setValue(assignValue);
  };
  return (
    <div className="relative w-fit">
      <div className="relative">
        <input
          type="text"
          style={{ border: "1.5px solid #2e2e2e" }}
          className="border-2 rounded-lg p-2 pb-3 pt-4 text-lg w-full"
          value={value}
          inputMode="numeric"
          onChange={handleOnChange}
        />
      </div>

      <p className="absolute -top-3 left-2 bg-white px-2 font-normal">
        {placeholder}
      </p>
    </div>
  );
}

export default MoneyForm;
