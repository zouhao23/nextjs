import React from 'react'
import homeSrc from '/public/bg1.png'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by Next.js'
}

export default function Home() {
  return <Hero imgUrl={homeSrc} altTxt="Home" content="Welcome to the world" />
}