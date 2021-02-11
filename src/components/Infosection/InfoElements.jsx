import styled from "styled-components";
import { Link } from "react-router-dom";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ darkTheme }) => (darkTheme ? "#fafafa" : "#090909")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  height: 830px;
  width: 100%;
  max-width: 1100px;
  margin: 80px auto 0 auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 860px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-area: row1;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: ${({ darkTheme }) => (darkTheme ? "#00e1ff" : "#0090a3")};
  font:size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ darkTheme }) => (darkTheme ? "#00b4cc" : "#0090a3")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 500px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 30px;
  color: ${({ darkTheme }) => (darkTheme ? "#090909" : "#fafafa")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 455px;
  height: 100%;
  position: relative;
  right: 50px;

  @media screen and (max-width: 768px) {
    right: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin-bottom: 10px;
  padding-right: 0;
  padding-left: 20px;
`;

export const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 480px) {
    grid-template-columns: auto auto;
  }
`;

export const Skill = styled.li`
  margin-bottom: 10px;
  border: 1.5px solid
    ${({ darkBorder }) => (darkBorder ? "#00b4cc" : "#00e1ff")};
  border-radius: 4px;
  padding: 6px 5px;
  margin: 5px 20px 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ darkTheme }) => (darkTheme ? "#090909" : "#fafafa")};
  &:hover {
    transform: scale(1.02);
  }
`;

export const Logo = styled.span`
  color: #60c3d1;
  font-size: 24px;
`;

export const ResumeWrapper = styled.div`
  grid-area: row2;
  width: 100px;
  margin: 30px auto 0 auto;
`;

export const ResumeBtn = styled(Link)`
  font-size: 16px;
  text-align: center;
  background: #00b4cc;
  color: #090909;
  border: 1.5px solid #00b4cc;
  padding: 10px 20px;
  border-radius: 4px;
  margin-top: 100px;
  text-decoration: none;
  transition: 0.15s all ease-in-out;

  &:hover {
    color: #00b4cc;
    background: transparent;
    transition: 0.15s all ease-in-out;
  }
`;
