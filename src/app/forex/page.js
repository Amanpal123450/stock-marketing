import React from 'react'
import TradingStatsComponent from '../allproduct/product/page'
import WhyTradeForex from './forexPages/WhyTradeForex'
import ForexSpreads from './forexPages/ForexSpreads'
import ForexHowItWorks from './forexPages/ForexHowItWorks'
import ForexExample from './forexPages/ForexExample'
import ForexTradingCTA from './forexPages/TradingCTA'

function forex() {
  return (
    <>
      <TradingStatsComponent />
      <WhyTradeForex />
      <ForexSpreads />
      <ForexHowItWorks />
      <ForexExample />
       <ForexTradingCTA />
    </>
  )
}

export default forex