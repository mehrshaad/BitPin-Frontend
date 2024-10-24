import "./Assets/Styles/variables.css";
import "./Assets/Styles/App.scss";
import Config from "./Config";
import Layout from "./Layouts/Layout";
import Router from "./Routes";

function App() {
  return (
    <Config>
      <Layout dir="rtl">
        <Router />
      </Layout>
    </Config>
  );
}

export default App;
