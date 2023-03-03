import { NavBox, NavList, NavItem } from "./NoticesCategoryNav.styled";
import { Button } from "../../components/Button/Button";
import { AddNotice } from "../AddNotice/AddNotice";

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
    href: "my-ads",
    text: "my ads",
  },
];

export const NoticesCategoryNav = ({
  onChooseCategory,
  isLogined,
  onAddPet,
}) => {
  return (
    <>
      <NavBox>
        <NavList onClick={onChooseCategory}>
          {isLogined
            ? authorized.map(({ href, text }) => {
                return (
                  <NavItem to={`/notices/${href}`} key={href}>
                    <Button>{text}</Button>
                  </NavItem>
                );
              })
            : notAuthorized.map(({ href, text }) => {
                return (
                  <NavItem to={`/notices/${href}`} key={href}>
                    <Button>{text}</Button>
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
