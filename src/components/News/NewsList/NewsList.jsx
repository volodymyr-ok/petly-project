import { useState, useEffect } from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { SearchInput } from "../../SearchInput/SearchInput";
import { PawsLoader } from "../../Loader/PawsLoader/PawsLoader";
import { ListNews, Section } from "./NewsList.styled";
import { ResultNotFound } from "../../ResultNotFound/ResultNotFound";
import PaginationBar from "../../PaginationBar/PaginationBar";
import { getNews } from "../../../pages/NewsPage/newsServices";
import usePrevious from "../../../hooks/usePrevious";

export const NewsList = () => {
  const [news, setNews] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const prevSearch = usePrevious(search);

  useEffect(() => {
    if (prevSearch !== search && page > 1) setPage(1);

    getNews({ page, search })
      .then((data) => {
        setIsLoading(true);
        setNews(data);
        setIsLoading(false);
      })
      .catch((e) => console.log("file: NewsList.jsx:24 ~ e >>", e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  const onSubmit = (query) => setSearch(query);

  return (
    <>
      <SearchInput onSubmit={onSubmit} />
      <Section>
        <ListNews>
          {isLoading ? (
            <PawsLoader />
          ) : !news.data?.length ? (
            <ResultNotFound text="No results was found" />
          ) : (
            <NewsCard news={news.data} />
          )}
        </ListNews>
        <PaginationBar setPage={setPage} info={news} />
      </Section>
    </>
  );
};
