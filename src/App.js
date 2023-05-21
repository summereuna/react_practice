import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //useCallback 으로 함수 감싸기
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    //이전에 받았을 수도 있는 에러 초기화
    setError(null);

    try {
      const response = await fetch("https://swapi.dev/api/films/");

      //데이터 파싱 전에 response 체크 하여 오류 메시지 만들기
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }

    //데이터 다 받아오면 로딩 끝내기 / 에러 발생하면 로딩이 필요 없기 때문에 로딩 중단하기
    setIsLoading(false);
  }, []);

  // HTTP 요청 사이드 이펙트
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  // 모든 의존성은 의존성 배열에 넣어야 하지만 이렇게 하면 무한 루프 발생
  // 따라서 useCallback 훅을 사용하여 fetchMoviesHandler 함수를 감싸서 함수 재생성을 방지

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
