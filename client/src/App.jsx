import { BrowserRouter, Route, Routes } from "react-router-dom"
import { publicRoutesPathComponent } from "./routes/routes"

function App() {

  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
