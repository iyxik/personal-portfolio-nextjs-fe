import axios from "axios";

export default async function Home() {
  const res = await axios.get("http://localhost:1337/api/home");
  const home = res.data.data;

  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>{home.title}</h1>
        {home.Intro?.map((block, index) => (
          <p key={index} className="text-xl md:text-2xl mt-4">
            {block.children.map(child => child.text).join("")}
          </p>
        ))}
      </div>
    </main>
  );
}