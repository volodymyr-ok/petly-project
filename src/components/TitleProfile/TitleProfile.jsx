import PropTypes from "prop-types";
import { InformationTitle } from "./TitleProfile.styled";

export const TitleProfile = ({ children }) => {
  return <InformationTitle>{children}</InformationTitle>;
};

TitleProfile.propTypes = {
  children: PropTypes.string,
};
