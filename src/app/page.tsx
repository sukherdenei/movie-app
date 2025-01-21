import Header from "./_components/Header";
import TopRated from "./_components/TopRated";
import { MovieType } from "./util";
import { token } from "./util";
import Cover from "./_components/Cover";

export default async function Home() {
  // fetch movie info setMovie //
  // const token =
  //   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmZiMWY2ZTA2ZWI2YzE3MGJjZWI0ODUzMzY1MWJjZiIsIm5iZiI6MTczNzM0MjU0NS42MjQsInN1YiI6IjY3OGRiZTUxZDhhNWIwZDAwYzQzNGNmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dmDhnJpGWqwqyuPSu6Vaqv1Chq-b3BmRKojdw8AMHM4";

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  // console.log({ data });

  return (
    <div className=" m-auto flex flex-col gap-10">
      <Header />

      <Cover data={data} />
      <div className="CARDS flex gap-10 max-w-[1480px] h-[910px] justify-center flex-wrap mx-[auto] ">
        {data.results.slice(0, 10).map((movie: MovieType, index: number) => {
          return (
            <div key={index}>
              <div className="">
                <img
                  className="w-[230px] h-[439px] cursor-pointer rounded-lg"
                  src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
                  alt=""
                />
                <div className="svg&vote flex gap-2 ">
                  <img src="./Star.svg" alt="" />
                  <p>{movie?.vote_average}/10</p>
                </div>
                <h1>{movie?.original_title}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <TopRated />
    </div>
  );
}
