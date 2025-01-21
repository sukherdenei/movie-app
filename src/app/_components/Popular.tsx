import { MovieType, token } from "../util";
import Image from "next/image";

export default async function Popular() {
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

  return (
    <div className="flex mx-[auto] flex-col w-[1280px] mt-5 justify-center">
      <h1 className="pb-5 text-3xl">Popular</h1>
      <div className="flex flex-wrap gap-5 justify-between">
        {data.results.slice(0, 10).map((movie: MovieType, index: number) => {
          return (
            <div key={index}>
              <Image
                alt=""
                width={1000}
                height={1000}
                className="w-[230px] h-[439px] cursor-pointer rounded-lg"
                src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
