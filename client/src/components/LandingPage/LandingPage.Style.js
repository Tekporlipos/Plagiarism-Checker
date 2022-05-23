import styled from "styled-components";

export const LogoContainer = styled.div`
  width: 14%;
  height: 18vh;
  margin-left: 2em;
`;

export const Logo = styled.img`
  max-height: 100%;
`;

export const HeroSection = styled.div`
  width: 100%;
  height: 80vh;
`;
export const HeroAvatar = styled.div`
  width: 40%;
  height: 80%;
  position: absolute;
  top: 8%;
  left: 2%;
`;
export const AvatarImage = styled.img`
  max-height: 100%;
  z-index: 20;
`;

export const HeroText = styled.h1`
  position: absolute;
  top: 20%;
  left: 43%;
  width: 55%;
  font-weight: lighter;
  font-size: 3em;
`;
export const BoldText = styled.span`
  font-weight: bold;
  font-size: 1.5em;
  color: #eea40e;
`;

export const Button = styled.button`
  position: absolute;
  top: 68%;
  left: 43%;
  width: 14%;
  height: 10vh;
  background-color: #eea40e;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 8px;

  &:hover {
    color: #eea40e;
    background-color: white;
    cursor: pointer;
  }
`;
