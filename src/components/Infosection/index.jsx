import React from "react";
import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  SkillsContainer,
  Skill,
  Logo,
  ResumeWrapper,
  ResumeBtn,
} from "./InfoElements";
import {
  DiBootstrap,
  DiCss3Full,
  DiHtml5,
  DiJavascript1,
  DiMysql,
  DiPhp,
  DiReact,
  DiJqueryLogo,
} from "react-icons/di";
import PDF from "../../Resume.pdf";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  headLine,
  description,
  lightText,
  darkText,
  buttonLabel,
  img,
  alt,
}) => {
  let darkTheme = true;

  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const userPrefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  if (userPrefersDark) {
    darkTheme = true;
  }

  if (userPrefersLight) {
    darkTheme = false;
  }

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} darkTheme={darkTheme}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading darkTheme={darkTheme}>{headLine}</Heading>
                <Subtitle darkTheme={darkTheme}>
                  Hi! I am Vishal, a Web Developer with over 2+ years of
                  experience in building and designing websites. I love to
                  create and design beatiful and minimal websites that are
                  pleasing to the viewer's eyes.
                  <br />I am most passionate about learning new tools and
                  frameworks every single day.
                  <br />
                  <br />
                  Skills I possess:
                </Subtitle>
                <SkillsContainer>
                  <Skill
                    darkText={true}
                    darkBorder={true}
                    darkTheme={darkTheme}
                  >
                    <Logo>{/* <DiHtml5 /> */}</Logo>
                    HTML5
                  </Skill>
                  <Skill
                    darkText={true}
                    darkBorder={true}
                    darkTheme={darkTheme}
                  >
                    <Logo>{/* <DiCss3Full /> */}</Logo>
                    CSS3
                  </Skill>
                  <Skill
                    darkText={true}
                    darkBorder={true}
                    darkTheme={darkTheme}
                  >
                    <Logo>{/* <DiJavascript1 /> */}</Logo>
                    JavaScript
                  </Skill>
                  <Skill
                    darkText={true}
                    darkBorder={true}
                    darkTheme={darkTheme}
                  >
                    <Logo>{/* <DiJqueryLogo /> */}</Logo>
                    jQuery
                  </Skill>
                  <Skill
                    darkText={true}
                    darkBorder={true}
                    darkTheme={darkTheme}
                  >
                    <Logo>{/* <DiPhp /> */}</Logo>
                    PHP
                  </Skill>
                  <Skill
                    darkText={true}
                    darkBorder={true}
                    darkTheme={darkTheme}
                  >
                    <Logo>{/* <DiMysql /> */}</Logo>
                    MySQL
                  </Skill>
                  <Skill
                    darkText={true}
                    darkBorder={true}
                    darkTheme={darkTheme}
                  >
                    <Logo>{/* <DiReact /> */}</Logo>
                    React
                  </Skill>
                  <Skill
                    darkText={true}
                    darkBorder={true}
                    darkTheme={darkTheme}
                  >
                    <Logo>{/* <DiBootstrap /> */}</Logo>
                    Bootstrap
                  </Skill>
                </SkillsContainer>
                {/* <BtnWrap>
                  <Button to="/">{buttonLabel}</Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <ResumeWrapper>
            <ResumeBtn to={PDF} target="_blank">
              Resume
            </ResumeBtn>
          </ResumeWrapper>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
