import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { NavContext } from "../../contexts/NavContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { nav, setNav } = useContext(NavContext);

  const ToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const ToggleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav
        className="shadow-xl border-b-2 dark:border-[#0a0c10] border-slate-100 flex justify-between items-center py-4 px-4 lg:px-12"
        data-aos="fade-in"
      >
        <img src="/Logo.png" alt="logo" className="hidden dark:inline-block" />
        <img src="/lightlogo.png" alt="logo" className="dark:hidden" />

        <ul className="hidden lg:flex justify-between gap-8 uppercase items-center pt-2 cursor-pointer">
          <a href="#works">
            <li>Works</li>
          </a>

          <a href="#contribution">
            <li>Contribution</li>
          </a>

          <a href="#contact">
            <li>Community</li>
          </a>

          <a href="#contact">
            <li>Get in Touch</li>
          </a>

          {theme === "light" ? (
            <FiMoon className="text-2xl" onClick={ToggleTheme} />
          ) : (
            <FiSun className="text-2xl" onClick={ToggleTheme} />
          )}
        </ul>

        <ul className="flex gap-4 items-center lg:hidden">
          {theme === "light" ? (
            <FiMoon className="text-3xl" onClick={ToggleTheme} />
          ) : (
            <FiSun className="text-3xl text-[#D9A23F]" onClick={ToggleTheme} />
          )}

          {nav ? (
            <FaTimes className="text-3xl cursor-pointer" onClick={ToggleNav} />
          ) : (
            <RiBarChartHorizontalLine
              className="text-3xl cursor-pointer"
              onClick={ToggleNav}
            />
          )}
        </ul>
      </nav>

      {nav && (
        <ul className="flex flex-col justify-between items-center text-2xl md:text-3xl uppercase gap-12 lin">
          <a href="#works" onClick={ToggleNav}>
            <li>Works</li>
          </a>

          <a href="#contribution" onClick={ToggleNav}>
            <li>Contribution</li>
          </a>

          <a href="#contribution" onClick={ToggleNav}>
            <li>Community</li>
          </a>

          <a href="#contact" onClick={ToggleNav}>
            <li>Get in Touch</li>
          </a>

          {theme === "light" ? (
            <FiMoon className="text-6xl" onClick={ToggleTheme} />
          ) : (
            <FiSun className="text-6xl text-[#D9A23F]" onClick={ToggleTheme} />
          )}
        </ul>
      )}
    </>
  );
}
