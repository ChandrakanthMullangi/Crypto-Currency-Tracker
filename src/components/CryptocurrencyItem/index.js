// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyDetails} = props
  const {
    currencyLogo,
    currencyName,
    usdValue,
    euroValue,
  } = cryptoCurrencyDetails

  return (
    <li className="currency-item">
      <div className="row">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="col"> {currencyName} </p>
      </div>
      <div className="col-group">
        <p className="col"> {usdValue} </p>
        <p className="col"> {euroValue} </p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
