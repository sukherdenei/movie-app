import { Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MovieType, token } from "../Util";

export async function ToggleGroupDemo() {
  const response = await fetch(
    ` https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const genreName = await response.json();

  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <div className="h-[100px]">
          {genreName.genres.map((genre: MovieType, index: number) => {
            return <div key={index}>{genre.name}</div>;
          })}
        </div>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
