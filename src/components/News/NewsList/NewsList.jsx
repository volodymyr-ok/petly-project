import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectError } from "../../../redux/news/news-selectors";
// import { getNews, getNewsBySearch } from "../../../redux/news/news-operations";
import { NewsCard } from "../NewsCard/NewsCard";
import { SearchInput } from "../../SearchInput/SearchInput";
import { PawsLoader } from "../../Loader/PawsLoader/PawsLoader";
import { ListNews, Section } from "./NewsList.styled";
import { ResultNotFound } from "../../ResultNotFound/ResultNotFound";
import PaginationBar from "../../PaginationBar/PaginationBar";
import { getNews, getNewsBySearch } from "../../../pages/NewsPage/newsServices";

export const NewsList = () => {
  const [news, setNews] = useState({});
  const [page, setPage] = useState(1);
  // const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // axios запит
  useEffect(() => {
    getNews({ page })
      .then((d) => {
        setIsLoading(true);

        setNews(d);
        setIsLoading(false);
      })
      .catch((e) => console.log);
  }, [page]);

  const onSubmit = (search) => {
    console.log("file: NewsList.jsx:36 ~ search >>", search);
    if (!search) return;
    getNews({ page, search })
      .then((d) => {
        console.log("file: NewsList.jsx:48 ~ d >>", d);
        // setIsLoading(true);
        // setNews(d);
        // setIsLoading(false);
      })
      .catch((e) => console.log);
  };

  return (
    <>
      <SearchInput onSubmit={onSubmit} />
      <Section>
        <PaginationBar setPage={setPage} info={news} />

        <ListNews>
          {isLoading ? (
            <PawsLoader />
          ) : null ? (
            <ResultNotFound />
          ) : (
            <NewsCard news={news.data} />
          )}
        </ListNews>

        <PaginationBar setPage={setPage} info={news} />
      </Section>
    </>
  );
};
