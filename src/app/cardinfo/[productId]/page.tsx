import Image from "next/image";
import Header from "../../_components/Header";
import { genreType, MovieType, token } from "../../Util";

export default async function CardInfo({
  params: { productId },
}: {
  params: { productId: string };
}) {
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
  console.log(data);
  return (
    <div className="w-[1280px] p-5">
      <Header />
      <p>{data.original_title}</p>
      <p>{data.release_date}</p>
      <div className="right flex float-end gap-2">
        <img src="/Star.svg" alt="" className="w-[30px] h-[50px]" />
        <div>
          <h2>Rating</h2>
          <p>{data.vote_average}/10</p>
          <p>{data.vote_count}</p>
        </div>
      </div>

      <Image
        alt=""
        width={1000}
        height={1000}
        className="w-[280px] h-[428px] cursor-pointer rounded-lg"
        src={"https://image.tmdb.org/t/p/original/" + data?.poster_path}
      />
      <div className="flex gap-9">
        {data.genres.map((genre: genreType, index: number) => {
          return <button key={index}>{genre.name}</button>;
        })}
      </div>
      <p className="w-[1080px] h-[90px]">{data.overview}</p>
      <h2>{data.directer}</h2>
    </div>
  );
}
