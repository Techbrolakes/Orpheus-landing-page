import { FiSun } from "react-icons/fi";

export default function Navbar() {
  return (
    <>
      <nav className="shadow-xl border-b flex justify-between items-center py-4 px-12">
        <img src="/Logo.png" alt="logo" />

        <ul className="flex justify-between gap-8 uppercase items-center pt-2 cursor-pointer">
          <li>Works</li>
          <li>Contribution</li>
          <li>Community</li>
          <li>Get in Touch</li>
          <FiSun className="text-2xl" />
        </ul>
      </nav>
    </>
  );
}
