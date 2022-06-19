import { ChangeEvent, useState } from "react";

interface BudgetInputProps {
  title: string;
  onChange: (value: number) => void;
}
function BudgetInput({ title, onChange }: BudgetInputProps) {
  const [input, setInput] = useState("");
  const handleOnValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value.replace(/,/g, ""));
    onChange(Number(event.target.value.replace(/,/g, "")));
  };
  return (
    <div>
      <h3 className="text-md mb-2">{title}</h3>
      <div className="relative">
        <input
          value={input.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
          onChange={handleOnValueChange}
          placeholder="1000"
          type="text"
          inputMode="numeric"
          className="w-full p-2 border-2 border-gray-300 rounded-lg"
        />
        <h5 className="absolute right-3 bottom-3">บาท</h5>
      </div>
    </div>
  );
}

export default BudgetInput;
