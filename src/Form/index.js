import "./style.css";

const Form = (props) => (
    <form className="form">
                <fieldset className="form__fieldset">
                    <legend className="form__legend">KALKULATOR WALUT</legend>
                    <p className="form__amount">
                        <label>
                            Podaj kwotę*: &nbsp; <input className="form__amountInput" name="amount" type="number"
                                min="0" step="0.01" placeholder="Wpisz kwotę" required />
                        </label>
                    </p>
                    <fieldset className="from__options">
                        <legend className="form__optionsLegend">Wybierz waluty</legend>
                        <p>
                            <label className="form__currencyA">
                                Mam:
                                <select className="form__currencyIN" name="fromCurrency">
                                    <option value="PLN">PLN</option>
                                    <option value="EUR">EUR</option>
                                    <option value="USD">USD</option>
                                    <option value="GBP">GBP</option>
                                    <option value="CHF">CHF</option>
                                </select>
                            </label>
                            <button type="button" className="form__button">
                                &#10234;
                            </button>
                            <label className="form__currencyB">
                                Chcę:
                                <select className="form__currencyOUT" name="forCurrency">
                                    <option value="PLN">PLN</option>
                                    <option value="EUR" selected>EUR</option>
                                    <option value="USD">USD</option>
                                    <option value="GBP">GBP</option>
                                    <option value="CHF">CHF</option>

                                </select>
                            </label>
                        </p>
                    </fieldset>
                    <p className="form__buttonParagraph">
                        <button className="form__button form__button--count">Przelicz</button>
                    </p>
                    <p className="form__result">Kwota po przeliczeniu: <br /> &nbsp; </p>
                    <p className="form__exchangeCourse">
                        Kurs walut z dnia 23.01.2023 r. według średniego kursu walut NBP.
                    </p>
                </fieldset>
            </form>
);

export default Form;