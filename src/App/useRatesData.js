import { useState, useEffect } from "react";
import axios from "axios";


export const useRatesData = (currencyIn) => {
    const API_URL = `https://api.exchangerate.host/latest?symbols=PLN,EUR,USD,GBP,CHF&base=${currencyIn}`;
    const [ratesData, setRatesData] = useState({
        status: "loading"
    });

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get(API_URL);

                setRatesData({
                    date: response.data.date,
                    rates: response.data.rates,
                    status: "success"
                });
            }
            catch (error) {
                setRatesData({
                    status: "error"
                });
            }
        };

        setTimeout(getRates, 1500);
    }, []);

    return ratesData;
};