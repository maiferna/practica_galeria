import { useState } from 'react'
import './App.css'
import { Galeria } from './components/Galeria'

function App() {

  return (
    <>
      <header className='bg-black text-white text-center py-5'>
        <h1>Práctica galería</h1>
      </header>
      <main className='container'>
        <Galeria />

      </main>
      <footer className='bg-black text-white text-center py-2 '>
        <p>Práctica Galería</p>
      </footer>
    </>
  )
}

export default App
