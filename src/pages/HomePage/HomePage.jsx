import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Title, HomeSection, Background } from "../HomePage/HomePage.styled";
import { Container } from "./../../components/Container/Container";
import { useDispatch } from "react-redux";
import { loginGoogle } from "../../redux/auth/auth-operations";

import girlBgM from "../../assets/img/home-girl_bg/girlBgM.webp";
import girlBgM2x from "../../assets/img/home-girl_bg/girlBgM@2x.webp";
import girlBgT from "../../assets/img/home-girl_bg/girlBgT.webp";
import girlBgT2x from "../../assets/img/home-girl_bg/girlBgT@2x.webp";
import girlBgD from "../../assets/img/home-girl_bg/girlBgD.webp";
import girlBgD2x from "../../assets/img/home-girl_bg/girlBgD@2x.webp";

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const tokenParam = searchParams.get("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("tokenParam", tokenParam);
  console.log("searchParams", searchParams);

  useEffect(() => {
    if (tokenParam) {
      dispatch(loginGoogle({ tokenParam }));
      navigate("/user");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenParam]);

  return (
    <>
      <HomeSection>
        <Container>
          <Title>Take good care of your small pets</Title>
        </Container>
        <Background>
          <picture>
            <source
              srcset={`${girlBgM} 1x, ${girlBgM2x} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcset={`${girlBgT} 1x, ${girlBgT2x} 2x`}
              media="(max-width: 1199px)"
            />
            <source
              srcset={`${girlBgD} 1x, ${girlBgD2x} 2x`}
              media="(min-width: 1200px)"
            />
            <img src={girlBgM} alt="home-girl_and_dog" />
          </picture>
        </Background>
      </HomeSection>
    </>
  );
};

export default HomePage;
