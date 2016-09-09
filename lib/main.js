import React from 'react'
import validator from 'validator'

export default React.createClass({
  getInitialState() {
    return {
      cardValidate: "creditCard__number",
      dateValidate: "creditCard__date",
      cvvValidate: "creditCard__cvv",
      nameValidate: "creditCard__name",
      creditCard: "creditCard"
    }
  },
  numberValidator(e) {
    if(validator.isCreditCard(e.target.value)) {
      this.setState({
        cardValidate: "creditCard__number creditCard--valid"
      })
    }else{
      this.setState({
        cardValidate: "creditCard__number"
      })
    }
  },
  dateValidator(e) {
    if(validator.isAfter(e.target.value)) {
      this.setState({
        dateValidate: "creditCard__date creditCard--valid"
      })
    }else{
      this.setState({
        dateValidate: "creditCard__date"
      })
    }
  },
  cvvValidator(e) {
    var cvvEntered = e.target.value
    if(validator.isNumeric(cvvEntered)) {
      if(cvvEntered.length >= 3 && cvvEntered.length <= 4) {

        this.setState({
          cvvValidate: "creditCard__cvv creditCard--valid"
        })
      }else{
        this.setState({
          cvvValidate: "creditCard__cvv"
        })
      }
    }
  },
  nameValidator(e) {
    var name = e.target.value
    var nameSplit = name.split(" ")
    if(e.target.value == "ray martinez") {
      alert("thanks ray! im having tons of fun!")
    }else if(nameSplit.length >= 2) {
      nameSplit.forEach((e) => {
        var eachLngth = e
        if(eachLngth.length >= 2 && validator.isAlpha(eachLngth)) {
          this.setState({
            nameValidate: "creditCard__name creditCard--valid"
          })
        }else{
          this.setState({
            nameValidate: "creditCard__name"
          })
        }
      })
    }
  },
  render() {
    return (
      <section>
        <div className={this.state.creditCard}>
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
                   className={this.state.dateValidate}
                   ref="creditCardDate"
                   onChange={this.dateValidator}/>
            <input type="text"
                   name="cvv"
                   placeholder="xxx"
                   className={this.state.cvvValidate}
                   ref="creditCardCVV"
                   onChange={this.cvvValidator}/>
            <input type="text"
                   name="name"
                   placeholder="card holders name"
                   className={this.state.nameValidate}
                   ref="creditCardName"
                   onChange={this.nameValidator}/>
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
