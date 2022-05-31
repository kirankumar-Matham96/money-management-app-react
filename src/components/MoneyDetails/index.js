import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props
  //   const {} = transactionDetails

  return (
    <ul className="money-display-container">
      <li className="money-display-item-container green-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="display-money-img"
        />
        <div className="display-money-text-container">
          <p className="display-mony-type">Your Balance</p>
          <p className="display-money-amount" testid="balanceAmount">
            {income - expenses}
          </p>
        </div>
      </li>
      <li className="money-display-item-container blue-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="display-money-img"
        />
        <div className="display-money-text-container">
          <p className="display-mony-type">Your Income</p>
          <p className="display-money-amount" testid="incomeAmount">
            {income}
          </p>
        </div>
      </li>
      <li className="money-display-item-container purple-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="display-money-img"
        />
        <div className="display-money-text-container">
          <p className="display-mony-type">Your Expenses</p>
          <p className="display-money-amount" testid="expensesAmount">
            {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
