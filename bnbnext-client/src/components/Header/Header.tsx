import React from "react";
import styled from "styled-components";
import Logo from "../../static/images/bb_logo_black.d657f8f5.png";

export interface HeaderProps {
  bottomBorder?: boolean;
}

const Container = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 96px;
  border-bottom: ${(props) =>
    props.bottomBorder ? "1px solid rgb(217, 218, 220)" : "none"};

  .header-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-logo {
    height: 40px;
  }
`;

const Header = ({ bottomBorder }: HeaderProps) => {
  return (
    <Container bottomBorder={bottomBorder}>
      <div className="header-content">
        <img className="header-logo" src={Logo} alt="buyandbelieve" />
      </div>
    </Container>
  );
};

export default Header;
