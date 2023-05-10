//import { useState } from "react";

import apiConfig from '../../apiConfig.tsx';

interface CurrencyConversionProps {
    startValue: number,
    startCurrency: string,
    endCurrency: string,
    date: string,
}

const convertCurrencies = (props: CurrencyConversionProps, ) => {
    // const [endValue, setEndValue] = useState<number>(0);

    const {startValue, startCurrency, endCurrency} = props;

    const url = `https://api.apilayer.com/exchangerates_data/convert?base=${startCurrency}&symbols=${endCurrency}&amount=${startValue}&date=${date}`
    fetch(url);

    const options = {
        'apikey': apiConfig.key
    }

    fetch(url, {headers: options})
    .then(res => res.json)
    .then(data => console.log(data))
    .catch(err => console.log(err))

    // return endValue
}

export default convertCurrencies;