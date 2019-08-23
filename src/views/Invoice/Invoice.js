import React, { Component } from 'react';
import styles from './Invoice.module.scss';
import LineItems from './LineItems';
import uuidv4 from 'uuid/v4'
import Textbox from './Textbox'
import Checkbox  from './CheckBox'
const HEROKU_API_HOST = 'https://coworkspace.herokuapp.com';
const auth_token = `CM+z+hIBBvAIYzyycJziHIpmETKvezOeSZeYHy03KEOfckrxUm7YXojTogsgVbDB7+rBpiDWKoQVt318oTiAIQ==`;
const Email = `vaibhavsalve27@gmail.com`;
class Invoice extends Component {
  locale = 'en-US'
  currency = 'USD'
  state = {
    taxRate: 0.00,
    lineItems: [
      {
        id: 'initial',      // react-beautiful-dnd unique key
        name: '',
        description: '',
        quantity: 0,
        price: 0.00,
        lineItemsTotal: 0,
        grandTotal:''

      },
    ],
   
   Date:'',
   DueDate:'',
    note: ''

  }

  handleInvoiceChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLineItemChange = (elementIndex) => (event) => {
    let lineItems = this.state.lineItems.map((item, i) => {
      if (elementIndex !== i) return item
      return { ...item, [event.target.name]: event.target.value }
    })
    this.setState({ lineItems })
   
    
  }
  handleDate=(event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
 

  handleAddLineItem = (event) => {
    this.setState({
      // use optimistic uuid for drag drop; in a production app this could be a database id
      lineItems: this.state.lineItems.concat(
        [{ id: uuidv4(), name: '', description: '', quantity: 0, price: 0.00 }]
      )
    })
  }

  handleRemoveLineItem = (elementIndex) => (event) => {
    this.setState({
      lineItems: this.state.lineItems.filter((item, i) => {
        return elementIndex !== i
      })
    })
  }

  handleReorderLineItems = (newLineItems) => {
    this.setState({
      lineItems: newLineItems,
    })
  }

  handleFocusSelect = (event) => {
    event.target.select()
  }

  handlePayButtonClick = () => { 
    let invoice_items_attributes=this.state.lineItems.map(items=>({price:items.price,quantity:items.quantity,description:items.description}))
    console.log(invoice_items_attributes)
    fetch(`${HEROKU_API_HOST}/api/v1/invoices`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token token=${auth_token},email=${Email}`
      },
      // body: JSON.stringify({
      //   "invoice": {
      //     "membership_id": 2,
      //     "total_amount": 25,
      //     "discount": 5.0,
      //     "invoice_date": "2019-07-20",
      //     "due_date": "2019-07-20",
      //     "gst": 5, "with_gst": false,
      //     "status": "sent",
      //     "invoice_items_attributes": [{ "price": 5, "quantity": 2, "description": "desc 1" },
      //     { "price": 10, "quantity": 2, "description": "desc 1" }]
      //   }
      // })
      body: JSON.stringify({
        "invoice": {
          "membership_id": 4,
          "total_amount": `${this.calcGrandTotal()}`,
          "discount": 5.0,
          "invoice_date": `${this.state.Date}`,
          "due_date": `${this.state.DueDate}`,
          "gst": 5, "with_gst": false,
          "status": "sent",
          "invoice_items_attributes": invoice_items_attributes
        }
      })
     })
      .catch((error) => {
        console.error(error);
      });
    //  alert('Not implemented')
  }

  formatCurrency = (amount) => {
    return (new Intl.NumberFormat(this.locale, {
      style: 'currency',
      currency: this.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount))
  }

  calcTaxAmount = (c) => {
    return c * (this.state.taxRate / 100)
  }

  calcLineItemsTotal = () => {
    let rowTotal = this.state.lineItems.reduce((prev, cur) => (prev + (cur.quantity * cur.price)), 0)
    return rowTotal
    // return this.state.lineItems.reduce((prev, cur) => (prev + (cur.quantity * cur.price)), 0)

  }

  calcTaxTotal = () => {
    return this.calcLineItemsTotal() * (this.state.taxRate / 100)
  }

  calcGrandTotal = () => {
   // return this.calcLineItemsTotal() + this.calcTaxTotal()
   let  GrandTotal=this.calcLineItemsTotal() + this.calcTaxTotal()
     return GrandTotal
  }
  

  handleChangeTextArea = (event) => {
    this.setState({ note: event.target.value });
  }

  render = () => {
    console.log(this.state)
    return (
      <div className={styles.invoice}>
        <div className={styles.brand}>
          <img src="https://via.placeholder.com/150x50.png?text=logo" alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.addresses}>
          <div className={styles.from}>
            <strong>Amazing Company</strong><br />
            123 Kensington Ave<br />
            Toronto, ON, Canada &nbsp;A1B2C3<br />
            416-555-1234
          </div>
          <div>
            <div className={`${styles.valueTable} ${styles.to}`}>
              <div className={styles.row}>
                <div className={styles.label}>Customer #</div>
                <div className={styles.value}>123456</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Invoice #</div>
                <div className={styles.value}>123456</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Date</div>
                <div className={`${styles.value} ${styles.date}`}><input name='Date' onChange={this.handleDate}
                   value={this.state.Date} type='date'/></div>
               
              </div>
               <div className={styles.row}>
                <div className={styles.label}>Due Date</div>
                <div className={`${styles.value} ${styles.date}`}><input name='DueDate' onChange={this.handleDate}  value={this.state.DueDate} type='date'/></div>
              </div>
            </div>
          </div>
        </div>
        <h2>Invoice</h2>

        <LineItems
          items={this.state.lineItems}
          currencyFormatter={this.formatCurrency}
          addHandler={this.handleAddLineItem}
          changeHandler={this.handleLineItemChange}
          focusHandler={this.handleFocusSelect}
          deleteHandler={this.handleRemoveLineItem}
          reorderHandler={this.handleReorderLineItems}
        />

        <div className={styles.totalContainer}>
        <div className={styles.formgroup_formcheck} >
          <form >
          <label  className="form-check-label" for="exampleCheck1">GST:</label>
            <input   type="checkbox" className="form-check-input" id="exampleCheck1"/> 
          </form>
          </div>
          <form>
            <div className={styles.valueTable}>
              <div className={styles.row}>
                <div className={styles.label}>Subtotal</div>
                <div className={`${styles.value} ${styles.currency}`}>{this.formatCurrency(this.calcLineItemsTotal())}</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Tax ({this.state.taxRate}%)</div>
                <div className={`${styles.value} ${styles.currency}`}>{this.formatCurrency(this.calcTaxTotal())}</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Total Due</div>
                <div className={`${styles.value} ${styles.currency}`}>{this.formatCurrency(this.calcGrandTotal())}</div>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.comments}>
            <h4>Notes</h4>
            <Textbox handleChangeTextArea={this.handleChangeTextArea} />
          </div>
        <div className={styles.pay}>
          <button className={styles.payNow} onClick={this.handlePayButtonClick}>Submit</button>
        </div>

        <div className={styles.footer}>
          
          <div className={styles.closing}>
            <div>Thank-you for your business</div>
          </div>
        </div>

      </div>

    )
  }

}

export default Invoice
