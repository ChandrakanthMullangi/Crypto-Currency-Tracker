// Write your JS code here

import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrencyList: [], isSpinnerLoading: true}

  componentDidMount() {
    this.getCryptoCurrenciesList()
  }

  getCryptoCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(eachCurrency => ({
      id: eachCurrency.id,
      currencyLogo: eachCurrency.currency_logo,
      currencyName: eachCurrency.currency_name,
      usdValue: eachCurrency.usd_value,
      euroValue: eachCurrency.euro_value,
    }))

    this.setState({cryptoCurrencyList: formattedData, isSpinnerLoading: false})
  }

  render() {
    const {cryptoCurrencyList, isSpinnerLoading} = this.state

    return (
      <div className="cryptocurrency-list-container">
        <h1 className="heading"> Cryptocurrency Tracker </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-image"
        />
        <div className="cryptocurrencies-list">
          <div className="table">
            <p className="column"> Coin Type </p>
            <div className="column-group">
              <p className="column"> USD </p>
              <p className="column"> EURO </p>
            </div>
          </div>
          {isSpinnerLoading ? (
            <div data-testid="loader" className="spinner">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            <ul>
              {cryptoCurrencyList.map(eachCurrency => (
                <CryptocurrencyItem
                  key={eachCurrency.id}
                  cryptoCurrencyDetails={eachCurrency}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
