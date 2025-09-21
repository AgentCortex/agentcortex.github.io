import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import TechnologyPage from './pages/TechnologyPage'
import PricingPage from './pages/PricingPage'
import AboutPage from './pages/AboutPage'
import SignInPage from './pages/SignInPage'
import StartTrialPage from './pages/StartTrialPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/start-trial" element={<StartTrialPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
