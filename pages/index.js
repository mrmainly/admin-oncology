import { Layout, Menu } from "antd";
import React, { useState } from "react";
import LeftPanel from "../components/LeftPanel";
import Navbar from "../components/Navbar/NavbarMain";
import ChoiseUser from "../components/table/ChoiseUser";
import ChoiseAncet from "../components/table/ChoiseAncet";
import { Context } from "../context";
const { Header, Content } = Layout;
const MainPanel = () => {
  const [showUser, setShowUser] = useState(false);
  const [showAncet, setShowAncet] = useState(false);

  const openShowUser = () => {
    setShowUser(true)
    setShowAncet(false)
  }
  const openShowAncet = () => {
    setShowAncet(true)
    setShowUser(false)
  }
  return (
    <Context.Provider value={{openShowAncet, openShowUser}}>
      <Layout>
        <Navbar />
        <Layout>
          <LeftPanel />
          <Layout style={{ padding: "0 24px 24px" }}>
            {showUser && <ChoiseUser />}
            {showAncet && <ChoiseAncet />}
          </Layout>
        </Layout>
      </Layout>
    </Context.Provider>
  );
};

export default MainPanel;