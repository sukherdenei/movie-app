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
import Link from "next/link";

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
        <div>
          <div className="absolute left-[150px] bottom-100 flex flex-col items-center ">
            <button className="bg-slate-950 rounded-md bgb w-[145px] h-[40px]">
              Watch Trailer
            </button>
            <h2 className="text-3xl">Wicked</h2>
          </div>
        </div>
        {data.results.slice(0, 20).map((cover: MovieType, index: number) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <Link
                  href={`/cardinfo/${cover.id}`}
                  className="flex items-center justify-center"
                >
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-[100vw] h-[600px]"
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      cover.backdrop_path
                    }
                  />
                </Link>
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
