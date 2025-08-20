import React from 'react'
import TradingStatsComponent from '../allproduct/product/page'
import NewSecurity from './SecurityPages/NewSecurity'
import SecurityPageinsec from './SecurityPages/SecurityPageinsec'
import CertificationsSecurityPage from './SecurityPages/Certifications'
import SecuritySupport from './SecurityPages/SecuritySupport'
import SecurityTradingCTA from './SecurityPages/SecurityTradingCTA'

function Security() {
  return (
    <>
    <TradingStatsComponent />
    <NewSecurity />
    <SecurityPageinsec />
    <CertificationsSecurityPage />
    <SecuritySupport />
    <SecurityTradingCTA />
    </>
  )
}

export default Security