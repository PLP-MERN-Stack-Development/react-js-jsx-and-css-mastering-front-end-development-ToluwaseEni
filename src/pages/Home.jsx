import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Welcome to Your Task Manager App
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Build, manage, and track your tasks efficiently. Explore the app below!
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/tasks">
          <Button variant="primary" size="lg">
            Go to Task Manager
          </Button>
        </Link>
        <Link to="/api">
          <Button variant="secondary" size="lg">
            View API Data
          </Button>
        </Link>
      </div>

      <div className="mt-10 text-gray-500 dark:text-gray-400 text-sm">
        <p>
          This project is built with <span className="font-semibold">React.js</span> and{" "}
          <span className="font-semibold">Tailwind CSS</span>.
        </p>
      </div>
    </div>
  );
}
