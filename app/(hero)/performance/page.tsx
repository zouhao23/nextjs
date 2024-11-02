import React from 'react'
import Hero from '@/components/hero'
import homeSrc from '/public/bg2.png'

export default function Page() {
  return (
    <Hero imgUrl={homeSrc} altTxt="Performance" content="Performance~~~~~" />
  )
}
