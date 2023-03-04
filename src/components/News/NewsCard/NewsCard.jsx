import PropTypes from "prop-types";
import {
  CardTitle,
  Text,
  Data,
  NewsBox,
  ReadMore,
  Item,
} from "./NewsCard.styled";

export const NewsCard = ({ news }) => {
  return (
    <>
      {news?.map(({ _id, title, description, date, url }) => (
        <Item key={_id}>
          <CardTitle>{title}</CardTitle>

          <Text>{description}</Text>

          <NewsBox>
            <Data>{date?.split("-").reverse().join("/")}</Data>

            <ReadMore href={url} target="_blank">
              Read more
            </ReadMore>
          </NewsBox>
        </Item>
      ))}
    </>
  );
};

NewsCard.propTypes = {
  news: PropTypes.array,
};
