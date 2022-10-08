import React from 'react'
import AllPlants from '../components/AllPlants'
import BlogPosts from '../components/blogPosts'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer/footer'
import InformationSection from '../components/InformationSection'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <AllPlants/>
      <BlogPosts/>
      <InformationSection/>
    </div>
  )
}

export default Home