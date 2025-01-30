import Image from "next/image";
import { MovieType, token } from "../../Util";
import { ToggleGroupDemo } from "@/app/_components/ButtonToggle";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default async function SearchPage({
  params: { searchId },
}: {
  params: { searchId: string };
}) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchId}&language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);

  return (
    <div className="flex justify-between w-[1280px] m-auto mt-10">
      <div className="w-[387px] h-[352px]">
        <ToggleGroupDemo />
      </div>
      <div>
        <h1>Search results</h1>
        <div className="w-[800px] gap-2 rounded-t-sm flex flex-wrap">
          {data.results?.map((movie: MovieType, index: number) => {
            return (
              <Card>
                <Link href={`/cardinfo/${movie.id}`} key={index}>
                  <Image
                    alt=""
                    width={281}
                    height={300}
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    className="rounded-t-lg w-[190px]"
                  />
                  <div className="flex gap-2">
                    <img src="/Star.svg" alt="" />
                    <p>{movie.vote_average}/10</p>
                  </div>
                  <p>{movie.title}</p>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
