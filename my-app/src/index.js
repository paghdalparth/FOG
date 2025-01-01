import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import EditUpload from './components/EditUpload';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index path='/' element={<Home/>}/>
          <Route path='/upload' element={<Upload/>} />
          <Route path='/edit-upload/' element={<EditUpload/>} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

 