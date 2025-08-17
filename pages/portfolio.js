
export default function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      description: "A cool project built with Next.js",
      link: "#"
    },
    {
      title: "Project 2",
      description: "Another awesome project with React",
      link: "#"
    }
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
            <a href={project.link} className="text-blue-600 hover:underline mt-2 inline-block">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
