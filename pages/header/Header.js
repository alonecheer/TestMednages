import React from "react";
import HeaderStyleWrapper from "./header.style";
import { Layout } from "antd";
const { Header } = Layout;
const HeaderComponent = () => {
  return (
    <HeaderStyleWrapper>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      >
        <p> Mednage</p>
      </Header>
    </HeaderStyleWrapper>
  );
};

export default HeaderComponent;
