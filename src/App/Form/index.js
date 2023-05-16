import Result from "./Result";
import Clock from "./Clock";
import {
    StyledForm, FormFieldset, FormLegend, Amount, Label, Input,
    Fieldset, Legend, CurrencyIn, CurrencyOut, Select,
    Wrapper, Button, ButtonCount, Loading, Fail
} from "./styled";
import { useState } from "react";
import { currencies } from '../currencies';
import { useRatesData } from "../useRatesData";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currencyIn, setCurrencyIn] = useState("PLN");
    const [currencyOut, setCurrencyOut] = useState("EUR");
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const changeCurrency = () => {
        setCurrencyIn(currencyOut);
        setCurrencyOut(currencyIn);
    };

    const calculateResult = (amount, currencyIn, currencyOut) => {
        const sourceRate = ratesData.rates[currencyIn];
        const targetRate = ratesData.rates[currencyOut];

        setResult({
            sourceAmount: +amount,
            targetAmount: (targetRate / sourceRate) * amount,
            sourceCurrency: currencyIn,
            targetCurrency: currencyOut
        });

    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currencyIn, currencyOut, ratesData);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <FormFieldset>
                <FormLegend>KALKULATOR WALUT</FormLegend>
                <Clock />
                {ratesData.status === "loading"
                    ? (
                        <>
                            <Loading>
                                Pobieranie danych. Proszę czekać.
                            </Loading>
                        </>
                    ) : ratesData.status === "error"
                        ? (
                            <Fail>
                                Coś poszło nie tak. Sprawdź swoje połączenie z
                                internetem lub spróbuj ponownie później.
                            </Fail>
                        ) : (
                            <>
                                <Amount>
                                    <Label>
                                        Podaj kwotę*: &nbsp;
                                        <Input
                                            value={amount}
                                            type="number"
                                            min="0"
                                            max="9999999999"
                                            step="0.01"
                                            placeholder="Wpisz kwotę"
                                            required
                                            onChange={({ target }) => setAmount(target.value)}
                                        />
                                    </Label>
                                </Amount>
                                <Fieldset>
                                    <Legend>Wybierz waluty</Legend>
                                    <p>
                                        <CurrencyIn>
                                            Mam:
                                            <Select
                                                value={currencyIn}
                                                onChange={({ target }) => setCurrencyIn(target.value)}
                                            >
                                                {Object.keys(ratesData.rates).map((currencyIn) => (
                                                    <option
                                                        key={currencyIn}
                                                        value={currencyIn}
                                                    >
                                                        {currencyIn}
                                                    </option>
                                                ))}
                                            </Select>
                                        </CurrencyIn>
                                        <Button type="button" onClick={changeCurrency}>
                                            {"<=>"}
                                        </Button>
                                        <CurrencyOut>
                                            Chcę:
                                            <Select
                                                value={currencyOut}
                                                onChange={({ target }) => setCurrencyOut(target.value)}
                                            >
                                               {Object.keys(ratesData.rates).map((currencyOut) => (
                                                    <option
                                                        key={currencyOut}
                                                        value={currencyOut}
                                                    >
                                                        {currencyOut}
                                                    </option>
                                                ))}
                                            </Select>
                                        </CurrencyOut>
                                    </p>
                                </Fieldset>
                                <ButtonCount>Przelicz</ButtonCount>
                                <Result result={result} />
                                <Wrapper>
                                    Kurs walut pobrany z Europejskiego Banku Centralnego z {ratesData.date}.
                                </Wrapper>
                            </>
                        )}
            </FormFieldset>
        </StyledForm >
    )
};

export default Form;