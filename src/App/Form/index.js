import "./style.css";
import Result from "./Result";
import { useState } from "react";
import { currencies } from "../currencies.js";

const Form = ({ result, calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [currencyIn, setCurrencyIn] = useState(currencies[0].name);
    const [currencyOut, setCurrencyOut] = useState(currencies[1].name);

    const changeCurrency = () => {
        setCurrencyIn(currencyOut);
        setCurrencyOut(currencyIn);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currencyIn, currencyOut);
    };

    return (
    <form className="form" onSubmit={onFormSubmit}>
                <fieldset className="form__fieldset">
                    <legend className="form__legend">KALKULATOR WALUT</legend>
                    <p className="form__amount">
                        <label>
                            Podaj kwotę*: &nbsp; 
                            <input
                                value={amount} 
                                className="form__amountInput" 
                                type="number"
                                min="0"
                                max="9999999999"
                                step="0.01" 
                                placeholder="Wpisz kwotę" 
                                autoFocus
                                required
                                onChange={({ target }) => setAmount(target.value)}
                             />
                        </label>
                    </p>
                    <fieldset className="from__options">
                        <legend className="form__optionsLegend">Wybierz waluty</legend>
                        <p>
                            <label className="form__currencyA">
                                Mam:
                                <select
                                    value={currencyIn}
                                    onChange={({ target }) => setCurrencyIn(target.value)}
                                    className="form__currency" 
                                >
                                    {currencies.map((currency) => (
                                        <option
                                            key={currency.id}
                                            value={currency.name}
                                        >
                                            {currency.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <button type="button" className="form__button" onClick={changeCurrency}>
                                &#10234;
                            </button>
                            <label className="form__currencyB">
                                Chcę:
                                <select 
                                    value={currencyOut}
                                    onChange={({ target }) => setCurrencyOut(target.value)}
                                    className="form__currency" 
                                >
                                    {currencies.map((currency) => (
                                        <option
                                            key={currency.id}
                                            value={currency.name}
                                        >
                                            {currency.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </p>
                    </fieldset>
                    <p className="form__buttonParagraph">
                        <button className="form__button form__button--count">Przelicz</button>
                    </p>
                    <Result result={result} />
                    <p className="form__exchangeCourse">
                        Kurs walut z dnia 23.01.2023 r. według średniego kursu walut NBP.
                    </p>
                </fieldset>
            </form>
    )
};

export default Form;