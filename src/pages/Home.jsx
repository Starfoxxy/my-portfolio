import Sparkle from '../components/Sparkle';

export default function Home() {
  return (
    <div id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-100 to-blue-100 relative overflow-hidden">
      <Sparkle />
      <Sparkle />
      <Sparkle />

      <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: 'YourHeadingFont' }}>
        Hi, I'm Athena Jacob
      </h1>
      <p className="text-2xl text-gray-700">Software Engineer | React & Supabase</p>
      <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition relative">
        Works
        <Sparkle />
      </button>
    </div>
  );
}
