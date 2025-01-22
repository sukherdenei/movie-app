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
import { CardContent } from "@/components/ui/card";

export default async function Carousel() {
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
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {data.results.slice(0, 3).map((movie: MovieType, index: number) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="min-w-[1440px] h-[600px]"
                    src={
                      "https://image.tmdb.org/t/p/w500/" + movie?.backdrop_path
                    }
                  />
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
