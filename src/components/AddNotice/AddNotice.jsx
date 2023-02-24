import { NoticeBox, NoticeBtn, NoticeText } from "./AddNotice.styled";

import { SvgMarkup } from "../SvgHandler/SvgHandler";

const searchSvg = SvgMarkup(21.3, 21.3, "addTo");

export const AddNotice = () => {
  return (
    <>
      <NoticeBox className="notice">
        <NoticeText className="notice">Add pet</NoticeText>
        <NoticeBtn className="notice">{searchSvg}</NoticeBtn>
      </NoticeBox>
    </>
  );
};
