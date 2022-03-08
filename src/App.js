
import './css/App.css';
import * as React from 'react';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound';
import ListeExercice from './pages/ListeExercice';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exercice' element={<ListeExercice/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}