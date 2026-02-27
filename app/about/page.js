import axios from "axios";

export default async function About() {
  const res = await axios.get("http://localhost:1337/api/about");
  const about = res.data.data;

  return (
    <main className="about container">
      <div className="about-content">
   
        <div className="about-text">
          <h2>{about.title}</h2>
          {about.bio?.map((block, index) => (
            <p key={index} className="mb-4">
              {block.children.map((child) => child.text).join("")}
            </p>
          ))}
          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-tags">
              <span>React</span>
              <span>Next.js</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}