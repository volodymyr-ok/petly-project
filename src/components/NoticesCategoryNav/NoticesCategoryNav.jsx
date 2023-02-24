import {NavBox, NavList} from "./NoticesCategoryNav.styled"
import { Button } from "../../components/Button/Button";
import { AddNotice } from "../AddNotice/AddNotice";

const isUser = true

const authorized = ["lost/found", "in good hands", "sell", "favorite ads", "my ads" ]
const notAuthorized = ["lost/found", "in good hands", "sell" ]

export const NoticesCategoryNav = () => {
    return <>
            <NavBox>
                <NavList>
                    { isUser? authorized.map(el=>{
                        return <li key={el}>
                        <Button>{el}</Button>
                        </li>
                    }): notAuthorized.map(el=>{
                        return <li key={el}>
                        <Button>{el}</Button>
                        </li>
                    })}
                </NavList>
                <AddNotice/>
            </NavBox>
    </>
  };