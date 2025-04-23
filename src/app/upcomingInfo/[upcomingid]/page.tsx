import { MovieType, token } from "@/app/Util";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: Promise<{ upcomingid: string }>;
}

export default async function UpcomingMore(props: Props) {
  const params = await props.params;
  const upcomingid = params.upcomingid;

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
  console.log(upcomingData);

  return (
    <div className="flex flex-wrap w-[1280px] m-auto mt-10 gap-5 overflow-hidden">
      {upcomingData.results?.map((more: MovieType, index: number) => {
        return (
          <Link
            key={index}
            href={`/cardinfo/${more.id}`}
            className="overflow-hidden"
          >
            <Image
              alt=""
              width={281}
              height={300}
              src={`https://image.tmdb.org/t/p/original/${more.poster_path}`}
              className="w-[230px] h-[340px] hover:opacity-50 transition-all ease-in rounded-t-lg"
            />
            <div className="h-[87px] rounded-b-lg">
              <div className="flex gap-2">
                <Image src="/Star.svg" alt="" width={16} height={16} />
                <p>{more.vote_average}/10</p>
              </div>
              <p className="text-[17px]">{more.original_title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
