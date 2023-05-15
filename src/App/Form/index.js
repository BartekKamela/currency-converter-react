import Result from "./Result";
import Clock from "./Clock";
import {
    StyledForm, FormFieldset, FormLegend, Amount, Label, Input,
    Fieldset, Legend, CurrencyIn, CurrencyOut, Select,
    Wrapper, Button, ButtonCount
} from "./styled";
import { useState } from "react";
import { currencies } from '../currencies';
import { useRatesData } from "../useRatesData";


const Form = () => {
    const [amount, setAmount] = useState("");
    const [currencyIn, setCurrencyIn] = useState(currencies[0].name);
    const [currencyOut, setCurrencyOut] = useState(currencies[1].name);
    const [result, setResult] = useState();
    const ratesData = useRatesData(currencyIn);

    const changeCurrency = () => {
        setCurrencyIn(currencyOut);
        setCurrencyOut(currencyIn);
    };
  
    const calculateResult = (amount, currencyIn, currencyOut) => {
      const valueIn = currencies.find(({ name }) => name === currencyIn).value;
      const valueOut = currencies.find(({ name }) => name === currencyOut).value;
      const rate = ratesData.rates[currencyOut];
  
      setResult({
        sourceAmount: +amount,
        targetAmount: amount * rate,
        sourceCurrency: currencyIn,
        targetCurrency: currencyOut
      });
  
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currencyIn, currencyOut);
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <FormFieldset>
                <FormLegend>KALKULATOR WALUT</FormLegend>
                <Clock />
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
                                {currencies.map((currency) => (
                                    <option
                                        key={currency.id}
                                        value={currency.name}
                                    >
                                        {currency.name}
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
                                {currencies.map((currency) => (
                                    <option
                                        key={currency.id}
                                        value={currency.name}
                                    >
                                        {currency.name}
                                    </option>
                                ))}
                            </Select>
                        </CurrencyOut>
                    </p>
                </Fieldset>
                <ButtonCount>Przelicz</ButtonCount>
                <Result result={result} />
                <Wrapper>
                    Kurs walut z {ratesData.date} r. pobrane z Europejskiego Banku Centralnego.
                </Wrapper>
            </FormFieldset>
        </StyledForm>
    )
};

export default Form;