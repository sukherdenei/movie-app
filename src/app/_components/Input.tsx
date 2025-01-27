"use client";
import { useState } from "react";
import fetchInputs from "@/components/util/serach";
import { MovieType } from "../Util";
import Link from "next/link";

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
      `/search/movie?query=${e.target.value.toLocaleLowerCase}&language=en-US`
    );
    console.log(response);
    setValue(response.results || []);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={addHandler}
      />
      {value.slice(0, 5).map((movie: MovieType, index: number) => {
        return (
          <div className="flex flex-col">
            <Link href={`/product-detail/${movie.id}`}>
              <div>
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" + movie?.poster_path
                  }
                />
                <button key={index}>{movie?.original_title}</button>
                <p>{search}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
