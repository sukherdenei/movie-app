"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MovieType } from "../Util";
import Link from "next/link";

const Page = () => {
  const [fetchdata, setFetchData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:4000/movie");
      const data = await response.json();
      console.log("hi", data);
      setFetchData(data.upComingData);
    };

    getData();
  }, []);

  return (
    <div className="flex flex-wrap gap-5 w-[1280px] m-auto justify-between mt-10">
      {fetchdata?.map((pics: MovieType, index: number) => {
        return (
          <div key={index} className="w-[230px] h-[439px] rounded-b-lg">
            <Link href={`/cardinfo/${pics.id}`}>
              <Image
                src={"https://image.tmdb.org/t/p/original" + pics.poster_path}
                alt=""
                width={200}
                height={200}
                className="w-[230px] h-[340px] rounded-t-lg hover:opacity-50 transition-all ease-in-out"
              />
              <div className="h-[87px] p-2">
                <div className="flex gap-2">
                  <img src="/Star.svg" alt="" />{" "}
                  <p>{pics.vote_average.toFixed(1)}/10</p>
                </div>
                <p className="">{pics.original_title}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
