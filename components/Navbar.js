import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  return (
    <nav className={`bg-gray-800 text-white p-4 shadow ${styles.lightning}`}>
      <div className="container mx-auto flex justify-between">
        <div className="flex">
          {navLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="mr-4 hover:text-gray-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
