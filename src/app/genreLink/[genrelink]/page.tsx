import { ToggleGroupDemo } from "@/app/_components/ButtonToggle";
import { MovieType, token } from "@/app/Util";
import Image from "next/image";
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
  console.log(genre);

  return (
    <div className="flex w-[1280px] m-auto justify-between mt-10">
      <div className="w-[400px]">
        <ToggleGroupDemo />
      </div>
      <h1>{genre.total_results} title</h1>
      <div className="w-[800px] flex flex-wrap justify-between  gap-5">
        {genre.results?.map((genres: MovieType, index: number) => {
          return (
            <div key={index}>
              <Link href={`/cardinfo/${genres.id}`}>
                <div className="w-[165px] h-[331px] border-amber-400 bg-stone-800 rounded-md">
                  <Image
                    width={200}
                    height={200}
                    src={`https://image.tmdb.org/t/p/original/${genres.poster_path}`}
                    alt=""
                    className="w-[165px] h-[244px] rounded-t-md"
                  />
                  <div className="">
                    <img src="/Star.svg" alt="" />
                    <p> {genres.vote_average}/10</p>
                  </div>
                  <p>{genres.title}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
