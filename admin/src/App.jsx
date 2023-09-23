import { Route, Routes } from "react-router-dom";
import Page from "./components/Page";
import Home from "./screens/Home";
import CustomerList from "./screens/Customerlist";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <Page title="Dashboard">
            <Home />
          </Page>
        }
      />

      <Route
        path="customers/customer-list"
        index
        element={
          <Page title="Customer list">
            <CustomerList />
          </Page>
        }
      />
    </Routes>
  );
}

export default App;
