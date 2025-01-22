import Image from "next/image";
import { MovieType, token } from "../Util";

export default async function Cover() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );

  const data = await response.json();

  return (
    <div className="flex overflow-scroll ">
      {data.results.slice(0, 3).map((movie: MovieType, index: number) => {
        return (
          <div key={index}>
            <Image
              alt=""
              width={1000}
              height={1000}
              className="min-w-[1440px] h-[600px]"
              src={"https://image.tmdb.org/t/p/w500/" + movie?.backdrop_path}
            />
          </div>
        );
      })}
      <div>
        <p>Now PLaying</p>
        <h1>Wicked</h1>
      </div>
    </div>
  );
}
