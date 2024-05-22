import { Link } from "react-router-dom";

export const UserLinks = () => {
  return (
    <>
    <li>
        <Link
          to="profile"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
        </Link>
      </li>

      <li>
        <Link
          to="routines"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">Routines</span>
        </Link>
      </li>

      <li>
        <Link
          to="select-trainer"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">Select Trainer</span>
        </Link>
      </li>

      <li>
        <Link
          to="payment-history"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">Payment History</span>
        </Link>
      </li>

      <li>
        <Link
          to="update-plan"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">Update Plan</span>
        </Link>
      </li>

      <li>
        <Link
          to="/logout"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
        </Link>
      </li>
    </>
  );
};
