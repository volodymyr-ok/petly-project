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
import { BtnAddSticky } from "../NoticesCategoryLIst/NoticesCategoryLIst.styled";
import { ReactComponent as Add } from "../../assets/svg/Addpet.svg";
import { Modal } from "../Modal/Modal";
import { AddNoticeForm } from "../ModalAddNotice/AddNoticeForm/AddNoticeForm";

const NoticesPageContent = () => {
  const dispatch = useDispatch();
  const { category: categoryParams } = useParams();
  const { search, page, setPage } = useNoticesParams();

  const [isModalAddPet, setIsModalAddPet] = useState(false);
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
      <BtnAddSticky type="button" onClick={() => setIsModalAddPet(true)}>
        <Add width={23.3} height={23.3}></Add>
        Add pet
      </BtnAddSticky>
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
      {isModalAddPet && (
        <Modal onClose={() => setIsModalAddPet(false)}>
          <AddNoticeForm onClose={() => setIsModalAddPet(false)} />
        </Modal>
      )}
    </>
  );
};

export default NoticesPageContent;
