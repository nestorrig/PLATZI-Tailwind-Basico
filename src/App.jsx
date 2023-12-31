// import { useState } from 'react'

import Faqs from './components/Faqs'
import Footer from './components/Footer'
import GridCards from './components/GridCards'
import Header from './components/Header'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ScrollCards from './components/ScrollCards'
import './index.css'

function App() {

  return (
    <>
      <Header />
      <Home />
      <main className='px-6 lg:px-12 dark:bg-dark1'>
        <ScrollCards />
        <GridCards />
        <Faqs />
      </main>
      <Footer />
      <Navbar />
    </>
  )
}

export default App
