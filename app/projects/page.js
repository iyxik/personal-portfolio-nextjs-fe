import axios from "axios";

export default async function Projects() {
  const res = await axios.get("http://localhost:1337/api/projects");
  const projects = res.data.data;

  return (
    <main className="projects container">
      <h2 className="text-4xl text-center mb-12">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <div className="project-info">
              <h3>{p.title}</h3>
              {p.description?.map((block, i) => (
                <p key={i} className="mb-2">
                  {block.children.map((child) => child.text).join("")}
                </p>
              ))}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  View
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}