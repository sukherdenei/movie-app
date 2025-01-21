import { MovieType } from "../util";
import { token } from "../util";
export default async function TopRated() {
  // const getMovie = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  //   if (data?.results) {
  //     setMovies(data.results);
  //   }
  // };

  // useEffect(() => {
  //   getMovie();
  //   console.log("getting moviess");
  // }, []);
  // console.log(data);
  return (
    <div className="CARDS flex mx-[auto] flex-col w-[1480px] mt-32 justify-center ">
      <h1 className="pb-5 text-3xl">Upcoming</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {data.results.slice(0, 10).map((movie: MovieType, index: number) => {
          return (
            <div key={index}>
              <img
                className="w-[230px] h-[439px] cursor-pointer rounded-lg"
                src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
