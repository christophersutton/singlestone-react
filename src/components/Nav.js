import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-endless.svg";

const Header = styled.header`
    background-color: #222222;
    padding: 12px 0;
  `;
  const Logo = styled.img`
    width: 140px;
  `;

const Nav = () => {
  
  return (
    <Header>
      <div className="container">
        <Logo src={logo} alt="Endless Logo" />
      </div>
    </Header>
  );
};
export default Nav;
