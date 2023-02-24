import { CardTitle, Text, Data, NewsBox, ReadMore, Item } from "./NewsCard.styled";

export const NewsCard = ({ news }) => {
  return (
    <>
      {/* {news.map((item) => ())} */}
      <Item key="key">
        <CardTitle>Lorem ipsum dolor</CardTitle>
        <Text>
          {/* {text.length >= 150 ? text.slice(0, 150) : text} */}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex eveniet vero ullam ipsum officiis nihil ducimus
          voluptas quisquam. Iste adipisci velit nemo aliquam corrupti laboriosam exercitationem inventore delectus
          nihil sed. Voluptas accusamus aperiam eaque
        </Text>
        <NewsBox>
          <Data>00/00/00</Data>
          <ReadMore href="/" target="_blank">
            Read more
          </ReadMore>
        </NewsBox>
      </Item>
    </>
  );
};
