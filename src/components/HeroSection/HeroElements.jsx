import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #090909;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 1024px;
  }

  @media screen and (max-width: 541px) {
    height: 720px;
  }

  @media screen and (max-width: 415px) {
    height: 736px;
  }

  @media screen and (max-width: 413px) {
    height: 892px;
  }

  @media screen and (max-width: 376px) {
    height: 812px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: -80px;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 415px) {
    height: 816px;
  }

  @media screen and (max-width: 541px) {
    height: 800px;
  }

  @media screen and (max-width: 413px) {
    height: 982px;
  }

  @media screen and (max-width: 376px) {
    height: 892px;
  }
`;

export const VideoBg = styled.video`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #000;

  @media screen and (max-width: 768px) {
    height: 1104px;
  }

  @media screen and (max-width: 415px) {
    height: 100%;
  }
`;

export const HeroContent = styled.div`
  max-width: 900px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;

  @media screen and (max-width: 360px) {
    padding-left: 10px;
  }
`;

export const HeroP = styled.p`
  font-size: 3rem;
  color: #d0d0d0;
  letter-spacing: 3px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeroH1 = styled.div`
  @media screen and (max-width: 960px) {
    width: 800px;
  }
`;

export const HeroWebDev = styled.p`
  font-size: 3.5rem;
  color: #008799;
  letter-spacing: 5px;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
