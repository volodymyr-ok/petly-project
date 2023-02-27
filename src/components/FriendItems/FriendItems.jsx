import React from "react";

import {
  FriendsItem,
  FriendsTitle,
  FriendsLogo,
  InfoWrap,
  Wrap,
  DescrWrap,
  InfoDescr,
} from "./FriendItems.styled";
import petPartner from "../../img/petPartner.png";

export const FriendsItems = ({
  title,
  url,
  addressUrl,
  imageUrl,
  address,
  email,
  phone,
}) => {
  return (
    <FriendsItem>
      <FriendsTitle
        href={url}
        target="_blank"
        aria-label="name"
        rel="noopener noreferrer nofollow"
      >
        {title}
      </FriendsTitle>
      <DescrWrap>
        {!imageUrl && (
          <FriendsLogo src={petPartner} alt={title} width="110" height="78" />
        )}
        {imageUrl && (
          <FriendsLogo src={imageUrl} alt={title} width="110" height="78" />
        )}
        <Wrap>
          <InfoWrap>
            <InfoDescr>Time:</InfoDescr>
            <InfoDescr>'time'</InfoDescr>
          </InfoWrap>
          <InfoWrap
            href={addressUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <InfoDescr>Adress:</InfoDescr>
            {!address && <p>-----------------</p>}
            {address && <InfoDescr>{address}</InfoDescr>}
          </InfoWrap>
          <InfoWrap href={email}>
            <InfoDescr>Email:</InfoDescr>
            {!email && <p>-----------------</p>}
            {email && <InfoDescr>{email}</InfoDescr>}
          </InfoWrap>
          <InfoWrap href={"tel:" + phone}>
            <InfoDescr>Phone:</InfoDescr>
            {!phone && <p>-----------------</p>}
            {phone && <InfoDescr>{phone}</InfoDescr>}
          </InfoWrap>
        </Wrap>
      </DescrWrap>
    </FriendsItem>
  );
};

// FriendsItem.propTypes = {
//   children: PropTypes.string,
// };
