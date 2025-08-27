export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md text-white z-50">
      <ul className="flex justify-center space-x-6 p-4">
        <li><a href="#home" className="hover:text-pink-400 transition">Home</a></li>
        <li><a href="#about" className="hover:text-pink-400 transition">About</a></li>
        <li><a href="#projects" className="hover:text-pink-400 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
      </ul>
    </nav>
  );
}
