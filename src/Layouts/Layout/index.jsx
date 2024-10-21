import { Layout } from "antd";
import React from "react";
import HeaderContent from "../Header";
import "./index.scss";

function MainLayout({ children, dir }) {
  const { Header, Content } = Layout;
  const dashboard = !window.location.href.includes("trade");
  return (
    <>
      <Layout className="layout" dir={dir}>
        {dashboard && (
          <Header className="header animate__animated animate__fadeInDown">
            <HeaderContent />
          </Header>
        )}
        <Content
          className={`${
            dashboard && "content"
          } animate__animated animate__fadeIn`}
        >
          {children}
        </Content>
      </Layout>
    </>
  );
}

export default MainLayout;
