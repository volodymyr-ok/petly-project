import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Input, SearchForm, Label, SearchButton } from "./SearchInput.styled";
import searchBtn from "../../assets/svg/searchBtn.svg";
import searchReset from "../../assets/svg/searchReset.svg";
import useDebounce from "react-debounced";
import { useSearchParams } from "react-router-dom";

export const SearchInput = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const search = searchParams.get("query") || "";
  const debounce = useDebounce(1000);
  const [needClear, setNeedClear] = useState(false);

  useEffect(() => {
    if (!search && needClear) onSubmit(search);
    setNeedClear(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const onInputChange = ({ target: { value } }) => {
    setSearchParams(value !== "" ? { query: value } : {});
    debounce(() => onSubmit(value));
  };

  const onFormSubmit = (e) => e.preventDefault();
  const onButtonClick = () => {
    setNeedClear(true);
    setSearchParams({});
  };

  return (
    <SearchForm onSubmit={onFormSubmit}>
      <Label>
        <Input
          type="text"
          placeholder="Search"
          onChange={onInputChange}
          value={search}
        />
        {!search ? (
          <SearchButton type="submit">
            <img src={searchBtn} alt="search" />
          </SearchButton>
        ) : (
          <SearchButton type="button" onClick={onButtonClick}>
            <img src={searchReset} alt="reset" />
          </SearchButton>
        )}
      </Label>
    </SearchForm>
  );
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
};
