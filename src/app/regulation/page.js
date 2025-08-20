import React from 'react'
import ComorosRegistration from './regulationPages/ComorosRegistration'
import TradingStatsComponent from '../allproduct/product/page'
import SecurityPageinsec from '../security/SecurityPages/SecurityPageinsec'
import TransparencyPage from './regulationPages/TransparencyPage'
import RegulationTradingCTA from './regulationPages/regulationTradingCTA'


function Regulation() {
  return (
    <>
    <TradingStatsComponent />
    <ComorosRegistration />
    <SecurityPageinsec />
    <TransparencyPage />
    <RegulationTradingCTA />
    
    </>
  )
}

export default Regulation