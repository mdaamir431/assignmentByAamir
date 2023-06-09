import React, { useEffect, useState } from "react";
import { GetApi } from "../../Utils/Api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  console.log("all-m", movies);
  const getMovie = async () => {
    await GetApi("movies/allmovies")
      .then((response) => {
        setMovies(response.data.list);
      })
      .catch((error) => {
        console.log("api-error", error.response);
      });
  };
  useEffect(() => {
    getMovie();
  }, []);
  const imgUrl = "http://localhost:5000";
  return (
    <div>
      <h1 className="text-3xl mt-8 text-[#768021] text-center border-2 border-b-red-700 border-t-[none] ">
        Movies
      </h1>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {movies &&
              movies.map((i) => (
                <a
                  key={i.id}
                  className="group rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 shadow-xl shadow-gray-500/50"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 ">
                    <img
                      src={`${imgUrl}/${i.moviePic}`}
                      className=" w-full object-cover object-center hover:opacity-75 border"
                    />
                  </div>
                  <div className="bg-slate-200">
                    <h5 className="pt-2 text-lg text-center ">
                      {" "}
                       <b className="text-green-600">Name: </b><b>{i.name}</b>
                    </h5>
                    <h3 className="pt-2 text-lg text-center ">
                      {" "}
                      <b className="text-green-600">Release Date:</b> <b> {i.releaseDate}</b>
                    </h3>
                    {/* <h3 className="pt-2 text-lg text-center "> <b>{i.rating}</b></h3> */}
                  {/* </div> */}
                  <div className="flex justify-center">
                    {[...Array(5)].map((star) => {
                      return (
                        <span
                          className={
                            2 <= 5 ? "text-yellow-400" : "text-gray-300"
                          }
                        >
                          &#9733;
                        </span>
                      );
                    })}
                  </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
