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

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'INCOME',
    transactionsList: [],
    income: 0,
    expenses: 0,
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
      income: type === 'INCOME' ? parseInt(amount) : 0,
      expenses: type === 'EXPENSES' ? parseInt(amount) : 0,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      income: prevState.income + newTransaction.income,
      expenses: prevState.expenses + newTransaction.expenses,
      title: '',
      amount: '',
      type: 'INCOME',
    }))
  }

  onDeleteTransaction = id => {
    this.setState(prevState => ({
      income:
        prevState.transactionsList.filter(
          eachTransaction => eachTransaction.id === id,
        )[0].type === 'INCOME'
          ? prevState.income -
            prevState.transactionsList.filter(
              eachTransaction => eachTransaction.id === id,
            )[0].income
          : prevState.income,
      expenses:
        prevState.transactionsList.filter(
          eachTransaction => eachTransaction.id === id,
        )[0].type === 'EXPENSES'
          ? prevState.expenses -
            prevState.transactionsList.filter(
              eachTransaction => eachTransaction.id === id,
            )[0].expenses
          : prevState.expenses,
      transactionsList: prevState.transactionsList.filter(
        eachTransaction => eachTransaction.id !== id,
      ),
    }))
  }

  render() {
    const {title, amount, type, transactionsList, income, expenses} = this.state
    // console.log({income, expenses})
    return (
      <div className="bg-container">
        <div>
          <div className="header">
            <h1 className="main-heading">Hi, Richard</h1>
            <p className="welcome-text">
              Welcome back to your
              <span className="money-manager-text"> Money Manager</span>
            </p>
          </div>

          <MoneyDetails income={income} expenses={expenses} />

          <div className="manage-transaction-container">
            <div className="add-transaction-container">
              <form className="form">
                <h1 className="secondary-card-title">Add Transaction</h1>
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
                  className="input"
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
                  className="input"
                />
                <label htmlFor="title" className="label">
                  TYPE
                </label>
                <select
                  id="type"
                  name="type"
                  value={type}
                  onChange={this.onChangeIncomeType}
                  className="input"
                >
                  <option name="income" value="INCOME" defaultChecked>
                    Income
                  </option>
                  <option name="expenses" value="EXPENSES">
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
              <h1 className="secondary-card-title">History</h1>
              <div className="heads-container">
                <p className="title">Title</p>
                <p className="amount">Amount</p>
                <p className="type">Type</p>
              </div>
              {transactionsList.length !== 0 ? (
                <ul className="transaction-history-container">
                  {transactionsList.map(eachTransaction => (
                    <TransactionItem
                      transactionDetails={eachTransaction}
                      key={eachTransaction.id}
                      transactionTypeOptions={transactionTypeOptions}
                      onDeleteTransaction={this.onDeleteTransaction}
                    />
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
