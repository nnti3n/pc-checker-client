/* @flow */
import React from 'react'

function formatPrice (rawPrice) {
  let formatedPrice = ''
  let rawPriceString = rawPrice.toString()
  do {
    if (rawPriceString.length > 3) {
      formatedPrice = '.' + rawPriceString.substr(rawPriceString.length - 3, 3) + formatedPrice
    } else {
      formatedPrice = rawPriceString + formatedPrice
      break
    }
    rawPriceString = rawPriceString.slice(0, -3)
  } while (rawPriceString.length > 0)

  return formatedPrice + ' đ'
}

class Price extends React.Component {
  render () {
    return (
      <div>
        {formatPrice(this.props.value)}
      </div>
    )
  }

}

Price.propTypes = {
  value: React.PropTypes.number
}
export default Price
