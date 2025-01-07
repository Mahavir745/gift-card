import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import "./App.css"
import { Outlet } from 'react-router-dom'
import AllDataStoreProvider from './component/StoreData/StoreInputData'

const App = () => {
  return (
    <AllDataStoreProvider>
      <Header/>
      <Outlet/>
      <Footer/>
    </AllDataStoreProvider>
  )
}

export default App