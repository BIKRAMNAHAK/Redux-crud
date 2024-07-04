import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import CreateForm from './Components/CreateForm/CreateForm'
import EditForm from './Components/EditForm/EditForm'
import DisplayData from './Components/DisplayData/DisplayData'
import { Route, Routes } from 'react-router'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<CreateForm />} />
        <Route path="/DisplayData" element={<DisplayData />} />
        <Route path="/edit" element={<EditForm />} />
      </Routes>
    </>
  )
}

export default App
