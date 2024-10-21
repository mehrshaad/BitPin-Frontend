import React from "react";
import { Layout } from "antd";
import HeaderContent from "../Header";
import "./index.scss";

function MainLayout({ children, dir }) {
  const { Header, Content } = Layout;
  return (
    <>
      <Layout className="layout" dir={dir}>
        <Header className="header animate__animated animate__fadeInDown">
          <HeaderContent />
        </Header>
        <Content className="content animate__animated animate__fadeIn">
          {children}
        </Content>
      </Layout>
    </>
  );
}

export default MainLayout;
