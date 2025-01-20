"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Cover from "./components/Cover";

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  original_title: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function Home() {
  const [movies, setMovies] = useState<MovieType[] | undefined>();
  // fetch movie info setMovie //
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmZiMWY2ZTA2ZWI2YzE3MGJjZWI0ODUzMzY1MWJjZiIsIm5iZiI6MTczNzM0MjU0NS42MjQsInN1YiI6IjY3OGRiZTUxZDhhNWIwZDAwYzQzNGNmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dmDhnJpGWqwqyuPSu6Vaqv1Chq-b3BmRKojdw8AMHM4";

  const getMovie = async () => {
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
    if (data?.results) {
      setMovies(data.results);
    }
  };

  useEffect(() => {
    getMovie();

    console.log("getting movie");
  }, []);

  console.log({ movies });

  return (
    <div className="w-[1440px] m-auto">
      <Header />
      <div className="CARDS flex gap-10 w-[1277] h-[910px] justify-center flex-wrap ">
        {movies?.slice(0, 10).map((movie, index) => {
          return (
            <div key={index}>
              {/* Movie name : {movie?.original_title} */}
              <div className="">
                <img
                  className="w-[230px] h-[439px] cursor-pointer"
                  src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
                  alt=""
                />
                <div className="svg&vote flex gap-2 ">
                  <img src="./Star.svg" alt="" />
                  <p>{movie?.vote_average}/10</p>
                </div>
                <h1>{movie?.original_title}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <Cover />
    </div>
  );
}
