import styled from "styled-components";
import {device} from "../../utils/mixin";
import {colors} from "../../utils/colors";
import Select from "react-select";

export const LocationWrapper = styled.div`
  position: relative;
`;

export const LocationSelectWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  width: 160px;
  background-color: ${colors.accentOrange};
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  ${device.tablet} {
    width: 230px;
    font-size: 18px;
    line-height: 1.38;
  }
`;

export const StyledSelect = styled(Select)`
  font-family: "Manrope", sans-serif;
  font-size: 11px;
  line-height: 1.33;
  width: 150px;
  
  ${device.tablet} {
    width: 210px;
    font-size: 18px;
    line-height: 1.38;
  }
`;

export const LocationBtn = styled.div`
  width: calc(100% - 75px);
  min-width: 156px;
  max-width: 270px;
  padding: 4px 4px 4px 18px;
  font-size: 12px;
  line-height: 1.33;
  border: ${(props) => (props.disabled ? "none" : `1px solid rgba(245, 146, 86, 0.5)`)};;
  background-color: ${(props) => (props.disabled ? "none" : `#fdf7f2`)};;
  border-radius: 40px;
  outline: none;

  ${device.tablet} {
    width: 216px;
    font-size: 18px;
    line-height: 1.38;
  }
`;