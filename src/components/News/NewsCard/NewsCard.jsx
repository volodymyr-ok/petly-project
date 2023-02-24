import { CardTitle, Text, Data, NewsBox, ReadMore, Item } from "./NewsCard.styled";

export const NewsCard = ({ news }) => {
  return (
    <>
      {news?.map(({ _id, title, description, date, url }) => (
        <Item key={_id}>
          <div style={{ height: "66px", overflow: "hidden", marginBottom: "16px" }}>
            <CardTitle>{title}</CardTitle>
          </div>
          <div style={{ height: "132px", overflow: "hidden" }}>
            <Text>{description}</Text>
          </div>

          {/* <CardTitle>{title.length > 42 ? title.slice(0, 42) + "..." : title}</CardTitle>
          <Text>{description.length > 226 ? description.slice(0, 226) + "..." : description}</Text> */}

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

// description.length > 212 ? description.slice(0, 212) + "..." : description;
