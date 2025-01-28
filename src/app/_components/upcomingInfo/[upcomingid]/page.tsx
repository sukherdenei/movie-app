import { MovieType, token } from "@/app/Util";
import Image from "next/image";

export default async function UpcomingMore({
  params: { id },
}: {
  params: { id: string };
}) {
  const upcomingMore = await fetch(
    `https://image.tmdb.org/t/p/movie/${id}upcoming?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const upcomingData = await upcomingMore.json();

  return (
    <div>
      {upcomingData.results.map((more: MovieType, index: number) => {
        return (
          <Image
            alt=""
            width={281}
            height={300}
            src={`https://image.tmdb.org/t/p/original/${more.poster_path}`}
            className="w-[230px] h-[340px] "
          />
        );
      })}
    </div>
  );
}
