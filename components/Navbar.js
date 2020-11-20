import React from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";

const { Header, Content } = Layout;

const ContainerNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #176887;
`;

const Logo = styled.div`
  color: yellow;
  font-size: 20px;
`;
const Panel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PanelItem = styled.a`
  text-decoration: none;
  color: #fff;
`;
const Navbar = () => {
  const phone = "89142354628";
  return (
      <Header className="header" style={{ backgroundColor: "#176887" }}>
        <div className="logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ backgroundColor: "#176887" }}
        >
          <Menu.Item key="1" style={{ color: "yellow", fontSize: 20 }}>
            Онкопоиск Саха
          </Menu.Item>
          <Menu.Item key="1" style={{ color: "#fff", cursor: "text" }}>
            ДОБРО ПОЖЛОВАТЬ &nbsp; {phone}
          </Menu.Item>

          <Menu.Item key="3" style={{ color: "#fff" }}>
            ИЗМЕНИТЬ ПАРОЛЬ{" "}
          </Menu.Item>
          <Menu.Item key="4" style={{ color: "#fff" }}>
            ВЫЙТИ{" "}
          </Menu.Item>
        </Menu>
      </Header>
  );
};

export default Navbar;