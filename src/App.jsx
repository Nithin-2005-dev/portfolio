import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Achive from './components/Achive'
import Thankyou from './components/Thankyou'
export default function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home ></Home>
      <About></About>
      <Achive></Achive>
      <Footer></Footer>
    </>
  )
}
