// Write your code here
import './index.css'

import {Component} from 'react'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="cryptocurrency-container">
        <CryptocurrenciesList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
