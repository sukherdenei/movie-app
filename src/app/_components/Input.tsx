"use client";
import Inputs from "@/lib/Inputs";
import { useState } from "react";
import { MovieType } from "../Util";
import Link from "next/link";
import fetchinputs from "@/components/util/serach";

export default function Input() {
  const [input, setInput] = useState("");
  const [inputValue, setInputValue] = useState([]);

  const addHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLowerCase();
    setInput(input);
    if (input == "") {
      setInputValue([]);
      return;
    }
    const pesponce = await fetchinputs(
      `/search/movie?query=${e.target.value.toLowerCase()}&language=en-US`
    );
    console.log(pesponce);
    setInputValue(pesponce.results || []);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={addHandler}
        value={input}
      />
      {inputValue.slice(0, 5).map((movie: MovieType, index: number) => {
        return (
          <div>
            <p>{input}</p>
            <Link href={`/cardinfo${movie.id}`}>
              <img
                src={
                  "https://image.tmdb.org/t/p/original/" + movie?.poster_path
                }
                alt=""
              />
              <button key={index}>{movie?.original_title}</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
