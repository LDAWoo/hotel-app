import { Route, Routes } from "react-router-dom"
import AppThemeProvider  from "./components/Contexts/AppThemeProvider";
import { publicRoutesPathComponent } from "./routes/routes"
import SignIn from "./screens/SignIn/SignIn";

function App() {
  return (
      <AppThemeProvider>
        <Routes>
          {
            publicRoutesPathComponent.map((route,index)=>{
              let Layout = route.layout
              const Page = route.component
  
              return (
                <Route
                key={index}
                path={route.path}
                element={
                  <Layout><Page/></Layout>
                }
                />
              )
            })
          }
          <Route path="/Login" element={<SignIn/>} />
        </Routes>
      </AppThemeProvider>
  )
}

export default App
