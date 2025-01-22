import Header from "./_components/Header";
import Cover from "./_components/Cover";
import Cards from "./_components/Cards";
import Popular from "./_components/Popular";
import TopRated from "./_components/TopRated";
import Footer from "./_components/Footer";
import { Carousel } from "@/components/ui/carousel";

export default async function Home() {
  return (
    <div className=" m-auto flex flex-col gap-10">
      <Header />
      <Carousel />
      {/* <Cover /> */}
      <Cards />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}
