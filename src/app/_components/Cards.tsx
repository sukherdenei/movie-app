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
      <div className="flex justify-between items-center">
        <h1 className="pb-[36px] text-[24px] font-semibold">Upcoming</h1>
        <Link href={"/upcomingInfo/upcoming"}>
          <div className="text-[14px]">See more </div>
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
              <div className="w-[230px] h-[439px] flex-1 ">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-[230px] h-[340px] cursor-pointer rounded-t-lg hover:opacity-50 transition-all ease-in"
                  src={
                    "https://image.tmdb.org/t/p/original/" + movie?.poster_path
                  }
                />
                <div className="p-[8px]">
                  <div className="flex gap-1 mb-[5px]">
                    <Image
                      width={16}
                      height={16}
                      src="./Star.svg"
                      alt=""
                      className="w-[16px] h-[16px]"
                    />
                    <p className="text-[14px] font-semibold">
                      {movie?.vote_average.toFixed(1)}
                      <span className="text-[12px] font-medium">/10</span>
                    </p>
                  </div>
                  <h1 className="text-[18px]">{movie?.original_title}</h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
