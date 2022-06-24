import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const ToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <nav className="shadow-xl border-b flex justify-between items-center py-4 px-12">
        <img src="/Logo.png" alt="logo" />

        <ul className="flex justify-between gap-8 uppercase items-center pt-2 cursor-pointer">
          <li>Works</li>
          <li>Contribution</li>
          <li>Community</li>
          <li>Get in Touch</li>

          {theme === "light" ? (
            <FiMoon className="text-2xl" onClick={ToggleTheme} />
          ) : (
            <FiSun className="text-2xl" onClick={ToggleTheme} />
          )}
        </ul>
      </nav>
    </>
  );
}
