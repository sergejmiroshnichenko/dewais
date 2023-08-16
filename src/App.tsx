import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import { Layout } from "components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
