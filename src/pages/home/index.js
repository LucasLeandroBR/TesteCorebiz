import React, { Fragment } from 'react'
import Navbar from '../../components/navbar'
import CarrouselBanner from '../../components/CarrouselBanner'
import Vitrine from '../../components/vitrine'

const HomePage = () => (
  <Fragment>
    <Navbar />
    <CarrouselBanner />
    <Vitrine />
  </Fragment>
)

export default HomePage
