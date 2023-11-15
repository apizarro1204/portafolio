import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkedin from "../../svg/linkedin.svg";

const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/apizarro1204",
      logo: logoGithub,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/alexis-pizarro",
      logo: logoLinkedin,
    }
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>Hello, i'm</p>
            <p>Alexis Pizarro</p>
            <p>FullStack Developer</p>
          </S.Title>
          <S.DescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="__blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src="/img/profile.png" alt="Rafa Tárrega - Frontend Developer" />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};

export default AboutMe;
