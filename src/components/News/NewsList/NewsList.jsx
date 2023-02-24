import { NewsCard } from "../NewsCard/NewsCard";
import { Section } from "../../Section/Section";

export const NewsList = () => {
  return (
    <Section>
      <ul>
        <NewsCard />
      </ul>
    </Section>
  );
};
