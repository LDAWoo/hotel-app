import { Route, Routes } from "react-router-dom";
import { publicRoutesPathComponent } from "./routers/routes";

function App() {
  return (
    <Routes>
      {publicRoutesPathComponent.map((route, index) => {
        let Layout = route.layout;
        const Page = route.component;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
