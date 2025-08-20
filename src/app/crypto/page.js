import React from 'react'
import TradingStatsComponent from '../allproduct/product/page'
import WhyTradeForex from '../forex/forexPages/WhyTradeForex'
import CryptoCategories from './cryptoPages/CryptoCategories'
import ForexSpreads from '../forex/forexPages/ForexSpreads'
import StockTradingCTA from '../stocks/stocksPage/stockTradingCTA'
import StockExample from '../stocks/stocksPage/stockExample'

function Crypto() {
  return (
    <>
    <TradingStatsComponent />
    <WhyTradeForex />
    <CryptoCategories />
    <ForexSpreads />
    <StockExample />
    <StockTradingCTA />
    
    </>
  )
}

export default Crypto