import { useState } from "react";
import PropTypes from "prop-types";
import { Input, SearchForm, Label, SearchButton } from "./SearchInput.styled";
import searchBtn from "../../assets/svg/searchBtn.svg";
import searchReset from "../../assets/svg/searchReset.svg";

export const SearchInput = ({ onSubmit }) => {
  const [search, setSearch] = useState("");
  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
  };

  const onButtonClick = (e) => {
    setSearch("");
  };

  return (
    <SearchForm onSubmit={onFormSubmit}>
      <Label>
        <Input type="text" placeholder="Search" onChange={onInputChange} value={search} />
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
