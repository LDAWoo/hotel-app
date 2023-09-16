import { Route, Routes } from "react-router-dom";

import AppAuthProvider from "./components/Contexts/AppAuthProvider";
import AppDeviceProvider from "./components/Contexts/AppDeviceProvider";
import AppThemeProvider from "./components/Contexts/AppThemeProvider";
import AppUserProvider from "./components/Contexts/AppUserProvider";
import { publicRoutesPathComponent } from "./routes/routes";

function App() {
  return (
    <AppAuthProvider>
      <AppThemeProvider>
        <AppDeviceProvider>
          <AppUserProvider>
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
          </AppUserProvider>
        </AppDeviceProvider>
      </AppThemeProvider>
    </AppAuthProvider>
  );
}

export default App;
