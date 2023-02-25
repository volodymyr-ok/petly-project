import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNews } from "../../../redux/news/news-selectors";
import { getNews } from "../../../redux/news/news-operations";
import { Section } from "../../Section/Section";
import { NewsCard } from "../NewsCard/NewsCard";
import { ListNews } from "./NewsList.styled";

export const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <Section>
      <ListNews>
        <NewsCard news={news} />
      </ListNews>
    </Section>
  );
};
