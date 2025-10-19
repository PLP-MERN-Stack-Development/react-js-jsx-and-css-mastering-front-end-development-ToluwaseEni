export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-4 mt-10 dark:bg-gray-800 dark:text-gray-300">
      <p>© {new Date().getFullYear()} Task Manager</p>
    </footer>
  );
}
