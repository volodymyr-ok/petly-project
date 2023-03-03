import { useEffect, useState } from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { SearchInput } from "../../SearchInput/SearchInput";
import { PawsLoader } from "../../Loader/PawsLoader/PawsLoader";
import { ListNews, Section } from "./NewsList.styled";
import { ResultNotFound } from "../../ResultNotFound/ResultNotFound";
import PaginationBar from "../../PaginationBar/PaginationBar";
import { getNews } from "../../../pages/NewsPage/newsServices";

export const NewsList = () => {
  const [news, setNews] = useState({});
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getNews({ page, search })
      .then((d) => {
        setIsLoading(true);

        setNews(d);
        setIsLoading(false);
      })
      .catch((e) => console.log);
  }, [page, search]);

  const onSubmit = (query) => {
    setPage(1);
    setSearch(query);
  };

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
