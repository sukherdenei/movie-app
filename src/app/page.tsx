import Header from "./_components/Header";
import Cover from "./_components/Cover";
import Cards from "./_components/Cards";
import TopRated from "./_components/TopRated";
import Popular from "./_components/Popular";
import Footer from "./_components/Footer";

export default async function Home() {
  return (
    <div className=" m-auto flex flex-col gap-10">
      <Header />
      <Cover />
      <Cards />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}
