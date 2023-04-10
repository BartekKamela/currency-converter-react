import './App.css';
import Form from "./Form";
import Footer from "./Footer";
import { useState } from 'react';
import { currencies } from './currencies';

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, currencyIn, currencyOut) => {
    const valueIn = currencies.find(({ name }) => name === currencyIn).value;
    const valueOut = currencies.find(({ name }) => name === currencyOut).value; 
    const rate = valueIn / valueOut;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      sourceCurrency: currencyIn,
      targetCurrency: currencyOut
    });
  };

  return (
    <div>
        <main>
            <Form 
              result={result} 
              calculateResult={calculateResult} 
            />
        </main>
        <Footer />
    </div>
  );
};

export default App;
