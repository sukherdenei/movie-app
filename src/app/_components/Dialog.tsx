import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export function DialogCloseButton() {
  const videoUrl = "https://youtu.be/qSu6i2iFMO0?si=LWxAhXPQCUktWtxR"; // YouTube видеоын линк

  // Видео линкээс ID-ийг гаргах функц
  const getYouTubeVideoId = (url: string) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+\/|\S+\/\S+\/?[^?]+|(?:v|e(?:mbed)?)\/|\S+?[^?=]+[?&](?:v|e(?:mbed)?|embed|watch)=[^&?]+)(?=\S))|(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(videoUrl); // Видео ID-ийг гаргана

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-3 items-center">
          {/* <Button variant="outline">Watch Trailer</Button> */}
          <Image
            width={25}
            height={30}
            className="cursor-pointer w-[36px] h-[36px]"
            src="/play.svg"
            alt=""
          />
          <p>Play trailer 2:35</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Watch Video</DialogTitle>
          <DialogDescription>
            You can watch the trailer right here.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center">
          {videoId && (
            <div className="relative pb-[55%] w-full overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
