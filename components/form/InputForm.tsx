interface InputFormProps {
  placeholder: string;
}

function InputForm({ placeholder }: InputFormProps) {
  return (
    <div className="relative">
      <input type="text" className="w-full border-2 rounded-lg p-2 text-lg" />
      <p className="absolute -top-2 left-2 bg-white px-2 font-normal">
        {placeholder}
      </p>
    </div>
  );
}

export default InputForm;
