import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BenefitsGrid from './components/BenefitsGrid'
import DetailedSections from './components/DetailedSections'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (term) => {
    setSearchTerm(term)
    // Scroll to benefits grid
    const benefitsSection = document.querySelector('#overview')
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <main>
        <HeroSection />
        <BenefitsGrid searchTerm={searchTerm} />
        <DetailedSections />
      </main>
      <Footer />
    </div>
  )
}

export default App
