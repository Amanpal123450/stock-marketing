import React from 'react'
import TradingStatsComponent from '../allproduct/product/page'
import WhyTradeForex from '../forex/forexPages/WhyTradeForex'
import StockCategories from '../stocks/stocksPage/StockCategories'
import ForexSpreads from '../forex/forexPages/ForexSpreads'
import StockExample from '../stocks/stocksPage/stockExample'
import CommoditiesTradingCTA from './commoditiesPages/CommoditiesTradingCTA'

function commodities() {
  return (
   <>
       <TradingStatsComponent />
    <WhyTradeForex />
    <StockCategories />
    <ForexSpreads />
       <StockExample />
       <CommoditiesTradingCTA />
   </>
  )
}

export default commodities