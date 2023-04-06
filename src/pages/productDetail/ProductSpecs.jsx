import React from 'react'
import { GeneralInfo } from './showProductSpecs/GeneralInfo'
import { Performance } from './showProductSpecs/Performance'
import { Benchmark } from './showProductSpecs/Benchmark'
import { Memory } from './showProductSpecs/Memory'
import { Features } from './showProductSpecs/Features'

export const ProductSpecs = () => {
  return (
    <section id='specs' className='relative block'>
        <GeneralInfo /> 
        <Performance />
        <Benchmark />
        <Memory />
        <Features />
    </section>
  )
}
