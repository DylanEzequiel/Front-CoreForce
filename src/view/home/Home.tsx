
import { Hero } from "../../Components/hero/Hero"

import Gallery from "../../Components/gallery/Gallery"
// import Programs from "../../Components/programs/Programs"
import Choose from "../../Components/choose/Choose"



export const Home = () => {
  return (
    <>
      <Hero />
      <main className="mx-auto pt-10 pb-10 lg:pb-36 container">
       {/* <Programs /> */}
      </main>
      
      <Choose />

      {/* <Pricing /> */}

      <Gallery />
    </>
  )
}
