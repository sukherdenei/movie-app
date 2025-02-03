import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { genreType, token } from "../Util";
import Link from "next/link";

export async function PopoverDemo() {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  // console.log(data.genres[6].name);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-[36px]">
          Genre
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[650px] flex flex-wrap secondary ">
        <div className="w-[100%] text-secondary border-b-[1px] pb-[15px]">
          <h2>Genre</h2>
          <p>See lists of movies by genre</p>
        </div>
        <div className="flex flex-wrap gap-[20px] pt-[15px]">
          {data.genres.map((genre: genreType) => {
            return (
              <Link
                href={`/genreLink/${genre.id}`}
                className="flex flex-wrap cursor-pointer"
                key={genre.id}
              >
                <button className="border-[1px] border-secondary rounded-xl cursor-pointer py-[2px] px-[10px] text-[14px] text-secondary">
                  {genre.name}
                </button>
              </Link>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
