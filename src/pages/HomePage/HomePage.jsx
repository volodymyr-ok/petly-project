import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Title,
  HomeSection,
  Background,
  TitleContainer,
} from "../HomePage/HomePage.styled";
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
        <TitleContainer>
          <Title>Take good care of your small pets</Title>
        </TitleContainer>
        <Background>
          <picture>
            <source
              srcSet={`${girlBgM} 1x, ${girlBgM2x} 2x`}
              media="(max-width: 767px)"
            />
            <source
              srcSet={`${girlBgT} 1x, ${girlBgT2x} 2x`}
              media="(max-width: 1279px)"
            />
            <source
              srcSet={`${girlBgD} 1x, ${girlBgD2x} 2x`}
              media="(min-width: 1280px)"
            />
            <img src={girlBgM} alt="home-girl_and_dog" />
          </picture>
        </Background>
      </HomeSection>
    </>
  );
};

export default HomePage;
