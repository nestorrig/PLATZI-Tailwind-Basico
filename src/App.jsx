// import { useState } from 'react'

import Faqs from './components/Faqs'
import Footer from './components/Footer'
import GridCards from './components/GridCards'
import Header from './components/Header'
import Home from './components/Home'
import ScrollCards from './components/ScrollCards'
import './index.css'

function App() {

  return (
    <>
      <Header />
      <Home />
      <main className='px-6 lg:px-12'>
        <ScrollCards />
        <GridCards />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}

export default App
