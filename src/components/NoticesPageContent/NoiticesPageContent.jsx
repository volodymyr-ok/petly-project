import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNoticesParams } from "../../hooks/useMyContext";
import usePrevious from "../../hooks/usePrevious";
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
import { ResultNotFound } from "../ResultNotFound/ResultNotFound";

const NoticesPageContent = () => {
  const dispatch = useDispatch();
  const { category: categoryParams } = useParams();
  const { search, page, setPage } = useNoticesParams();

  const [categoryName, setCategoryName] = useState("");
  const isLoading = useSelector(selectIsNoticesLoading);

  const categoryList = useSelector(selectNotices);
  const favoritesList = useSelector(selectFavorites);
  const user = useSelector(selectUser);

  const thereIsContent = categoryList.length;

  const prevSearch = usePrevious(search);
  const prevCategoryName = usePrevious(categoryName);
  const needToResetPage =
    (prevSearch !== search && page > 1) ||
    (prevCategoryName !== categoryName && page > 1);

  useEffect(() => {
    if (categoryParams) setCategoryName(categoryParams);
    else setCategoryName("sell");
  }, [categoryParams]);

  useEffect(() => {
    if (needToResetPage) setPage(1);
    const publicCategories = ["lost-found", "in-good-hands", "sell"];
    const params = { search, page };

    if (publicCategories.includes(categoryName)) {
      dispatch(getNoticesPublic({ category: categoryName, ...params }));
    } else {
      let newCatagory = "";
      if (categoryName === "favorite-ads") newCatagory = "favorite";
      if (categoryName === "own") newCatagory = "my";
      dispatch(getNoticesPrivate({ category: newCatagory, ...params }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName, search, page]);

  return (
    <>
      {isLoading ? (
        <PawsLoader />
      ) : (
        <List>
          {thereIsContent ? (
            categoryList.map((el) => (
              <NoticeCard
                key={el._id}
                cardData={el}
                user={user}
                favoritesList={favoritesList}
              />
            ))
          ) : (
            <ResultNotFound />
          )}
        </List>
      )}
    </>
  );
};

export default NoticesPageContent;
