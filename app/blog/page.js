import axios from "axios";

export default async function Blog() {
  const res = await axios.get("http://localhost:1337/api/blogs");
  const posts = res.data.data;

  return (
    <main className="projects container">
      <h2 className="text-4xl text-center mb-12">Blog</h2>
      <div className="projects-grid">
        {posts.map((post) => (
          <div key={post.id} className="project-card">
            <div className="project-info">
              <h3>{post.title}</h3>
              {post.content?.map((block, i) => (
                <p key={i} className="mb-2">
                  {block.children.map((child) => child.text).join("")}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}