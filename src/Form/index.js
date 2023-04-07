import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies.js";

const Form = ({ result, calculatedResult }) => {
    const [amount, setAmount] = useState("");
    const [currencyIn, setCurrencyIn] = useState(currencies[0].name);
    const [currencyOut, setCurrencyOut] = useState(currencies[1].name);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculatedResult(amount, currencyIn, currencyOut);
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
                                name="amount" 
                                type="number"
                                min="0" 
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
                                    className="form__currency" 
                                    name="fromCurrency"
                                    onChange={({ target }) => setCurrencyIn(target.value)}
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
                            <button type="button" className="form__button">
                                &#10234;
                            </button>
                            <label className="form__currencyB">
                                Chcę:
                                <select 
                                    value={currencyOut}
                                    className="form__currency" 
                                    name="forCurrency"
                                    onChange={({ target }) => setCurrencyOut(target.value)}
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
                    <p className="form__result">Kwota po przeliczeniu: <br /> 
                       {result}
                    </p>
                    <p className="form__exchangeCourse">
                        Kurs walut z dnia 23.01.2023 r. według średniego kursu walut NBP.
                    </p>
                </fieldset>
            </form>
    )
};

export default Form;