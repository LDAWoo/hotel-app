import { Route, Routes } from "react-router-dom";

import AppAuthProvider from "./components/Contexts/AppAuthProvider";
import AppThemeProvider from "./components/Contexts/AppThemeProvider";
import { publicRoutesPathComponent } from "./routes/routes";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import AppUserProvider from "./components/Contexts/AppUserProvider";

function App() {
  return (
    <AppAuthProvider>
      <AppThemeProvider>
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
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </AppUserProvider>
      </AppThemeProvider>
    </AppAuthProvider>
  );
}

export default App;
