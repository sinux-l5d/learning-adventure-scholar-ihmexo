import * as React from 'react';
import Home from '@pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '@pages/NotFound/NotFound';
import ListeExercice from '@pages/ListeExercice/ListeExercice';
import CreerSession from '@pages/CreerSession/CreerSession';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercices" element={<ListeExercice />} />
          <Route path="/creersession" element={<CreerSession />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
