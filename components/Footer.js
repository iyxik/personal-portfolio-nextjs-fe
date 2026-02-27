export default function Footer() {
    return (
      <footer className="p-6 bg-gray-100 dark:bg-gray-900 text-center text-sm">
        &copy; {new Date().getFullYear()} Isaac. All rights reserved.
      </footer>
    );
  }