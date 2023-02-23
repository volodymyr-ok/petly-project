import PropTypes from 'prop-types';
import { PageTitle } from './Title.styled';

export const Title = ({ children }) => {
  return <PageTitle>{children}</PageTitle>;
};

Title.propTypes = {
  children: PropTypes.string,
};
