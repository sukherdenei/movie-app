import { Bold } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MovieType, token } from "../Util";
import Link from "next/link";

export async function ToggleGroupDemo() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const genreName = await response.json();

  return (
    <ToggleGroup
      type="multiple"
      className="flex flex-wrap sticky top-0 flex-col w-[352px] h-[387px]
    "
    >
      {genreName.genres.map((genre: MovieType) => (
        <ToggleGroupItem
          key={genre.id}
          value={genre.name}
          aria-label={`Toggle ${genre.name}`}
        >
          <Bold className="h-4 w-4" />
          <Link href={`/genreLink/${genre.id}`}>{genre.name}</Link>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
