import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PostAPI from './PostAPI';
import DataFetch from './DataFetch';
import Home from './Home';
import Layout from './Layout';

export default function App() {
  return (
    <div className="App">
   <PostAPI/>
    </div>
  );
}

