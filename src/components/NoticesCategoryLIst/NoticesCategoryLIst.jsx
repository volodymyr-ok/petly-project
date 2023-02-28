import {
    ListBox,
    List,
    BtnAddSticky,
} from "./NoticesCategoryLIst.styled"
import { SvgMarkup } from "../SvgHandler/SvgHandler";
import { NoticeItem } from "../NoticeItem/NoticeItem";
import { ResultNotFound } from "../ResultNotFound/ResultNotFound";
import { useDispatch, useSelector } from "react-redux";
const svgAdd = SvgMarkup(21.3,21.3,"addTo")

export const NoticesCategoryList = ({notices, onRemove, onReadMore, user, isLogined}) => {
    const dispatch = useDispatch();
    const handlerModalAddPet=(e)=>{
        if(!isLogined){
            console.log("pls login first")
        }
        console.log("modal add a pet", e)
    };
    const handlerFavorite=(e)=>{
        if(!isLogined){
            console.log("pls login first")
        }
    };
   

    return <ListBox >
                <BtnAddSticky onClick={handlerModalAddPet}>
                    {svgAdd}
                    Add pet
                </BtnAddSticky>
                {notices.length>0? 
                    <List>
                    <NoticeItem
                    user={user}
                    notices={notices}
                    addFavorite = {handlerFavorite}
                    onRemove = {onRemove}
                    onReadMore = {onReadMore}
                    ></NoticeItem>
                    </List>:
                     <ResultNotFound/>
                }
            
    </ListBox>
  };