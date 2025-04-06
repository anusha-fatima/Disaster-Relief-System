import React from 'react'
import Header from '../components/Header'
import Precautions from './Precautions'
import Slider from './Slider'



const Home = () => {
  return (
    <div>
      <Header smooth={true} duration={500}/>
      <Slider />
      <Precautions/>
    </div>
  )
}

export default Home
