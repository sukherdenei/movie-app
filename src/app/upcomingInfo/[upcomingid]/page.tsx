import { MovieType, token } from "@/app/Util";
import Image from "next/image";
import Link from "next/link";

export default async function UpcomingMore({
  params: { upcomingid },
}: {
  params: { upcomingid: string };
}) {
  const upcomingMore = await fetch(
    `https://api.themoviedb.org/3/movie/${upcomingid}?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const upcomingData = await upcomingMore.json();

  return (
    <div className="flex flex-wrap w-[1280px] m-auto mt-10 gap-5">
      {upcomingData.results.map((more: MovieType, index: number) => {
        return (
          <Link href={`/cardinfo/${more.id}`} className="hover:opacity-50">
            <Image
              alt=""
              width={281}
              height={300}
              src={`https://image.tmdb.org/t/p/original/${more.poster_path}`}
              className="w-[230px] h-[340px] "
            />
            <div className="flex gap-2">
              <img src="/Star.svg" alt="" />
              <p>{more.vote_average}/10</p>
            </div>
            <p>{more.original_title}</p>
            {/* <p>{more.release_date}</p> */}
          </Link>
        );
      })}
    </div>
  );
}
