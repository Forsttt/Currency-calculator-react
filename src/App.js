
import { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {

  const [result, setResult] = useState("")

  const calculateResult = (amount, currency) => {
    setResult(
      {
        resultValue: currency / amount,
      }
    )
  };

  return (
    <>
      <div className="container">
        <h1 className="header">Kalkulator walutowy</h1>
        <Form
          title="Podaj ilość PLN:"
          subTitle="Wybierz walutę:"
          calculateResult={calculateResult}
          result={result}
        />
      </div>
    </>
  );

};

export default App;
