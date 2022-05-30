import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'BALANCE',
    displayText: 'Balance',
  },
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const moneyTypeImageList = [
  {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    altText: 'balance',
  },
  {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    altText: 'income',
  },
  {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    altText: 'expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: '',
    transactionsList: [],
  }

  onChangeIncomeType = event => {
    this.setState({type: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onAddingTransaction = event => {
    event.preventDefault()

    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
      type: '',
    }))
  }

  onDeleteTransaction = id => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        eachTransaction => eachTransaction.id !== id,
      ),
    }))
  }

  render() {
    const {title, amount, type, transactionsList} = this.state

    return (
      <div className="bg-container">
        <div className="header">
          <h1 className="main-heading">Hi, Richard</h1>
          <p className="welcome-text">
            Welcome back to your
            <span className="money-manager-text">Money Manager</span>
          </p>
        </div>
        <ul className="money-display-container">
          {transactionTypeOptions.map((eachTransactionType, index) => (
            <MoneyDetails
              eachTransactionType={eachTransactionType}
              moneyTypeImage={moneyTypeImageList[index]}
              key={eachTransactionType.optionId}
            />
          ))}
        </ul>
        <div className="manage-transaction-container">
          <div className="add-transaction-container">
            <form className="form">
              <p className="secondary-card-title">Add Transaction</p>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={this.onChangeTitle}
                placeholder="TITLE"
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={amount}
                onChange={this.onChangeAmount}
                placeholder="AMOUNT"
              />
              <label htmlFor="title" className="label">
                TYPE
              </label>
              <select
                id="type"
                name="type"
                value={type}
                onChange={this.onChangeIncomeType}
              >
                <option name="income" value="income" defaultChecked>
                  Income
                </option>
                <option name="expenses" value="expenses">
                  Expenses
                </option>
              </select>
              <button
                type="submit"
                className="add-button"
                onClick={this.onAddingTransaction}
              >
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <p className="secondary-card-title">History</p>
            <ul className="transaction-history-container">
              <li className="heads-container">
                <p className="head">Title</p>
                <p className="head">Amount</p>
                <p className="head">Type</p>
              </li>
              {transactionsList.map(eachTransaction => (
                <TransactionItem
                  transactionDetails={eachTransaction}
                  key={eachTransaction.id}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
