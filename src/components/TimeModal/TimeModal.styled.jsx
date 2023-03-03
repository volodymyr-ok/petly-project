import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";

export const TimeWrap = styled.div`
  position: absolute;
  top: 35px;
  padding: 12px;
  width: 147px;
  height: 160px;
  background: ${colors.white};
  border: 1px solid ${colors.accentOrange};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  color: ${colors.black};
  text-align: center;
  z-index: 1;

  ${device.tablet} {
    top: 42px;
  }
`;

export const TimeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: "Manrope";
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  color: ${colors.black};
`;

export const TimeItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 3px;

  border-radius: 6px;
`;

export const TimeDay = styled.span`
  width: 20px;
`;
