import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectFavorites, selectUser } from "../../redux/auth/auth-selectors";
import {
  getNoticesPrivate,
  getNoticesPublic,
} from "../../redux/notice/notice-operations";
import {
  selectIsNoticesLoading,
  selectNotices,
} from "../../redux/notice/notice-selectors";
import { PawsLoader } from "../Loader/PawsLoader/PawsLoader";
import { List } from "../NoticesCategoryLIst/NoticesCategoryLIst.styled";
import { NoticeCard } from "./NoticeCard/NoticeCard";

const NoticesPageContent = () => {
  const [categoryName, setCategoryName] = useState("");
  const isLoading = useSelector(selectIsNoticesLoading);
  const categoryList = useSelector(selectNotices);

  const favoritesList = useSelector(selectFavorites);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const { category: categoryParams } = useParams();

  useEffect(() => {
    if (categoryParams) setCategoryName(categoryParams);
    else setCategoryName("sell");
  }, [categoryParams]);

  useEffect(() => {
    const publicCategories = ["lost-found", "in-good-hands", "sell"];

    if (publicCategories.includes(categoryName)) {
      dispatch(getNoticesPublic(categoryName));
    } else {
      let newCatagory = "";
      if (categoryName === "favorite-ads") newCatagory = "favorite";
      if (categoryName === "own") newCatagory = "my";
      dispatch(getNoticesPrivate(newCatagory));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  return (
    <>
      {isLoading ? (
        <PawsLoader />
      ) : (
        <List>
          {categoryList?.map((el) => (
            <NoticeCard
              key={el._id}
              cardData={el}
              user={user}
              favoritesList={favoritesList}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default NoticesPageContent;
