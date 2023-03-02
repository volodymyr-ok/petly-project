import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectNews,
} from "../../../redux/news/news-selectors";
import { getNews, getNewsBySearch } from "../../../redux/news/news-operations";
import { NewsCard } from "../NewsCard/NewsCard";
import { SearchInput } from "../../SearchInput/SearchInput";
import { PawsLoader } from "../../Loader/PawsLoader/PawsLoader";
import { ListNews, Section } from "./NewsList.styled";
import { ResultNotFound } from "../../ResultNotFound/ResultNotFound";
import PaginationBar from "../../PaginationBar/PaginationBar";
import { getNews as getAllNews } from "../../../pages/NewsPage/newsServices";

export const NewsList = () => {
  const [news, setNews] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  // const news = useSelector(selectNews);
  // const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // axios запит
  useEffect(() => {
    getAllNews({ page })
      .then((d) => {
        setIsLoading(true);
        console.log("data ==>", d.data);

        setNews(d);
        setIsLoading(false);
      })
      .catch((e) => console.log);
  }, [page]);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const onSubmit = (search) => {
    dispatch(getNewsBySearch(search));
  };

  return (
    <>
      <SearchInput onSubmit={onSubmit} />
      <Section>
        <ListNews>
          {isLoading ? (
            <PawsLoader />
          ) : error ? (
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
