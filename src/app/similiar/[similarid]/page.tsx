import CardInfo from "@/app/cardinfo/[productId]/page";
import { MovieType, token } from "@/app/Util";
import Image from "next/image";
import Link from "next/link";

export default async function Similiar({
  params: { similarid },
}: {
  params: { similarid: string };
}) {
  const moreLikeThis = await fetch(
    `https://api.themoviedb.org/3/movie/${similarid}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const moreLikeData = await moreLikeThis.json();
  // console.log(moreLikeData);
  return (
    <div className="flex flex-wrap m-auto justify-between mt-10 gap-5 w-[1280px]">
      {moreLikeData.results.map((similiar: MovieType, index: number) => {
        return (
          <Link
            href={`/cardinfo/${similiar.id}`}
            key={index}
            className="w-[230px] h-[439px]"
          >
            <Image
              alt=""
              width={281}
              height={300}
              src={`https://image.tmdb.org/t/p/original/${similiar.poster_path}`}
              className="object-cover w-[230px] h-[340px] cursor-pointer rounded-t-lg"
            />
            <div className="flex">
              <img src="/Star.svg" alt="" />
              <p>{similiar.original_title}</p>
            </div>
            <p>{similiar.vote_average}/10</p>
          </Link>
        );
      })}
    </div>
  );
}
