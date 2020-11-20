import React from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuItem = ({ title, key }) => {
  return (
    <div>
    <Menu.ItemGroup key="g1" title="ACCOUNTS">
      <Menu.Item key={key}>{title}</Menu.Item>
      <Line />
    </Menu.ItemGroup>
    </div>
  );
};

export default MenuItem;
