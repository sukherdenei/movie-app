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
    <div className="flex flex-wrap m-auto justify-between mt-10 w-[1280px]">
      {moreLikeData.results?.map((similiar: MovieType, index: number) => {
        return (
          <Link
            href={`/cardinfo/${similiar.id}`}
            key={index}
            className="w-[230px] h-[439px]"
          >
            <div className="w-[230px] h-[439px] rounded-b-md ">
              <Image
                alt=""
                width={1000}
                height={1000}
                src={`https://image.tmdb.org/t/p/original/${similiar.poster_path}`}
                className="object-cover w-[230px] h-[340px] cursor-pointer rounded-t-lg hover:opacity-50 transition-all ease-in"
              />
              <div className="flex gap-1 mb-[5px] h-[95px]">
                <img src="/Star.svg" alt="" className="w-[16px] h-[16px]" />
                <div className="text-[14px] font-semibold">
                  {similiar.vote_average.toFixed(1)}
                  <span className="text-[12px] font-medium">/10</span>
                  <p className="text-[18px]">{similiar.original_title}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
