import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NoPage from './pages/NoPage'
import Contact from './pages/Contact'

import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <ChakraProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/*" element={<NoPage />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    </ChakraProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
