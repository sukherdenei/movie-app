import { ToggleGroupDemo } from "@/app/_components/ButtonToggle";
import { MovieType, token } from "@/app/Util";
import Link from "next/link";

export default async function genrePage({
  params: { genrelink },
}: {
  params: { genrelink: string };
}) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genrelink}&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const genre = await response.json();
  return (
    <div className="flex w-[1280px] m-auto bg-slate-500 justify-between mt-10">
      <div className="w-[600px]">
        <ToggleGroupDemo />
      </div>
      <div className="w-[600px] flex flex-wrap justify-between bg-purple-700 gap-5">
        {genre.results?.map((genres: MovieType, index: number) => {
          return (
            <div key={index}>
              <Link href={`/cardinfo/${genres.id}`}>
                <div className="w-[165px] h-[331px] border-amber-400 bg-stone-800 rounded-md">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${genres.poster_path}`}
                    alt=""
                    className="w-[165px] h-[244px] rounded-t-md"
                  />
                  <div className="">
                    <img src="/Star.svg" alt="" />
                    {genres.vote_average}/10
                  </div>
                  {genres.original_title}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
