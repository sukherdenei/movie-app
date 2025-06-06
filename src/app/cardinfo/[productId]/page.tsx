import Image from "next/image";
import { genreType, MovieType, token } from "../../Util";
import Link from "next/link";
import { DialogCloseButton } from "@/app/_components/Dialog";

interface Props {
  params: Promise<{ productId: string }>;
}

export default async function CardInfo(props: Props) {
  const params = await props.params;
  const productId = params.productId;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${productId}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();

  const actors = await fetch(
    `https://api.themoviedb.org/3/movie/${productId}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const actorsData = await actors.json();

  const moreLikeThis = await fetch(
    `https://api.themoviedb.org/3/movie/${productId}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const moreLikeData = await moreLikeThis.json();
  console.log("Crew data", actorsData);

  const filter = actorsData.crew
    .filter((crew: MovieType) => crew.job.toLowerCase().includes("direct"))
    .slice(1, 2)
    .map((director: MovieType, index: number) => (
      <p key={index}>{director.name}</p>
    ));

  return (
    <div className="w-[1080px] p-5 m-auto ">
      <div className="flex justify-between mt-5 mb-5">
        <div>
          <p>{data.original_title}</p>
          <p>{data.release_date}</p>
        </div>

        <div className="header-right">
          <h2>Rating</h2>
          <div className="flex  justify-center items-center gap-2">
            <Image
              src="/Star.svg"
              alt=""
              className="w-[28px] h-[28px]"
              width={16}
              height={16}
            />
            <p>{data.vote_average?.toFixed(1)}/10</p>
            <p>{data.vote_count}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-8 mb-5">
        <Image
          alt=""
          width={1000}
          height={1000}
          className="w-[290px] h-[428px] cursor-pointer rounded-lg"
          src={"https://image.tmdb.org/t/p/original/" + data?.poster_path}
        />
        <div className="relative rounded-sm">
          <div className="bg-black opacity-45">
            <Image
              width={400}
              height={300}
              src={"https://image.tmdb.org/t/p/original/" + data?.poster_path}
              alt=""
              className="w-[760px] h-[428px] rounded-sm "
            />
          </div>
          <DialogCloseButton />
        </div>
      </div>

      <div className="flex gap-9">
        {data.genres?.map((genre: genreType, index: number) => {
          return <button key={index}>{genre.name}</button>;
        })}
      </div>
      <p className="w-[1080px] h-[90px]">{data.overview}</p>
      <div>
        <h5 className="gap-5 flex">
          {actorsData?.crew[0]?.job} {filter}
        </h5>
        <p>{actorsData?.crew[1]?.department}</p>
        <div className="stars flex">
          {actorsData?.cast
            ?.slice(0, 5)
            .map((star: genreType, index: number) => {
              return <p key={index}>{star.name}</p>;
            })}
        </div>
      </div>

      <div className="MORE-LIKE-THIS SEE MORE flex justify-between">
        <h1>More like this</h1>
        <Link href={`/similiar/${productId}`}>See more</Link>
      </div>

      <div className="moreLikeThisDiv flex gap-5 mt-5 justify-between">
        {moreLikeData?.results
          ?.slice(0, 5)
          ?.map((like: MovieType, index: number) => {
            return (
              <Link key={index} href={`/cardinfo/${like.id}`}>
                <div
                  className="w-[190px] h-[372px] overflow-hidden"
                  key={index}
                >
                  <Image
                    alt=""
                    width={281}
                    height={300}
                    src={`https://image.tmdb.org/t/p/original/${like.poster_path}`}
                    className="rounded-t-lg w-[190px] h-[281px] hover:opacity-50 transition-all ease-in"
                  />
                  <div className="cardsInfo bg-zinc-900 rounded-lg p-3 h-[87px]">
                    <div className="svg vote flex gap-2">
                      <Image
                        className="w-[16px] h-[16px]"
                        src="/Star.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      {like.vote_average.toFixed(1)} / 10
                    </div>
                    <p className="text-[18px]">{like.original_title}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
