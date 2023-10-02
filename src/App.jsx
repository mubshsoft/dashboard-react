import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Analytic from './Pages/Analytic'
import Sidebar from './components/Sidebar'
import Shop from './Pages/Shop'
import Header from './components/Header'
import 'remixicon/fonts/remixicon.css'
import Explore from './Pages/Explore'
import Settings from './Pages/Settings'
import Help from './Pages/Help'
import Amazon from './Pages/Amazon'
import Invinty from './Pages/Invinty'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
        <Sidebar />
        <div className='col-span-5'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/analytic' element={<Analytic />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/help' element={<Help />} />
            <Route path='/amazon' element={<Amazon />} />
            <Route path='/invinity' element={<Invinty />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
