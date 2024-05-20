import { Link } from "react-router-dom"


export const Trainer = () => {
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <header className="mb-4 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="text-center">
        <h1 className="text-6xl font-bold">Welcome, Trainer!</h1>
        <p className="text-gray-700 text-lg">Here are your latest updates and quick access to important features.</p>
        </div>
        <img src="/img/home-img.png" className="w-2/3 mx-auto"/>
      </header>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Access</h2>
        <ul>
          <li>
            <Link
              to="/#"
              className="flex items-center p-4 mb-2 text-gray-900 bg-white rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Upload Exercises</span>
              <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium   rounded-full bg-gray-700 text-gray-300">
                New
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="flex items-center p-4 mb-2 text-gray-900 bg-white rounded-lg shadow  hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Chat</span>
              <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full bg-gray-700 text-gray-300">
                3
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="flex items-center p-4 mb-2 text-gray-900 bg-white rounded-lg shadow  hover:bg-gray-700"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Progress Tracking</span>
              <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium  rounded-full bg-gray-700 text-gray-300">
                Pro
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/
              #"
              className="flex items-center p-4 mb-2 text-gray-900 bg-white rounded-lg shadow  hover:bg-gray-700"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Diet Plans</span>
              <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium  rounded-full bg-gray-700 text-gray-300">
                New
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="flex items-center p-4 mb-2 text-gray-900 bg-white rounded-lg shadow  hover:bg-gray-700"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Notifications</span>
              <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium  rounded-full bg-gray-700 text-gray-300">
                5
              </span>
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Latest Notifications</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-700">You have 5 new messages and 3 new exercise submissions to review.</p>
          {/* Add more detailed notifications here */}
        </div>
      </section>
    </div>
  )
}
