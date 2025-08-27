export default function About() {
    return (
      <div id="about" className="min-h-screen flex flex-col justify-center items-center p-8 bg-white text-center">
        <h2 className="text-5xl font-bold mb-6">About Me</h2>
        <p className="max-w-xl text-gray-700 text-lg mb-4">
          I’m a <span className="text-blue-500 font-semibold">Software Engineer</span> passionate about building <span className="text-pink-500 font-semibold">Full-Stack applications</span> with <span className="text-purple-500 font-semibold">React</span>, <span className="text-yellow-500 font-semibold">Supabase</span>, and <span className="text-green-500 font-semibold">Tailwind CSS</span>. I love creating <span className="underline decoration-pink-500">interactive and responsive UIs</span> that solve real-world problems.
        </p>
      </div>
    );
  }  