"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MovieType } from "../Util";

const Page = () => {
  const [fetchdata, setFetchData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:4000/movie");
      const data = await response.json();
      console.log("hi", data);
      setFetchData(data.movies);
    };

    getData();
  }, []);

  return (
    <div className="flex gap-5">
      {fetchdata?.map((pics: MovieType, index: number) => {
        return (
          <div key={index} className="w-[290px] h-[400px]">
            <Image
              src={"https://image.tmdb.org/t/p/original" + pics.poster_path}
              alt=""
              width={200}
              height={200}
              className="w-[290px] h-[300px] rounded-t-sm rounded-b-sm"
            />
            <p className="p-5">{pics.original_title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
