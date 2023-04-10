import './App.css';
import Form from "./Form";
import Footer from "./Footer";
import { useState } from 'react';
import { currencies } from './currencies';

function App() {
  const [result, setResult] = useState("N/A");

  const calculatedResult = (amount, currencyIn, currencyOut) => {
    const valueIn = currencies.find(({ name }) => name === currencyIn).value;
    const valueOut = currencies.find(({ name }) => name === currencyOut).value; 
    const calculation = `${amount} ${currencyIn} = ${(amount * (valueIn / valueOut)).toFixed(2)} ${currencyOut}`;

    setResult(calculation);
  };

  return (
    <div>
        <main>
            <Form 
              result={result} 
              calculatedResult={calculatedResult} 
            />
        </main>
        <Footer />
    </div>
  );
};

export default App;
