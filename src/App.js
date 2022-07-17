
import './App.css';
import Form from './Form';
import Result from './Result';



function App() {

  const CalculateResult = (amount, currency) => {
    const rateEUR = 4.5817;
    const rateCHF = 4.3392;
    const rateSEK = 0.4382;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "CHF":
        return amount / rateCHF;

      case "SEK":
        return amount / rateSEK;

        default:
    };
  };


  return (
  <>
  <div className="container">
    <h1 className="header">Kalkulator walutowy</h1>
    <Form
    title="Podaj Kwotę:"
    subTitle="Wybierz walutę:"
    calculateResult={CalculateResult}
    />
    <Result
    />
  </div>
  </>
  );
  
}

export default App;
