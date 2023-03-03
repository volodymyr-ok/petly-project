import React, { useEffect, useState } from "react";
import axios from "axios";

import { Title } from "../../components/Title/Title";
import { Container } from "../../components/Container/Container";
import { FriendsItems } from "../../components/FriendItems/FriendItems";
import { FriendsList } from "./OurFriendsPage.styled";

export const weekday = new Date().getDay() - 1;

const OurFriendsPage = () => {
  const [partners, setPartners] = useState([]);

  const FetchMovieByID = async () => {
    const data = await axios.get(
      "https://petly-2v85.onrender.com/api/services/"
    );
    return data;
  };

  useEffect(() => {
    FetchMovieByID()
      .then((data) => {
        const response = data;
        setPartners(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Title>Our friends</Title>
      <FriendsList>
        {partners.data &&
          partners.data.map(
            ({
              title,
              url,
              addressUrl,
              imageUrl,
              address,
              email,
              phone,
              workDays,
              _id,
            }) => (
              <FriendsItems
                key={_id}
                title={title}
                url={url}
                addressUrl={addressUrl}
                imageUrl={imageUrl}
                address={address}
                email={email}
                phone={phone}
                workDays={workDays}
              />
            )
          )}
      </FriendsList>
    </Container>
  );
};

export default OurFriendsPage;
