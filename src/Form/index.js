import "./style.css";
import { useState } from 'react';
const Form = (props) => {

 
  const [amount,setAmount] = useState("")
  const [currency,setCurrency] = useState("EUR")
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.calculateResult(amount, currency)
    console.log(amount);
    console.log(currency);
    console.log(props.calculateResult(amount, currency));
  }
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <div className="form__inputBox">
          <span className="form__Text">{props.title}</span>
          <input className="form__field js-amount"
            value={amount}
            onChange={(event) => {setAmount(event.target.value)}}
            type="number"
            min="1"
            step="any"
            max="100000000"
            placeholder="Wpisz w kwotę w zł"
            required />
        </div>
        <div>
          <span className="form__Text">{props.subTitle}</span>
          <select
            className="form__currency"
            onChange={(event) => {setCurrency(event.target.value)}}
            name="chooseCurrency">
            <option value="EUR" className="form__field ">Euro - EUR</option>
            <option value="SEK" className="form__field ">Korona Szwedzka - SEK</option>
            <option value="CHF" className="form__field ">Frank Szwajcarski - CHF</option>
          </select>
        </div>
      </fieldset>
      <p>
        <button className="button">Oblicz!</button>
      </p>
    </form>
  );
};

export default Form;