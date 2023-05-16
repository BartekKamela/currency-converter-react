import { useState, useEffect } from "react";
import axios from "axios";


export const useRatesData = () => {
    const API_URL = `https://api.exchangerate.host/latest?symbols=PLN,EUR,USD,GBP,CHF`;
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
                console.error(error);
            }
        };

        setTimeout(getRates, 2500);
    }, []);

    return ratesData;
};