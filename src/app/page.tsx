import Header from "./_components/Header";
import Cards from "./_components/Cards";
import Popular from "./_components/Popular";
import TopRated from "./_components/TopRated";
import Footer from "./_components/Footer";
import Carousels from "./_components/Carousel";

export default async function Home() {
  return (
    <div className=" m-auto flex flex-col gap-10">
      <Header />
      <Carousels />
      <Cards />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}
