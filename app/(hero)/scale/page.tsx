import React from 'react'
import Hero from '@/components/hero'
import homeSrc from '/public/bg3.jpg'

export default function Page() {
  return (
    <Hero imgUrl={homeSrc} altTxt="Scale" content="Scale~~~~~" />
  )
}
