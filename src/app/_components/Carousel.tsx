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

import { genreType, MovieType, token } from "../Util";
import Link from "next/link";
import { DialogCloseButton } from "./Dialog";

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
    <Carousel className="w-[100%] relative z-0">
      <CarouselContent className="h-[600px] items-center">
        {data.results.slice(0, 20).map((cover: MovieType, index: number) => (
          <CarouselItem key={index}>
            <div className="relative">
              <Card>
                <div className="flex items-center justify-center">
                  <Link href={`/cardinfo/${cover.id}`}>
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
                  <div className="absolute z-50 left-[150px] w-[450px] h-[310px] gap-3 flex flex-col top-[100px]">
                    <p>Now Playing</p>
                    <h1>{cover.original_title}</h1>
                    <p>{cover.vote_average}/10</p>
                    <p>{cover.overview}</p>
                    <div>
                      <DialogCloseButton id={cover.id} />
                    </div>
                  </div>
                </div>
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
