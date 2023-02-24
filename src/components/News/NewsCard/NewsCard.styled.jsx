import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { device } from "../../../utils/mixin";
import { PageTitle } from "../../Title/Title.styled";

export const Item = styled.li`
  width: 280px;
  height: 300px;

  ${device.tablet} {
    width: 336px;
    height: 276px;
  }
  ${device.desktop} {
    width: 395px;
    height: 254px;
  }

  ::before {
    content: "";
    display: block;
    width: 200px;
    height: 4px;
    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
    border-radius: 40px;

    ${device.tablet} {
      width: 280px;
      height: 8px;
    }
    ${device.desktop} {
      width: 340px;
    }
  }

  :hover::before {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const CardTitle = styled(PageTitle)`
  margin-top: 0;
  margin-bottom: 16px;
  text-align: start;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.37;

  color: #111321;
`;

export const NewsBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Data = styled.p`
  font-size: 16px;
  line-height: 1.37;
  color: ${colors.inputPriText};
`;

export const ReadMore = styled.a`
  font-size: 16px;
  line-height: 1.37;
  color: ${colors.accentOrange};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
