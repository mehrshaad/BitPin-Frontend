import { Layout } from "antd";
import { useEffect, useState } from "react";
import HeaderContent from "../Header";
import "./index.scss";

function MainLayout({ children, dir }) {
  const { Header, Content } = Layout;
  const [dashboard, setDashboard] = useState(true);
  useEffect(() => {
    setDashboard(!window.location.href.includes("trade?record"));
  }, [window.location.href]);
  return (
    <>
      <Layout className="layout" dir={dir}>
        {dashboard && (
          <Header className="header animate__animated animate__fadeInDown animate__delay-1s">
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
