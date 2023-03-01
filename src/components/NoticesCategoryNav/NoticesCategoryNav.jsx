import { NavBox, NavList, NavItem } from "./NoticesCategoryNav.styled";
import { Button } from "../../components/Button/Button";
import { AddNotice } from "../AddNotice/AddNotice";

export const authorized = ["lost-found", "in good hands", "sell", "favorite ads", "my ads" ]
export const notAuthorized = ["lost-found", "in good hands", "sell" ]

export const NoticesCategoryNav = ({onChooseCategory, isLogined}) => {
    return <>
            <NavBox>
                <NavList onClick={onChooseCategory}>
                    { isLogined? authorized.map(el=>{
                        return <NavItem to={`/notices/${el}`} key={el}>
                        <Button href={`/notices/${el}`}>{el}</Button>
                        </NavItem>
                    }): notAuthorized.map(el=>{
                        return <NavItem  to={`/notices/${el}`} key={el}>
                        <Button href={`/notices/${el}`}>{el}</Button>
                        </NavItem>
                    })}
                </NavList>
                <AddNotice/>
            </NavBox>
    </>
};
