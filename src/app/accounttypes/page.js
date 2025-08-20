import React from 'react'
import TradingStatsComponent from '../allproduct/product/page'
import AccountTypePage from './accounttypesPages/AccountTypePage'
import PopularPlan from '../home/navber/PopularPlan'
import ComparisonPage from './accounttypesPages/ComparisonPage'
import AccountTradingCTA from './accounttypesPages/accounTradingCTA'

function AccountTypes() {
  return (
   <>
     <TradingStatsComponent />
     <AccountTypePage />
     <PopularPlan />
     <ComparisonPage />
     <AccountTradingCTA />
   </>
  )
}

export default AccountTypes