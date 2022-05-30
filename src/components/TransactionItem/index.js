import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDeleteButton = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="transaction-item-container">
      <p className="transaction-details">{title}</p>
      <p className="transaction-details">Rs {amount}</p>
      <p className="transaction-details">{type}</p>
      <button
        type="button"
        className="delete-button"
        testid="delete"
        onClick={onClickDeleteButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
