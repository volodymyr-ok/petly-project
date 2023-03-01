import { ListBox, List, BtnAddSticky } from "./NoticesCategoryLIst.styled";
import { SvgMarkup } from "../SvgHandler/SvgHandler";
import { NoticeItem } from "../NoticeItem/NoticeItem";
import { ResultNotFound } from "../ResultNotFound/ResultNotFound";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/auth/auth-operations";
import { selectFavorites } from "../../redux/auth/auth-selectors";
import { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
const svgAdd = SvgMarkup(21.3, 21.3, "addTo");

export const NoticesCategoryList = ({
  notices,
  onRemove,
  onReadMore,
  user,
  isLogined,
}) => {
  const dispatch = useDispatch();
  const favotires = useSelector(selectFavorites);

  useEffect(() => {
    console.log("favorites", favotires);
  }, [favotires]);

  const handlerModalAddPet = (e) => {
    if (!isLogined) {
      console.log("pls login first");
    }
    console.log("modal add a pet", e);
  };

  const handlerFavorite = (e, id, isFavorite) => {
    if (!isLogined) {
      console.log("pls login first");
    }
    if (!favotires.includes(id)) {
      dispatch(addFavorites(id));
    }

    if (isFavorite) {
      dispatch(removeFavorites(id));
    }
  };

  return (
    <ListBox>
      <BtnAddSticky onClick={handlerModalAddPet}>
        {svgAdd}
        Add pet
      </BtnAddSticky>
      {notices.length > 0 ? (
        <List>
          <NoticeItem
            user={user}
            notices={notices}
            favotiresList={favotires}
            addFavorite={(e, id, isFavorite) =>
              handlerFavorite(e, id, isFavorite)
            }
            onRemove={onRemove}
            onReadMore={onReadMore}
          ></NoticeItem>
        </List>
      ) : (
        <ResultNotFound />
      )}
    </ListBox>
  );
};
