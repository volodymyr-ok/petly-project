import { PawContainer } from "./PawsLoader.styled";
import paw from "../../../assets/svg/paw-icon.svg";

export const PawsLoader = () => {
  return (
    <PawContainer>
      <div>
        <img src={paw} alt="" />
      </div>
      <div>
        <img src={paw} alt="" />
      </div>
      <div>
        <img src={paw} alt="" />
      </div>
      <div>
        <img src={paw} alt="" />
      </div>
      <div>
        <img src={paw} alt="" />
      </div>
      <div>
        <img src={paw} alt="" />
      </div>
    </PawContainer>
  );
};
