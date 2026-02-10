import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Country from './pages/Country'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import MainLayout from './components/MainLayout'
import CountryDetails from './pages/CountryDetails'


function App() {
  return (
    <>
      <Routes>
      <Route element={<MainLayout/>} >
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/country" element={<Country/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/country/:id" element={<CountryDetails/>} />
      </Route>
        
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </>
  )
}

export default App