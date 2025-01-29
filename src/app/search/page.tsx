"use client";
import { useSearchParams } from "next/navigation";
import { token } from "../Util";

export default async function SearchPage() {
  const response = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();

  const searchParams = useSearchParams();
  const value = searchParams.get("value");
  return (
    <div>
      <p>SearchPage {value}</p>
    </div>
  );
}
