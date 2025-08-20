import React from 'react'
import TradingStatsComponent from '../allproduct/product/page'
import MoneyManagementPage from './Deposit Withdrawal/MoneyManagementPage'
import PaymentMethodsPage from './Deposit Withdrawal/PaymentMethodsPage'
import ProcessingTimes from './Deposit Withdrawal/ProcessingTimes'
import HowItWorks from './Deposit Withdrawal/HowItWorks'
import DepositTradingCTA from './Deposit Withdrawal/DepositTradingCTA'

function DepositWithdrawal() {
  return (
   <>
   <TradingStatsComponent />
   <MoneyManagementPage />
   <PaymentMethodsPage />
   <ProcessingTimes />
   <HowItWorks />
   <DepositTradingCTA />
   </>
  )
}

export default DepositWithdrawal