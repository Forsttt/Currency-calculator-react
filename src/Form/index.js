import "./style.css";
import "./result.css";
import { useState } from 'react';
import { Currencies } from "../currencies";
const Form = ({ title, subTitle, }) => {
  const [amount, setAmount] = useState("")
  const [currency, setCurrency] = useState(Currencies[0].name)
  const [result, setResult] = useState("")

  const resultRounded = (props) => {
    return Math.round(props * 100) / 100
  }

  const showAmount = (event) => {
    setCurrency(event.target.value)
  }

  const calculateResult = () => {
    const rate = Currencies.find(({ name }) => name === currency).rate

    setResult(
      {
        amount: amount,
        resultValue: amount / rate,
        currency: Currencies.find(({ name }) => name === currency).shortcut
      }
    )
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <div className="form__inputBox">
          <span className="form__Text">{title}</span>
          <input className="form__field js-amount"
            value={amount}
            onChange={(event) => { setAmount(event.target.value) }}
            type="number"
            min="1"
            step="any"
            max="100000000"
            placeholder="Wpisz w kwotę w zł"
            required />
        </div>
        <div>
          <span className="form__Text">{subTitle}</span>
          <select
            className="form__currency"
            value={currency}
            onChange={showAmount}
            name="chooseCurrency">
            {Currencies.map(currency => (
              <option
                key={currency.name}
                value={currency.name}>
                {currency.name}
              </option>
            ))
            };
          </select>
        </div>
      </fieldset>
      <p>
        <button className="button">Oblicz!</button>
      </p>
      <div className="result">
        <p className="resultText">
          {result.amount} PLN = {resultRounded(result !== "" ? result.resultValue : "")} {result.currency}
        </p>
      </div>
    </form>
  );
};

export default Form;
