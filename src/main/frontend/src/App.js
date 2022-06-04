import React from 'react';
import './App.css';
import NewEmployee from './components/NewEmployee';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditEmployee from './components/EditEmployee';

function App() {

        return (
                <div>
                        <BrowserRouter>
                                <Routes>
                                        <Route path="/edit/:id" element={<EditEmployee />}></Route>
                                        <Route path="/add" element={<NewEmployee />}></Route>
                                        <Route path="/" element={<Home />}></Route>
                                </Routes>
                        </BrowserRouter>
                        
                </div>
        );
}

export default App;
