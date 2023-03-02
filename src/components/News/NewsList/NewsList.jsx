import { useEffect } from "react";
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

export const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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

        <PaginationBar info={news} />
      </Section>
    </>
  );
};
