/* @flow */
import React from 'react'

class Price extends React.Component {
  formatPrice(rawPrice) {
    var format_price = "";
    var rawPriceString = rawPrice.toString();
    do {
      if (rawPriceString.length > 3) {
        format_price = "." + rawPriceString.substr(rawPriceString.length-3, 3) + format_price;
      } else {
        format_price = rawPriceString + format_price;
        break;
      }
      rawPriceString = rawPriceString.slice(0, -3);
    } while (rawPriceString.length > 0)
 
    return format_price + " đ";
  }

  render () {
    return (
      <div>
        { this.formatPrice(this.props.value) }  
      </div>
    )
  }

}

Price.propTypes = {
  value: React.PropTypes.number
}
export default Price
