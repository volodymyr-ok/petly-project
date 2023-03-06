import { NavBox, NavList, NavItem } from "./NoticesCategoryNav.styled";
import { Button } from "../../components/Button/Button";
import { AddNotice } from "../AddNotice/AddNotice";
import { useLocation } from "react-router-dom";

export const notAuthorized = [
  {
    href: "lost-found",
    text: "lost-found",
  },
  {
    href: "in-good-hands",
    text: "in good hands",
  },
  {
    href: "sell",
    text: "sell",
  },
];
export const authorized = [
  {
    href: "lost-found",
    text: "lost-found",
  },
  {
    href: "in-good-hands",
    text: "in good hands",
  },
  {
    href: "sell",
    text: "sell",
  },
  {
    href: "favorite-ads",
    text: "favorite ads",
  },
  {
    href: "own",
    text: "my ads",
  },
];

export const NoticesCategoryNav = ({
  onChooseCategory,
  isLogined,
  onAddPet,
}) => {
  const location = useLocation();
  const { pathname } = location;
  console.log("pathname", pathname === "/notices");

  return (
    <>
      <NavBox>
        <NavList onClick={onChooseCategory}>
          {isLogined
            ? authorized.map(({ href, text }) => {
                return (
                  <NavItem to={`/notices/${href}`} key={href}>
                    <Button
                      className={
                        pathname === "/notices" && href === "sell"
                          ? "active"
                          : null
                      }
                      data-id={href}
                    >
                      {text}
                    </Button>
                  </NavItem>
                );
              })
            : notAuthorized.map(({ href, text }) => {
                return (
                  <NavItem to={`/notices/${href}`} key={href}>
                    <Button
                      className={
                        pathname === "/notices" && href === "sell"
                          ? "active"
                          : null
                      }
                    >
                      {text}
                    </Button>
                  </NavItem>
                );
              })}
        </NavList>
        <AddNotice onAddPet={onAddPet} />
      </NavBox>
    </>
  );
  //   );
};
