import style from "@/app/styles/common.module.css";
import MovieCard from "../components/MovieCard";
const page = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "856ea1d68dmsh6af0abe406da337p14a9adjsn5a9889fcd7c4",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  return (
    <>
      <section className={style.movieSection}>
        <div className={style.container}>
          <h1>Series & Movie</h1>
          <div className={style.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
