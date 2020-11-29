import React from "react";
import styled from "styled-components";
import { Layout, Menu, Typography } from "antd";
import {useRouter} from 'next/router'

const { Header, Content } = Layout;
const {Title} = Typography;
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
  color:v #fff;
`;

const ulText = styled(Title)`
    color: 'white';
    @media (max-width: 768px) {
     color: 'black';
    }
` 
const Navbar = () => {
  const phone = "89142354628";
  const router = useRouter()
  return (
      <Header className="header" style={{ backgroundColor: "#176887" }}>
        <div className="logo" />
        <Menu
          mode="horizontal"
          style={{ backgroundColor: "#176887" }}
          theme="dark"
        >
          <Menu.Item style={{ color: "yellow", fontSize: 20, cursor: 'text' }} onClick={() => {
              router.push('/')
          }}>
            Онкопоиск Саха
          </Menu.Item>
          <Menu.Item key="2" style={{ color: "#fff", cursor: "text" }}>
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