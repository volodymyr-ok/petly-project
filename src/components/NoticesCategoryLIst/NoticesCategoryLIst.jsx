import {
    ListBox,
    List,
    Item,
    ItemCategory,
    BtnAdd,
    Image,
    Info,
    Title,
    InfoList,
    InfoItem,
    InfoAction,
    BtnReadMore,
    BtnRemove,
    BtnAddSticky,
    SpaceBox
} from "./NoticesCategoryLIst.styled"
import { SvgMarkup } from "../SvgHandler/SvgHandler";
import defImage from "../../img/defaultImg.jpeg"

const svgLike = SvgMarkup(24,22,"btnLike")
const svgRemove = SvgMarkup(16,17,"btnRemove")
const svgAdd = SvgMarkup(21.3,21.3,"addTo")

const isUserAuthorized = true

const arrayFromBack = [
{
    category: "in good hands",
    image: undefined,
    breed: "pomerian",
    place: "Lviv",
    age: "One year",
    id: '1'
},
{
    category: "in good hands",
    image: "#",
    breed: "pomerian",
    place: "Lviv",
    age: "One year",
    id: '2'
},
{
    category: "in good hands",

    breed: "pomerian",
    place: "Lviv",
    age: "One year",
    id: '3'
},
{
    category: "in good hands",
    image: "#",
    breed: "pomerian",
    place: "Lviv",
    age: "One year",
    id: '4'
}
]

export const NoticesCategoryList = () => {
    return <ListBox>
                <BtnAddSticky>
                    {svgAdd}
                    Add pet
                </BtnAddSticky>
                <List>
                {arrayFromBack.map(el=>{
                    const {category, image, breed, place, age, id} = el
                    return (
                       <Item key={id}>
                            <ItemCategory>{category}</ItemCategory>
                            <BtnAdd>
                                    {svgLike}
                            </BtnAdd>
                            <Image
                                src={image? image : defImage}
                                alt="some info !!!IMPORTANT"
                                width="280"
                                height="288"
                            />
                            <Info>
                                <Title>Cute dog looking for a home</Title>
                                <InfoList>
                                <tbody>
                                <tr>
                                    <InfoItem className="name">Breed:</InfoItem>
                                    <InfoItem>{breed}</InfoItem>
                                </tr>
                                <tr>
                                    <InfoItem className="name">Place:</InfoItem>
                                    <InfoItem>{place}</InfoItem>
                                </tr>
                                <tr>
                                    <InfoItem className="name">Age:</InfoItem>
                                    <InfoItem>{age}</InfoItem>
                                </tr>
                                </tbody>
                                </InfoList>
                                <InfoAction>
                                    <BtnReadMore>Learn more</BtnReadMore>
                                    {isUserAuthorized? <BtnRemove>
                                        Delete{svgRemove}
                                    </BtnRemove> : <SpaceBox></SpaceBox>}
                                </InfoAction>
                            </Info>
                       </Item> 
                    )
                })}
                    {/* <Item>
                        <ItemCategory>In good hands</ItemCategory>
                        <BtnAdd>
                            {svgLike}
                        </BtnAdd>
                        <Image
                            src="#"
                            alt="Dog"
                            width="280"
                            height="288"
                        />
                        <Info>
                            <Title>Cute dog looking for a home</Title>
                            <InfoList>
                            <tr>
                                <InfoItem className="name">Breed:</InfoItem>
                                <InfoItem>Pomerian</InfoItem>
                            </tr>
                            <tr>
                                <InfoItem className="name">Place:</InfoItem>
                                <InfoItem>Lviv</InfoItem>
                            </tr>
                            <tr>
                                <InfoItem className="name">Age:</InfoItem>
                                <InfoItem>One year</InfoItem>
                            </tr>
                            </InfoList>
                            <InfoAction>
                                <BtnReadMore>Learn more</BtnReadMore>
                                <BtnRemove>
                                    Delete{svgRemove}
                                </BtnRemove>
                            </InfoAction>
                        </Info>
                    </Item> */}
                </List>
    </ListBox>
  };