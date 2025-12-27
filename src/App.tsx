import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Lifestyle from "./pages/Lifestyle"
import World from "./pages/World"
import Sports from "./pages/Sports"
import Opinion from "./pages/Opinion"
import Business from "./pages/Business"
import Culture from "./pages/Culture"
import Fashion from "./pages/Fashion"
import Tech from "./pages/Tech"


const App = () => {
  return (
    <BrowserRouter>
       <Layout>
        <Routes>
          <Route path="/" element={<Lifestyle/>}/>
          <Route path="/world" element={<World />}/>
          <Route path="/sports" element={<Sports />}/>
          <Route path="/opinion" element={<Opinion />}/>
          <Route path="/business" element={<Business />}/>
          <Route path="/culture" element={<Culture />} />
          <Route path="/fashion" element={<Fashion />}/>
          <Route path="/tech" element={<Tech />}/> 
        </Routes>
       </Layout>
    </BrowserRouter>
  )
}

export default App