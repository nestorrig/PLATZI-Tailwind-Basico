// import { useState } from 'react'

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
      </main>
    </>
  )
}

export default App
