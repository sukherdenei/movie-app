import { Button } from "@/components/ui/button";
// import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { genreType, token } from "../Util";

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
        <div className="w-[450px] absolute">
          <h2>Genre</h2>
          <p>See lists of movies by genre</p>
        </div>
        {data.genres.map((genre: genreType) => {
          return (
            <div
              className="flex flex-wrap cursor-pointer hover:bg-slate-800"
              key={genre.id}
            >
              <Button className="border-[1px] bg-black border-neutral-500 rounded-xl cursor-pointer">
                {genre.name}
              </Button>
            </div>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
