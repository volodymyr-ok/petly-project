import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { device } from "../../../utils/mixin";
import { PageTitle } from "../../Title/Title.styled";

export const Item = styled.li`
  width: 280px;
  height: auto;
  cursor: default;

  ${device.tablet} {
    width: calc((100% - 32px) / 2);
  }
  ${device.desktop} {
    width: calc((100% - 72px) / 3);
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
  margin-top: 4px;
  text-align: start;

  ${device.tablet} {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.37;

  color: #111321;
`;

export const NewsBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  ${device.tablet} {
    margin-top: 40px;
  }
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
