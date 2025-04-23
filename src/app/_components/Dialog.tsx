import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";

export async function DialogCloseButton() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className=" absolute bottom-5 left-5 w-[150px] h-[auto] flex gap-[8px] items-center bg-white text-black rounded-[10px] py-[8px] px-[16px] text-[14px] ">
            <Play className="w-[16px] h-[16px]" />
            Watch Trailer
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle></DialogTitle>
          <iframe
            width="560"
            height="315"
            // src={`https://www.youtube.com/embed/${trailer.results[0]?.key}`}
            title="YouTube video player"
          ></iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
}
