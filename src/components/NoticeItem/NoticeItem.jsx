import {
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
    SpaceBox
} from "./NoticeItems.styled"

import { SvgMarkup } from "../SvgHandler/SvgHandler";
import defImage from "../../img/defaultImg.jpeg"

const svgLike = SvgMarkup(24,22,"btnLike")
const svgRemove = SvgMarkup(16,17,"btnRemove")


export const NoticeItem = ({arrayFromBack, addFavorite, removePost, readMoreModal}) => {
    return <>
                    {arrayFromBack.map(el=>{
                    const {category, image, breed, place, age, id, isPostOwner} = el
                    return (
                       <Item key={id}>
                            <ItemCategory>{category}</ItemCategory>
                            <BtnAdd onClick={addFavorite}>
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
                                    <BtnReadMore onClick={readMoreModal}>Learn more</BtnReadMore>
                                    {isPostOwner? <BtnRemove onClick={removePost}>
                                        Delete{svgRemove}
                                    </BtnRemove> : <SpaceBox></SpaceBox>}
                                </InfoAction>
                            </Info>
                       </Item> 
                    )
                })}</>
}