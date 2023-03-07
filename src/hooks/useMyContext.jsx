import { createContext, useContext, useState } from "react";

const NoticesContext = createContext();

export const useNoticesParams = () => useContext(NoticesContext);

export const NoticesProvider = ({ children }) => {
  const [page, setPageParams] = useState(1);
  const [search, setSearchParams] = useState("");

  const setPage = (value) => {
    setPageParams(value);
  };

  const setSearch = (value) => {
    setSearchParams(value);
  };

  return (
    <NoticesContext.Provider value={{ setPage, page, setSearch, search }}>
      {children}
    </NoticesContext.Provider>
  );
};
