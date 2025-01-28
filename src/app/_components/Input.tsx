"use client";
import { useState } from "react";
import fetchInputs from "@/components/util/serach";
import { MovieType } from "../Util";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function Input() {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState([]);

  const addHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.toLocaleLowerCase();
    setSearch(search);
    if (search == "") {
      setValue([]);
      return;
    }

    const response = await fetchInputs(
      `/search/movie?query=${search}&language=en-US&page=${1}`
    );
    // console.log(response);
    setValue(response.results || []);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={addHandler}
        className=""
      />
      {/* <p>{search}</p> */}
      <div className="absolute top-[40px]">
        {value.slice(0, 5).map((movie: MovieType, index: number) => {
          return (
            <div key={index} className="flex flex-col w-full">
              <Link href={`/cardinfo/${movie.id}`}>
                <Card className="w-[545px] gap-5 p-5 rounded-md   flex justify-start ">
                  <img
                    className="w-[36px] h-[100px]"
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      movie?.poster_path
                    }
                  />
                  <button
                    className="text-[20px] flex flex-col justify-start w-full"
                    key={index}
                  >
                    {movie?.original_title}
                    <div className="flex items-center">
                      <img
                        className="w-[16px] h-[16px]"
                        src="/Star.svg"
                        alt=""
                      />
                      {movie.vote_average}/10
                    </div>
                    <div className="flex justify-between w-full">
                      <div>{movie.release_date}</div>
                      <div>See more</div>
                    </div>
                    {/* <p>See all results for "search"</p> */}
                  </button>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
