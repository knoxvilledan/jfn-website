const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex">
          <a href="/" className="mr-4 hover:text-gray-300">
            Home
          </a>
          <a href="/projects" className="mr-4 hover:text-gray-300">
            Projects
          </a>
          <a href="/blog" className="hover:text-gray-300">
            Blog
          </a>
        </div>
        <div>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
