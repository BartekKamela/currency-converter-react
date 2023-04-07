import './App.css';
import Form from "./Form";
import Footer from "./Footer";
import { useState } from 'react';
import { currencies } from './currencies';

function App() {
  const [result, setResult] = useState("N/A");

  return (
    <div>
        <main>
            <Form result={result} />
        </main>
        <Footer />
    </div>
  );
};

export default App;
