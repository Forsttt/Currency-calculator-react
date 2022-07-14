import "./style.css";

const Form = () => {
  return(
  <form className="form">
      <fieldset className="form__fieldset">
        <div className="form__inputBox">
            <span className="form__Text">Podaj kwotę:</span>
            <input className="form__field js-amount" name="amount" type="number" min="1" step="any"  max="999999999" placeholder="Wpisz w kwotę w zł" required />
        </div>
        <div>
            <span className="form__Text">Wybierz walute:</span>
            <select className=" form__currency" name="chooseCurrency">
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