
import { Hero } from "../../Components/hero/Hero"
import { Pricing } from "../../Components/pricing/Pricing"
import Gallery from "../../Components/gallery/Gallery"
import Programs from "../../Components/programs/Programs"
import Choose from "../../Components/choose/Choose"



export const Home = () => {
  return (
    <>
      <Hero />
      <main className="container mx-auto pb-28 lg:pb-36 pt-20">
       <Programs />
      </main>
      
      <Choose />

      <Pricing />

      <Gallery />
    </>
  )
}
