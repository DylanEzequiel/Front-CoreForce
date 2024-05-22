import { Link } from "react-router-dom";

export const TrainerLinks = () => {
  return (
    <>
      <li>
        <Link
          to="/upload-exercises"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">Upload Exercises</span>
          <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
            New
          </span>
        </Link>
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
        <Link
          to="trainer/student-list"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">Student List</span>
          <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
            New
          </span>
        </Link>
      </li>

      <li>
        <Link
          to="trainer/create-routine"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">Create Routine</span>
          <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
            New
          </span>
        </Link>
      </li>
    </>
  );
};
