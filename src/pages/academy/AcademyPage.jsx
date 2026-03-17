import React from 'react'
import Hero from './Hero'
import AcademyMediaSection from './AcademyMediaSection'
import ProductSection from './ProductSection'
import Author from '../../components/Author'

export default function AcademyPage() {
  return (
    <main className="bg-[#FFFCDD] min-h-screen">
      <Hero />
      <AcademyMediaSection />
      <ProductSection />
      <Author />
    </main>
  )
}
