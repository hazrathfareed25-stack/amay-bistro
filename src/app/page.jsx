'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Menu from '@/components/sections/Menu'
import Gallery from '@/components/sections/Gallery'
import Reviews from '@/components/sections/Reviews'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <CTA />
    </>
  )
}
