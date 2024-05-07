
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
const {loginWithRedirect} =  useAuth0()

return <button onClick={()=> loginWithRedirect()}>Login</button>

 
// function handleSubmit (e:any){
//       e.preventDefault()
// }

//   return (
//     <div className="flex items-center justify-center h-screen bg-indigo-100">
//       <div className="w-2/3 lg:w-2/5 md:w-1/2">
//         <form className="min-w-full p-10 rounded-lg shadow-lg bg-primary" onSubmit={handleSubmit}>
//           <h1 className="mb-6 font-sans text-2xl font-bold text-center text-gray-600">
//             {/* ESTE ES EL EJEMPLO DE COMO HACER LOS STRINGS (VER CARPETA TRANSLATIONS) */}
//             {EN["free.registration"]}
//           </h1>
//           <div>
//             <label
//               className="block my-3 font-semibold text-gray-800 text-md"
//               htmlFor="username"
//             >
//               Username
//             </label>
//             <input
//               className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
//               type="text"
//               name="username"
//               id="username"
//               placeholder="username"
//             />
//           </div>
//           <div>
//             <label
//               className="block my-3 font-semibold text-gray-800 text-md"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
//               type="text"
//               name="email"
//               id="email"
//               placeholder="@email"
//             />
//           </div>
//           <div>
//             <label
//               className="block my-3 font-semibold text-gray-800 text-md"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
//               type="password"
//               name="password"
//               id="password"
//               placeholder="password"
//             />
//           </div>
//           <div>
//             <label
//               className="block my-3 font-semibold text-gray-800 text-md"
//               htmlFor="confirm"
//             >
//               Confirm password
//             </label>
//             <input
//               className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
//               type="password"
//               name="confirm"
//               id="confirm"
//               placeholder="confirm password"
//             />
//           </div>
//           <button
//             className="w-full px-4 py-2 mt-6 font-sans text-lg font-semibold tracking-wide text-white border rounded-lg bg-secondary hover:bg-primary"
//             type="submit"
//           >
//             Register
//           </button>
//           <button
//             className="w-full px-4 py-2 mt-6 mb-3 font-sans text-lg font-semibold tracking-wide text-gray-800 bg-indigo-100 rounded-lg"
//             type="submit"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
};

