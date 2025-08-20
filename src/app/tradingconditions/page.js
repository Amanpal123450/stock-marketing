import React from 'react'
import TradingStatsComponent from '../allproduct/product/page'
import TradingComparisonPage from './Trading conditions Pages/TradingComparisonPage'
import TradingInstrumentsPage from './Trading conditions Pages/TradingInstrumentsPage'
import NewTradingCTA from './Trading conditions Pages/NewTradingCTA'

function Tradingconditions() {
  return (
   <>
   <TradingStatsComponent />
   
   <TradingComparisonPage />
   <TradingInstrumentsPage />
   <NewTradingCTA />
   </>
  )
}

export default Tradingconditions