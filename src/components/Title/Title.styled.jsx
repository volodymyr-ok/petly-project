import styled from 'styled-components';
import { colors } from 'utils/colors';
import { device } from 'utils/mixin';

export const PageTitle = styled.h2`
  margin-top: 42px;
  margin-bottom: 28px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.37;
  text-align: center;
  color: ${colors.primaryText};

  ${device.tablet} {
    margin-top: 90px;
    margin-bottom: 40px;
    font-size: 48px;
  }

  ${device.desktop} {
    margin-top: 60px;
  }
`;
