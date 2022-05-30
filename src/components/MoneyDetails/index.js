import './index.css'

const MoneyDetails = props => {
  const {eachTransactionType, moneyTypeImage} = props
  const {displayText} = eachTransactionType
  const {imageUrl, altText} = moneyTypeImage

  return (
    <li className="money-display-item-container">
      <img src={imageUrl} alt={altText} className="display-money-img" />
      <div className="display-money-text-container">
        <p className="display-mony-type">Your {displayText}</p>
        <p className="display-money-amount">Rs 40000</p>
      </div>
    </li>
  )
}

export default MoneyDetails
