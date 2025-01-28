import { Button } from "@/components/ui/button";
import { token } from "../Util";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export async function DialogCloseButton({ id }: { id: string }) {
  const trailerData = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const trailer = await trailerData.json();
  console.log(trailer);
  return (
    <div>
      <Dialog>
        <DialogTrigger className="bg-zinc-900 border-neutral-800 w-[150px] h-[40px]">
          Watch trailer
        </DialogTrigger>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailer.results[0]?.key}`}
            title="YouTube video player"
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
}
