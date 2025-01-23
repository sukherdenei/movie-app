import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { MovieType, token } from "../Util";

export default async function Carousels() {
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
    <Carousel className="w-[100%] relative">
      <CarouselContent className="h-[600px] items-center">
        {data.results.slice(0, 20).map((movie: MovieType, index: number) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="flex items-center justify-center">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-[100vw] h-[600px]"
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      movie?.backdrop_path
                    }
                  />
                  {/* <div className="absolute left-[150px] bottom-100 flex flex-col">
                    <p>Now PLaying</p>
                    <h1>Wicked</h1>
                    <div className="w-[200px] "> {movie?.original_title}</div>
                  </div> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[40px]" />
      <CarouselNext className="absolute right-[40px]" />
    </Carousel>
  );
}
