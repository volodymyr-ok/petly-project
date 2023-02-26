import PropTypes from "prop-types";
import { CardTitle, Text, Data, NewsBox, ReadMore, Item } from "./NewsCard.styled";

export const NewsCard = ({ news }) => {
  return (
    <>
      {news?.map(({ _id, title, description, date, url }) => (
        <Item key={_id}>
          <div style={{ height: "66px", overflow: "hidden", marginBottom: "16px" }}>
            <CardTitle>{title}</CardTitle>
          </div>
          <div style={{ height: "136px", overflow: "hidden" }}>
            <Text>{description}</Text>
          </div>
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
