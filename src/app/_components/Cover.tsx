import Image from "next/image";
import { token } from "../util";
import { MovieType } from "../util";

export default async function Cover({ data }: { data: MovieType }) {
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
            {/* <img
              src={"https://image.tmdb.org/t/p/w500/" + movie?.backdrop_path}
              alt=""
            /> */}
          </div>
        );
      })}
      {/* <div>
        <p>Now PLaying</p>
        <h1>Wicked</h1>
      </div> */}
    </div>
  );
}
