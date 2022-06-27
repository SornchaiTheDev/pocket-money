interface InputFormProps {
  placeholder: string;
  className?: string;
}

function InputForm({ placeholder, className }: InputFormProps) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        className="w-full rounded-lg p-2 pb-3 pt-4 text-lg"
        style={{ border: "1.5px solid #2e2e2e" }}
      />
      <p className="absolute -top-3 left-2 bg-white px-2 font-normal">
        {placeholder}
      </p>
    </div>
  );
}

export default InputForm;
