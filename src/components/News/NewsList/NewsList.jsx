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
  // const dispatch = useDispatch();
  // const error = useSelector(selectError);
  // useEffect(() => {
  //   dispatch(getNews());
  // }, [dispatch]);
  const [news, setNews] = useState({});
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // axios запит
  useEffect(() => {
    getNews({ page })
      .then((d) => {
        setIsLoading(true);
        console.log("data ==>", d.data);

        setNews(d);
        setIsLoading(false);
      })
      .catch((e) => console.log);
  }, [page]);

  const onSubmit = (query) => {
    // dispatch(getNewsBySearch(search));
  };

  return (
    <>
      <SearchInput onSubmit={onSubmit} />
      <Section>
        <PaginationBar setPage={setPage} info={news} />

        <ListNews>
          {isLoading ? (
            <PawsLoader />
          ) : !news.length ? (
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
