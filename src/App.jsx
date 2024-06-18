
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Qt from './Components/Qt'
import Footer from './Components/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Food from './Components/Food'
import FoodCarDetails from './Components/FoodCarDetails'
function App() {
 

  return (
    <>
      <BrowserRouter >
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Qt />} />
        {/* <Route path="/foods" element={<Food />} /> */}
        <Route path='/foods'>
          <Route index element={<Food />} />
          <Route path=':id' element={<FoodCarDetails />} />
        </Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
