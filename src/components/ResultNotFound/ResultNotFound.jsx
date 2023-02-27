import cat from "../../assets/svg/cat404.svg";
import { Box, Image } from "./ResultNotFound.styled";

export const ResultNotFound = () => {
  return (
    <Box>
      <Image src={cat} alt="cat" />
      <h2>No results was found</h2>
    </Box>
  );
};
