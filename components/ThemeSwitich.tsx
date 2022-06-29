import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
type Theme = "light" | "dark";
function ThemeSwitich() {
  const [theme, setTheme] = useState<Theme>("light");

  const handleOnClick = () => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };

  return (
    <button className="bg-white p-2 rounded-full" onClick={handleOnClick}>
      {theme === "light" && <BsSunFill />}
      {theme === "dark" && <BsMoonFill />}
    </button>
  );
}

export default ThemeSwitich;
