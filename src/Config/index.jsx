import { ConfigProvider } from "antd";

function Config({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "IRANYekan",
          colorPrimary: "#389e0d",
        },
        components: {
          Button: {
            colorPrimary: "#73d13d",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default Config;
