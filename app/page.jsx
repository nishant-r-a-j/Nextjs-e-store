export const dynamic = "force-dynamic";


import FeaturedProduct from "@/components/home/featuredproducts";
import Hero from "@/components/home/hero";
import RecentAdded from "@/components/home/recentadded";
import Slider from "@/components/home/slider";
import Homecomponentcontainer from "@/components/homecompcontainer";

export default function Home() {
  return (
    <>
      <Homecomponentcontainer>
        <Hero></Hero>
        <Slider></Slider>
      </Homecomponentcontainer>
      
         <Homecomponentcontainer>
          <FeaturedProduct></FeaturedProduct>
         </Homecomponentcontainer>

       <Homecomponentcontainer>
        <RecentAdded></RecentAdded>
       </Homecomponentcontainer>
        </>
  );
}
