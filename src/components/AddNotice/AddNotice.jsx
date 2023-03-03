import { NoticeBox, NoticeBtn, NoticeText } from "./AddNotice.styled";

import { SvgMarkup } from "../SvgHandler/SvgHandler";

const searchSvg = SvgMarkup(21.3, 21.3, "addTo");

export const AddNotice = ({onAddPet}) => {
  return (
    <>
      <NoticeBox className="notice">
        <NoticeText className="notice">Add pet</NoticeText>
        <NoticeBtn onClick={onAddPet} className="notice">{searchSvg}</NoticeBtn>
      </NoticeBox>
    </>
  );
};
