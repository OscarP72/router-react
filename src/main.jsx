import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx';
import Heroe from './Pages/Heroe/Heroe.jsx';
import Heroes from './Pages/Heroes/Heroes.jsx';
import About from './Pages/About/About.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home/>}/>
          <Route path="/heroes" element={<Heroes/>}/>
          <Route path="heroe/:id" element={<Heroe/>}/>
          <Route path="about" elemet={<About/>}/>
          <Route path="*" element={<main>
            <p>La pagina no existe</p>
          </main>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
