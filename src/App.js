import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import './App.css';
import {Layout, Home, About, Portfolio, Contact, NoPage} from '../src/pages'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Loader from '../src/components/Loader';

function App() {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 18000);
    }, []);

    return (
    <div className="App">
        {loading ? (<Loader/>) :
            (
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="about" element={<About/>}/>
                            <Route path="portfolio" element={<Portfolio/>}/>
                            <Route path="contact" element={<Contact/>}/>
                            <Route path="*" element={<NoPage/>}/>
                        </Route>
                    </Routes>
                </Router>
            )
        }
    </div>
  );
}

export default App;
