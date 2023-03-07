import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
//import App from './App';
import PostAPI from './PostAPI';
import DataFetch from './DataFetch';
import Home from './Home';
import Layout from './Layout'
import NoPage from './NoPage'
import {PostProvider} from './context/postContext/PostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <PostProvider>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="PostAPI" element={<PostAPI />} />
          <Route path="DataFetch" element={<DataFetch />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter></PostProvider>
  </React.StrictMode>
);

