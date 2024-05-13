import { Link } from "react-router-dom"


export const ErrorPage = () => {
  return (
    <div className="min-h-screen py-24 mx-auto container">
      <h1>Oops!</h1>
      <p>404, La pagino no existe.</p>
      <Link to={'/'} className="">Volver al Home</Link>
    </div>
  )
}
