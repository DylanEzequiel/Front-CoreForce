import { Link } from "react-router-dom"


export const Trainer = () => {
  return (
    <div className="mx-auto p-4 min-h-screen container">
      <header className="items-center grid grid-cols-1 md:grid-cols-2 mb-4">
        <div className="text-center">
        <h1 className="font-bold text-6xl text-slate-700">Welcome, Trainer!</h1>
        <p className="text-gray-700 text-lg">Here are your latest updates and quick access to important features.</p>
        </div>
        <img src="/img/home-img.png" className="mx-auto w-2/3"/>
      </header>


      <section className="mb-8">
        <h2 className="mb-4 font-semibold text-2xl">Quick Access</h2>
        <ul>
          <li>
            <Link
              to="/user/trainer/upload-exercises"
              className="flex items-center bg-white hover:bg-gray-100 dark:hover:bg-gray-300 shadow mb-2 p-4 rounded-lg text-gray-900"
            >
              <span className="flex-1 whitespace-nowrap ms-3">Upload Exercises</span>
              <span className="inline-flex justify-center items-center bg-gray-700 px-2 rounded-full font-medium text-gray-300 text-sm ms-3">
                New
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="flex items-center bg-white hover:bg-gray-100 dark:hover:bg-gray-300 shadow mb-2 p-4 rounded-lg text-gray-900"
            >
              <span className="flex-1 whitespace-nowrap ms-3">Chat</span>
              <span className="inline-flex justify-center items-center bg-gray-700 px-2 rounded-full font-medium text-gray-300 text-sm ms-3">
                3
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="flex items-center bg-white hover:bg-gray-300 shadow mb-2 p-4 rounded-lg text-gray-900"
            >
              <span className="flex-1 whitespace-nowrap ms-3">Progress Tracking</span>
              <span className="inline-flex justify-center items-center bg-gray-700 px-2 rounded-full font-medium text-gray-300 text-sm ms-3">
                Pro
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/
              #"
              className="flex items-center bg-white hover:bg-gray-300 shadow mb-2 p-4 rounded-lg text-gray-900"
            >
              <span className="flex-1 whitespace-nowrap ms-3">Diet Plans</span>
              <span className="inline-flex justify-center items-center bg-gray-700 px-2 rounded-full font-medium text-gray-300 text-sm ms-3">
                New
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="flex items-center bg-white hover:bg-gray-300 shadow mb-2 p-4 rounded-lg text-gray-900"
            >
              <span className="flex-1 whitespace-nowrap ms-3">Notifications</span>
              <span className="inline-flex justify-center items-center bg-gray-700 px-2 rounded-full font-medium text-gray-300 text-sm ms-3">
                5
              </span>
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 font-semibold text-2xl">Latest Notifications</h2>
        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-700">You have 5 new messages and 3 new exercise submissions to review.</p>
          {/* Add more detailed notifications here */}
        </div>
      </section>
    </div>
  )
}
