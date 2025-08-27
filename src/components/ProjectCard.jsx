import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'React + Supabase demo app',
      image: '/src/assets/project1.png',
      repo: '#',
      live: '#'
    },
    {
      title: 'Project Two',
      description: 'Portfolio website built with Vite & Tailwind',
      image: '/src/assets/project2.png',
      repo: '#',
      live: '#'
    },
  ];

  return (
    <div id="projects" className="min-h-screen flex flex-col items-center bg-gray-50 p-8">
      <h2 className="text-5xl font-bold mb-8">Projects</h2>
      <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
