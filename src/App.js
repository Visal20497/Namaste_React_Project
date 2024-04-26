import React from 'react'
import Header from './componet/Header'
import Body from './componet/Body'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Toaster/>
      <Header/>
      <Body/>
    </div>
  )
}

export default App