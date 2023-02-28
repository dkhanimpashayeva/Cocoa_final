import React from 'react'
import AboutPage from '../../../Companents/Main/About/AboutPage/AboutPage'
import DescriptionTaste from '../../../Companents/Main/About/AboutPage/DescriptionTaste'
import OurTeams from '../../../Companents/Main/About/AboutPage/OurTeams'
import ProductTypes from '../../../Companents/Main/About/AboutPage/ProductTypes'
import ScrollToTop from '../../../Companents/ScrollToTop/ScrollToTop'

const AboutUs = () => {
  return (
    <div>
      <AboutPage/>
      <ProductTypes/>
      <OurTeams/>
      <DescriptionTaste/>
      <ScrollToTop/>
    </div>
  )
}

export default AboutUs