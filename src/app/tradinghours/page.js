import React from 'react'
import TradingStatsComponent from '../allproduct/product/page'
import ServerTime from './Trading Hours/ServerTime'
import TradingHours from './Trading Hours/TradingHours'
import HelpPage from './Trading Hours/HelpPage'
import TradingHoursTradingCTA from './Trading Hours/tradingHoursTradingCTA'


function main_TradingHours() {
  return (
   <>
   <TradingStatsComponent />
   <ServerTime />
<TradingHours />
<HelpPage />
<TradingHoursTradingCTA />
   
   </>
  )
}

export default main_TradingHours