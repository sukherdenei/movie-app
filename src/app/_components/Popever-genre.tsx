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
  //   console.log(data.genres[6].name);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Genre</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[650px] flex flex-wrap bg-black">
        <div className="w-[450px]">
          <h2>Genre</h2>
          <p>See lists of movies by genre</p>
        </div>

        {data.genres.map((genre: genreType) => {
          return (
            <Link
              href={`/genreLink/${genre.id}`}
              className="flex flex-wrap cursor-pointer hover:bg-slate-800"
              key={genre.id}
            >
              <Button className="border-[1px] bg-black border-neutral-500 rounded-xl cursor-pointer">
                {genre.name}
              </Button>
            </Link>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
