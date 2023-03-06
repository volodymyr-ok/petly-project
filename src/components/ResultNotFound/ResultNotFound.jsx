import PropTypes from "prop-types";
import cat from "../../assets/svg/cat404.svg";
import { Box, Image } from "./ResultNotFound.styled";

export const ResultNotFound = ({ text }) => {
  return (
    <Box>
      <Image src={cat} alt="cat" />
      <h2>{text}</h2>
    </Box>
  );
};

ResultNotFound.propTypes = {
  text: PropTypes.string,
};
