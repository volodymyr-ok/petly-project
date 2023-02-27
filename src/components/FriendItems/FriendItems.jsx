import React, { useState } from "react";
import PropTypes from "prop-types";

import { TimeModal } from "../TimeModal/TimeModal";
import {
  FriendsItem,
  FriendsTitle,
  FriendsLogo,
  InfoWrap,
  Wrap,
  DescrWrap,
  Descr,
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
  workDays,
}) => {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

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
          {workDays && (
            <InfoWrap onClick={toggleModal}>
              <p>Time:</p>
              <p>9:00-17:00</p>
              {showModal && <TimeModal workDays={workDays} />}
            </InfoWrap>
          )}
          {!workDays && (
            <>
              <p>Time:</p>
              <p>-----------------</p>
            </>
          )}
          {address && (
            <InfoWrap
              href={addressUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <p>Adress:</p>
              <Descr title={address}>{address}</Descr>
            </InfoWrap>
          )}
          {!address && (
            <>
              <p>Adress:</p>
              <p>-----------------</p>
            </>
          )}
          {email && (
            <InfoWrap href={"mailto:" + email}>
              <p>Email:</p>
              <Descr title={email}>{email}</Descr>
            </InfoWrap>
          )}
          {!email && (
            <>
              <p>Email:</p>
              <p>-----------------</p>
            </>
          )}
          {phone && (
            <InfoWrap href={"tel:" + phone}>
              <p>Phone:</p>
              <Descr title={phone}>{phone}</Descr>
            </InfoWrap>
          )}
          {!phone && (
            <>
              <p>Phone:</p>
              <p>-----------------</p>
            </>
          )}
        </Wrap>
      </DescrWrap>
    </FriendsItem>
  );
};

FriendsItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  addressUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  workDays: PropTypes.array,
};
