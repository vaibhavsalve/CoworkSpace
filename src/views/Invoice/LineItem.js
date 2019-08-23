import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MdCancel as DeleteIcon } from 'react-icons/md'
import styles from './LineItem.module.scss'
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`;
const HEROKUAPIHOST=`https://coworkspace.herokuapp.com`


class LineItem extends Component {


  componentDidMount() {
    // fetch(`${HEROKUAPIHOST}/api/v1/rooms`, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     Authorization: `Token token=${auth_token},email=${Email}`
    //   }
    // })
    //   .then((response) => response.text())
    //   .then((responseJson) => {
    //     console.log(responseJson)
    //    // dispatch({ type: SAVE_ROOMS, payload: responseJson.rooms })
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }



  

  render = () => {
    console.log(this.props )

    const { index, name, description, quantity, price } = this.props

    return (
      <div className={styles.lineItem}>
        <div>{index + 1}</div>
         <div><input name="name" type="text" value={name} onChange={this.props.changeHandler(index)} /></div> 
        <div><input name="description" type="text" value={description} onChange={this.props.changeHandler(index)} /></div>
        <div><input name="quantity" type="number" step="1" value={quantity} onChange={this.props.changeHandler(index)} onFocus={this.props.focusHandler} /></div>
        <div className={styles.currency}><input name="price" type="number" step="0.01" min="0.00" max="9999999.99" value={price} onChange={this.props.changeHandler(index)} onFocus={this.props.focusHandler} /></div>
        <div className={styles.currency}>{this.props.currencyFormatter( quantity * price )}</div>
        <div>
          <button type="button"
            className={styles.deleteItem}
            onClick={this.props.deleteHandler(index)}
          ><DeleteIcon size="1.25em" /></button>
        </div>
      </div>
    )
  }
}

export default LineItem

LineItem.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}


