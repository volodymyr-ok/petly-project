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
  const [dataList, setDataList] = useState([]);
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
    setDataList(categoryList);
  }, [categoryList]);

  useEffect(() => {
    if (categoryParams) {
      setCategoryName(categoryParams);
    } else {
      setCategoryName("sell");
    }
  }, [categoryParams]);

  useEffect(() => {
    if (!categoryName) return;
    console.log("categoryName", categoryName);

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

  const onRemoveFavorites = (id) => {
    let categoryList = dataList.filter((el) => el._id !== id);
    setDataList(categoryList);
  };

  return (
    <>
      {thereIsContent ? (
        <List>
          {dataList.map((el) => (
            <NoticeCard
              key={el._id}
              cardData={el}
              user={user}
              onRemoveFavorites={(id) => onRemoveFavorites(id)}
              favoritesList={favoritesList}
            />
          ))}
        </List>
      ) : (
        <ResultNotFound text="No results was found" />
      )}

      {isLoading && <PawsLoader />}
    </>
  );
};

export default NoticesPageContent;
