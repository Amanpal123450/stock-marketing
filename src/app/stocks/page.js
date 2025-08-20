import React from 'react'
import TradingStatsComponent from '../allproduct/product/page'
import WhyTradeForex from '../forex/forexPages/WhyTradeForex'
import StockCategories from './stocksPage/StockCategories'
import ForexSpreads from '../forex/forexPages/ForexSpreads'
import ForexExample from '../forex/forexPages/ForexExample'
import StockExample from './stocksPage/stockExample'
import StockTradingCTA from './stocksPage/stockTradingCTA'


function stocks() {
  return (
   <>
   <TradingStatsComponent />
   <WhyTradeForex />
   <StockCategories />
   <ForexSpreads />
   <StockExample />
    <StockTradingCTA />
         
   

   </>
  )
}

export default stocks