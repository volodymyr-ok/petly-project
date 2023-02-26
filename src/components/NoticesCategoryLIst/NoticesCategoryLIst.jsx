import {
    ListBox,
    List,
    BtnAddSticky,
} from "./NoticesCategoryLIst.styled"
import { SvgMarkup } from "../SvgHandler/SvgHandler";
import { NoticeItem } from "../NoticeItem/NoticeItem";

const svgAdd = SvgMarkup(21.3,21.3,"addTo")


const arrayFromBack = [
{
    category: "in good hands",
    image: undefined,
    breed: "pomerian",
    place: "Lviv",
    age: "One year",
    id: '1',
    isPostOwner: true,
},
{
    category: "in good hands",
    image: "#",
    breed: "pomerian",
    place: "Lviv",
    age: "One year",
    id: '2',
    isPostOwner: false,
},
{
    category: "in good hands",

    breed: "pomerian",
    place: "Lviv",
    age: "One year",
    id: '3',
    isPostOwner: true,
},
{
    category: "in good hands",
    image: "#",
    breed: "pomerian",
    place: "Lviv",
    age: "One year",
    id: '4',
    isPostOwner: false,
}
]

export const NoticesCategoryList = () => {

    const handlerModalInfo=(e)=>{
        console.log("modal read", e)
    };
    const handlerModalAddPet=(e)=>{
        console.log("modal add a pet", e)
    };
    const handlerFavorite=(e)=>{
        console.log("modal add to favorite", e)
    };
    const handlerRemove=(e)=>{
        console.log("modal remove notice", e)
    };

    return <ListBox>
                <BtnAddSticky onClick={handlerModalAddPet}>
                    {svgAdd}
                    Add pet
                </BtnAddSticky>
                <List>
                    <NoticeItem
                    arrayFromBack={arrayFromBack}
                    addFavorite = {handlerFavorite}
                    removePost = {handlerRemove}
                    readMoreModal = {handlerModalInfo}
                    ></NoticeItem>
                </List>
    </ListBox>
  };