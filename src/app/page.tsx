import Cards from "./_components/Cards";
import Popular from "./_components/Popular";
import TopRated from "./_components/TopRated";
import Carousels from "./_components/Carousel";

export default async function Home() {
  return (
    <div className="flex flex-col m-auto gap-5">
      <Carousels />
      <Cards />
      <Popular />
      <TopRated />
    </div>
  );
}
