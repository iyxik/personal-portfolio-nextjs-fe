export default function Header() {
    return (
      <header className="p-6 bg-white dark:bg-black shadow-md">
        <nav className="flex justify-between max-w-6xl mx-auto">
          <h1 className="text-xl font-bold">Isaac's Portfolio</h1>
          <ul className="flex gap-4">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }