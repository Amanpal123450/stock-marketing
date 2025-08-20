import React from 'react'
import TradingStatsComponent from '../allproduct/product/page'
import PartnerSection from './PartnersPages/PartnerSection'
import CommissionTable from './PartnersPages/CommissionTable'
import PartnershipOptions from './PartnersPages/PartnershipOptions'
import GetStartedSteps from './PartnersPages/GetStartedSteps'
import PartnersTradingCTA from './PartnersPages/PartnersTradingCTA'

function Partners() {
  return (
    <>
     <TradingStatsComponent />
     <PartnerSection />
     <CommissionTable />
     <PartnershipOptions />
     <GetStartedSteps />
     <PartnersTradingCTA />
    </>
  )
}

export default Partners