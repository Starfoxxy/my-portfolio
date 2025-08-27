export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <ul className="flex justify-center gap-8 p-4 text-lg font-semibold">
          <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
        </ul>
      </nav>
    );
  }
  