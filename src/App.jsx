import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Header} from './components/Header/Header'
import { Feed } from './Page/Feed/Feed';
import { Home } from './Page/Home/Home';
const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/feed' element={<Feed />}/>
        </Routes> 
     </BrowserRouter>
    </div>
  )
}

export default App;