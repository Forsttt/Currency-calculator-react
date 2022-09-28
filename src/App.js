import './App.css';
import Form from './form';

function App() {
  return (
    <>
      <div className="container">
        <h1 className="header">Kalkulator walutowy</h1>
        <Form
          title="Podaj ilość PLN:"
          subTitle="Wybierz walutę:"
        />
      </div>
    </>
  );
};

export default App;
