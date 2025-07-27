import React from 'react'
import MyClients from '../components/MyClients'
import PageTitle from '../components/PageTitle'
import PortfolioSection from '../components/PortfolioSection'

function Portfolio() {
  return (
    <>
      <PageTitle title="Portfolio" />
      <PortfolioSection />
      <MyClients />
    </>
  )
}

export default Portfolio