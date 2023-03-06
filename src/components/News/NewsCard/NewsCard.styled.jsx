import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { device, transition } from "../../../utils/mixin";
import { PageTitle } from "../../Title/Title.styled";

export const Item = styled.li`
  ::before {
    content: "";
    display: block;
    width: 200px;
    height: 4px;
    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
    border-radius: 40px;
    margin-bottom: 4px;

    transition: box-shadow ${transition};
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

  width: 280px;
  min-height: 286px;
  cursor: default;

  ${device.tablet} {
    width: calc((100% - 32px) / 2);
    min-height: 288px;
  }
  ${device.desktop} {
    width: calc((100% - 72px) / 3);
    min-height: 266px;
  }
`;

export const CardTitle = styled(PageTitle)`
  margin-top: 0; // перекриття стилів PageTitle
  margin-bottom: 16px;
  height: 66px;

  text-align: start;

  display: -webkit-box; // трансформуємо контейнер
  -webkit-line-clamp: 2; // строка на якій буде "..."
  -webkit-box-orient: vertical; // додає "..."
  overflow: hidden; // ховаємо зайве

  ${device.tablet} {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.37;
  color: #111321;

  height: 154px;
  margin-bottom: 20px;

  display: -webkit-box; // трансформуємо контейнер
  -webkit-line-clamp: 7; // строка на якій буде "..."
  -webkit-box-orient: vertical; // додає "..."
  overflow: hidden; // ховаємо зайве

  ${device.tablet} {
    -webkit-line-clamp: 6; // строка на якій буде "..."

    height: 132px;
    margin-bottom: 40px;
  }
`;

export const NewsBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 22px;
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
