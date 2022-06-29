import { FormEvent } from "react";

interface InputFormProps {
  placeholder: string;
  className?: string;
  value: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

function InputForm({
  placeholder,
  className,
  value,
  onChange,
}: InputFormProps) {
  return (
    <div className={`relative ${className}`}>
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="w-full rounded-lg p-2 pb-2 pt-4 text-lg"
        style={{ border: "1.5px solid #2e2e2e" }}
      />
      <p className="absolute -top-3 left-2 bg-white px-2 font-normal text-sm">
        {placeholder}
      </p>
    </div>
  );
}

export default InputForm;
