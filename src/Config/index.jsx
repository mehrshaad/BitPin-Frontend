import { ConfigProvider } from "antd";

function Config({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "IRANYekan",
          colorPrimary: "var(--secondary-text-color)",
        },
        components: {
          Button: {
            colorPrimary: "var(--button-background-color)",
          },
          Table: {
            borderColor: "var(--button-background-color)",
            footerBg: "var(--table-header-background-color)",
            footerColor: "var(--passive-text-color)",
            headerBg: "var(--table-header-background-color)",
            headerColor: "var(--primary-text-color)",
            headerSplitColor: "var(--divider-color)",
            rowHoverBg: "var(--table-row-hover-background-color)",
            colorBgContainer: "var(--table-row-background-color)",
          },
          Tabs: {
            cardBg: "var(--table-row-hover-background-color)",
            itemColor: "var(--passive-text-color)",
            itemHoverColor: "var(--primary-text-color)",
            itemSelectedColor: "var(--primary-text-color)",
            itemActiveColor: "var(--primary-text-color)",
            inkBarColor: "var(--secondary-text-color)",
            colorBorderSecondary: "var(--divider-color)",
            colorBgContainer: "var(--table-row-background-color)",
          },
          Pagination: {
            itemActiveBg: "var(--primary-background-color)",
            colorBgTextHover: "var(--secondary-text-color-light)",
            colorPrimary: "var(--secondary-text-color-light)",
            colorPrimaryHover: "var(--primary-text-color)",
            colorBgContainer: "var(--secondary-background-color)",
            colorBorder: "#00000",
          },
          Select: {
            colorPrimary: "var(--secondary-background-color)",
            colorBgBase: "var(--secondary-background-color)",
            // colorText: "var(--passive-text-color)",
            colorIcon: "var(--passive-text-color)",
            colorBorder: "#00000",
            optionActiveBg: "var(--select-option-background-color)",
            optionSelectedBg: "var(--table-row-background-color)",
            optionSelectedColor: "var(--primary-text-color)",
            selectorBg: "var(--secondary-background-color)",
            colorBgContainer: "var(--secondary-background-color)",
            colorBgElevated: "var(--secondary-background-color)",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default Config;
