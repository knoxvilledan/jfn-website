const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow">
      <div className="container mx-auto flex justify-between">
        <div className="flex">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="mr-4 hover:text-gray-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
