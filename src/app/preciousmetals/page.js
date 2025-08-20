import React from 'react'
import TradingStatsComponent from '../allproduct/product/page'
import WhyTradeForex from '../forex/forexPages/WhyTradeForex'
import StockCategories from '../stocks/stocksPage/StockCategories'
import ForexSpreads from '../forex/forexPages/ForexSpreads'
import StockExample from '../stocks/stocksPage/stockExample'
import IndicesTradingCTA from '../indices/indicesPages/indicesTradingCTA'
import PreciousTradingCTA from './PreciousmetalsPages/PreciousTradingCTA'

function Preciousmetals() {
  return (
    <>
    <TradingStatsComponent />
    <WhyTradeForex />
    <StockCategories />
    <ForexSpreads />
       <StockExample />
       <PreciousTradingCTA />
   
   </>
  )
}

export default Preciousmetals