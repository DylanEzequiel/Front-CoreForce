import { Link } from "react-router-dom";

export const TrainerLinks = () => {
  return (
    <>
      <li>
        <Link
          to="trainer"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
          <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
            3
          </span>
        </Link>
      </li>
      <li>
        <a
          href="#upload-exercises"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">
            Upload Exercises
          </span>
          <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
            New
          </span>
        </a>
      </li>

      <li>
        <Link
          to="trainer/chat"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">Chat</span>
          <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
            3
          </span>
        </Link>
      </li>

      <li>
        <a
          href="#progress-tracking"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">
            Progress Tracking
          </span>
          <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
            Pro
          </span>
        </a>
      </li>

      <li>
        <a
          href="#diet-plans"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">Diet Plans</span>
          <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
            New
          </span>
        </a>
      </li>

      <li>
        <a
          href="#notifications"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">Notifications</span>
          <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
            5
          </span>
        </a>
      </li>
    </>
  );
};
