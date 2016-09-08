import React from 'react'
import validator from 'validator'

export default React.createClass({
  getInitialState() {
    return {
      cardValidate: "creditCard__number"
    }
  },
  numberValidator(e) {
    if(validator.isCreditCard(e.target.value)) {
      this.setState({
        cardValidate: "creditCard__number creditCard__number--valid"
      })
    }else{
      this.setState({
        cardValidate: "creditCard__number"
      })
    }
  },
  dateValidator() {
    console.log(validator.isAfter(this.refs.creditCardDate.value));
  },
  cvvValidator(e) {
    console.log(validator.isNumeric(e.target.value));
  },
  render() {
    return (
      <section>
        <div className="creditCard">
          <h2 className="creditCard__bank">{"Bank of 'Merica"}</h2>
          <form action="#" method="POST">
            <input type="text"
                   name="number"
                   placeholder="xxxx-xxxx-xxxx-xxxx"
                   className={this.state.cardValidate}
                   ref="creditCardNumber"
                   onChange={this.numberValidator}/>
            <input type="text"
                   name="date"
                   placeholder="yyyy/mm"
                   className="creditCard__date"
                   ref="creditCardDate"
                   onChange={this.dateValidator}/>
            <input type="text"
                   name="cvv"
                   placeholder="xxx"
                   className="creditCard__cvv"
                   ref="creditCardCVV"
                   onChange={this.cvvValidator}/>
            <input type="text"
                   name="name"
                   placeholder="card holders name"
                   className="creditCard__name"/>
          </form>
          <span className="creditCard__validSpan">valid<br/>thru</span>
          <span className="creditCard__cvvSpan">cvv</span>
          <img src="./assets/visa_logo_2.jpg"
               alt="visa logo"
               className="creditCard__logo"/>
        </div>
      </section>
    )
  }
})
