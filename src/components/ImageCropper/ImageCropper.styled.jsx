import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";
import { StyledButton } from "../Button/Button.styled";

export const BtnAdd = styled.button`
    margin: 0 auto;
    width: 208px;
    height: 208px;
    border-radius: 20px;
    background-color: ${colors.hzModalPet};
    border: none;
    & svg{
      stroke: ${colors.black};
    }
`
export const BtnClose = styled(StyledButton)`
width: 90px;
    padding: 5px 10px;
    background-color: ${colors.accentOrange};
    color: ${colors.white};
`

export const Image = styled.img`
   border-radius: 20px;
   width: 208px;
   height: 208px;
`

export const ControllerBox = styled.div`
    display: flex;
    justify-content: center;

`
export const CropBox = styled.div`
    width: 100%;
    height: 208px;
    margin-bottom: 20px;
`
export const ImagePrev = styled.div`
    ${device.mobile}{
      display: none;
    }
`

export const CropImgPrevue = styled.div`
position: relative;
width: 100%;

`
export const Boxik = styled.div`
    height: 208px;
`
export const CropContainer = styled.div`
position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  & > div > img{
    max-width: none;
    max-height: none;
  }
`
export const CropControls = styled.div`
/* text-align: center; */
//margin-bottom: 20px;
display: flex;
& input{
  width: 100%;
  
}
&input[type="range"] {
  -webkit-appearance: none;
  margin-right: 15px;
  width: 200px;
  height: 7px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  background-image: linear-gradient(#ff4500, #ff4500);
  background-size: 70% 100%;
  background-repeat: no-repeat;
}

&input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #ff4500;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}

&input[type=range]::-webkit-slider-runnable-track  {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}
`

export const ControlsButtonBox = styled.div`

      display: flex;
    gap: 10px;
    justify-content: flex-end;
`

export const ButtonCancel = styled.button`

      display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    & svg{
      width: 30px;
      height: 30px;
      fill: ${colors.accentOrange};
    } 
`
