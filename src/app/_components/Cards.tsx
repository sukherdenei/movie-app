import Link from "next/link";
import { MovieType, token } from "../Util";
import Image from "next/image";

export default async function Cards() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );

  const data = await response.json();

  return (
    <div className="flex mx-[auto] flex-col w-[1280px] mt-5 justify-center ">
      <div className="flex justify-between">
        <h1 className="pb-5 text-3xl">Upcoming</h1>
        <Link
          className=""
          href="https://pinecone-academy-movie-app.vercel.app/category/upcoming"
          target="_blank"
        >
          See more
        </Link>
      </div>

      <div className="flex flex-wrap gap-5 justify-between">
        {data.results.slice(0, 10).map((movie: MovieType, index: number) => {
          return (
            <Link
              className="bg-stone-700 rounded-lg"
              href={`/cardinfo/${movie.id}`}
              key={index}
            >
              <div className="w-[230px] h-[439px]">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-[230px] h-[340px] cursor-pointer rounded-t-lg"
                  src={
                    "https://image.tmdb.org/t/p/original/" + movie?.poster_path
                  }
                />
                <div className="svg&vote flex gap-2">
                  <img src="./Star.svg" alt="" />
                  <p>{movie?.vote_average}/10</p>
                </div>
                <h1 className="p-5">{movie?.original_title}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
