import React from "react";
import styled from "styled-components";
import { Layout, Menu, Breadcrumb } from "antd";

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

  <Breadcrumb style={{ marginLeft: 70, marginTop: 20}}>
    <Breadcrumb.Item>Начало</Breadcrumb.Item>
    <Breadcrumb.Item>исследование</Breadcrumb.Item>
    <Breadcrumb.Item>Онкомаркеры</Breadcrumb.Item>
    <Breadcrumb.Item>Добавть Онкомаркеры</Breadcrumb.Item>
  </Breadcrumb>

  );
};

export default Navbar;