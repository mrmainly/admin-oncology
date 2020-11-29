import React, { useContext, useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import Link from 'next/link'
const { Sider } = Layout;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;


const LeftPanel = () => {
  const [collapsed, setCollapsed] = useState(false)
  
  const onCollapse = (collapsed) => {

    setCollapsed(collapsed)
  };

  return (
    <Sider width={"25%"} className="site-layout-background" collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.ItemGroup key="g1" title="АККАУНТЫ">
          <Menu.Item
            key="1"
          ><Link href="/">
            Пользователи
            </Link>
          </Menu.Item>
          <Line />
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g1" title="ОНКОЛОГИЯ">
          <Menu.Item key="2">Формы обратной связи</Menu.Item>
          <Line />
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g1" title="ИССЛЕДОВАНИЕ">
          <Menu.Item key="3">Медицинские исследования</Menu.Item>

          <Menu.Item key="4">Местоположения исследований</Menu.Item>
          <Menu.Item key="5">Онкомаркеры</Menu.Item>
          <Menu.Item key="6">Приемы</Menu.Item>
          <Menu.Item key="7">Результаты исследований НДКТ</Menu.Item>
          <Menu.Item key="8">РЕЗУЛЬТАТЫ исследований имуннохимический тест</Menu.Item>
          <Menu.Item key="9">Результаты исследований матки</Menu.Item>
          <Menu.Item key="10">
            Результаты исследований молочной железы
          </Menu.Item>
          <Menu.Item key="11">Результаты исследований печени</Menu.Item>
          <Menu.Item key="12">
            Результаты исследований предстательной железы
          </Menu.Item>
          <Line />
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g1" title="ОПРОС">
          <Menu.Item
            key="13"
          >
            <Link href="/Ancet/choiseAncet">
            Анкеты колоноскомии
            </Link>
          </Menu.Item>
          <Menu.Item key="14">Анкеты легких</Menu.Item>
          <Menu.Item key="15">Анкеты молочной железы</Menu.Item>
          <Menu.Item key="16">Анкеты печени</Menu.Item>
          <Menu.Item key="17">Анкеты предстательной железы</Menu.Item>
          <Menu.Item key="18">Анкеты шейки матки</Menu.Item>
        </Menu.ItemGroup>
        <Line />
        <Menu.ItemGroup key="g1" title="ПОЛЬЗОВАТЕЛИ И ГРУППЫ">
          <Menu.Item key="19">Группы</Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  );
};

export default LeftPanel;