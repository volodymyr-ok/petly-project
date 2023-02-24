import { useState } from "react";
import { Input, SearchForm, Label, SearchButton } from "./SearchInput.styled";
import searchBtn from "../../assets/svg/searchBtn.svg";
import searchReset from "../../assets/svg/searchReset.svg";
export const SearchInput = () => {
  const [search, setSearch] = useState("");

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const onButtonClick = (e) => {
    setSearch("");
  };

  return (
    <SearchForm onSubmit={onFormSubmit}>
      <Label>
        <Input type="text" placeholder="Search" onChange={onInputChange} value={search} />
        <SearchButton type="submit" onClick={onButtonClick}>
          <img src={!search ? searchBtn : searchReset} alt="search" />
        </SearchButton>
      </Label>
    </SearchForm>
  );
};
