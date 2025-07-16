import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Task Manager
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link to="/tasks" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            Tasks
          </Link>
          <Link to="/api-demo" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            API Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};