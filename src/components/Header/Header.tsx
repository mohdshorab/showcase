import type React from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-screen flex justify-between items-center px-12 py-5 border-b border-white/10 backdrop-blur-md">
      <a
        href="/"
        className=" text-lg font-display font-medium uppercase cursor-pointer text-gradient-accent tracking-widest"
      >
        Shorab<span className="text-accent-green">.</span>
      </a>
      <nav>
        <ul className="flex items-center list-none gap-10 font-body">
          {NAV_LINKS.map((skill) => (
            <li key={skill.label}>
              <a
                href={skill.href}
                className="group relative text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 ease-out px-1"
              >
                {skill.label}
                <span className="absolute bg-accent-green -bottom-1 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <motion.a
        href="#contact"
        animate={{
          boxShadow: [
            "0 0 0px rgba(34,197,94,0.3)",
            "0 0 20px rgba(34,197,94,0.5)",
            "0 0 0px rgba(34,197,94,0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="border border-gray-500 hover:border-accent-green transition-colors duration-300 ease-out rounded-xl px-4 py-1.5 text-xs uppercase tracking-widest text-white hover:text-accent-green"
      >
        Hire Me
      </motion.a>
    </header>
  );
};

export default Header;
