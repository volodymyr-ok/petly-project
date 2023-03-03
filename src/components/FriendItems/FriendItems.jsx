import React, { useState } from "react";
import PropTypes from "prop-types";

import { TbPaw } from "react-icons/tb";

import { TimeModal } from "../TimeModal/TimeModal";
import {
  FriendsItem,
  FriendsTitle,
  FriendsLogo,
  InfoWrap,
  Wrap,
  DescrWrap,
  AlternativeLogo,
  Descr,
} from "./FriendItems.styled";
import petPartner from "../../img/petPartner.jpg";

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

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const weekday = new Date().getDay() - 1;

  return (
    title && (
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
            <AlternativeLogo
              src={petPartner}
              alt={title}
              width="80"
              height="78"
            />
          )}
          {imageUrl && (
            <FriendsLogo src={imageUrl} alt={title} width="110" height="78" />
          )}
          <Wrap>
            {workDays && (
              <InfoWrap onClick={toggleModal}>
                <p>Time:</p>
                {workDays[weekday].isOpen ? (
                  <p>
                    {workDays[weekday].from} -{workDays[weekday].to}
                  </p>
                ) : (
                  <p>Closed</p>
                )}
                {showModal && (
                  <TimeModal
                    weekday={weekday}
                    workDays={workDays}
                    onClick={toggleModal}
                  />
                )}
                <TbPaw style={{ sroke: "inherit" }} size={"15px"} />
              </InfoWrap>
            )}
            {!workDays && (
              <div>
                <p>Time:</p>
                <p>-----------------</p>
              </div>
            )}
            {address && (
              <InfoWrap
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <p>Address:</p>
                <Descr title={address}>{address}</Descr>
              </InfoWrap>
            )}
            {!address && (
              <div>
                <p>Address:</p>
                <p>-----------------</p>
              </div>
            )}
            {email && (
              <InfoWrap href={"mailto:" + email}>
                <p>Email:</p>
                <Descr title={email}>{email}</Descr>
              </InfoWrap>
            )}
            {!email && (
              <div>
                <p>Email:</p>
                <p>-----------------</p>
              </div>
            )}
            {phone && (
              <InfoWrap href={"tel:" + phone}>
                <p>Phone:</p>
                <Descr title={phone}>{phone}</Descr>
              </InfoWrap>
            )}
            {!phone && (
              <div>
                <p>Phone:</p>
                <p>-----------------</p>
              </div>
            )}
          </Wrap>
        </DescrWrap>
      </FriendsItem>
    )
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
