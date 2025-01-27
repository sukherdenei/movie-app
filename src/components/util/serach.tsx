import { token } from "@/app/Util";

export default async function fetchinputs(point: string) {
  const pesponce = await fetch(`https://api.themoviedb.org/3${point}`, {
    headers: {
      Authorization: `Bearer${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await pesponce.json();
  return data;
}
