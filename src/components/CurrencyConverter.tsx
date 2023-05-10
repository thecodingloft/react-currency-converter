import { useState } from 'react';
import './CurrencyConverter.css';
import {MdOutlineContentCopy} from 'react-icons/md';

// import useCurrencyConversion from '../hooks/useCurrencyConversion';

const CurrencyConverter = () => {
    const [output, setOutput] = useState<number>(0);
    const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);
    const [fromCurrency, setFromCurrency] = useState<string>('');
    const [toCurrency, setToCurrency] = useState<string>('');

    //const { convertCurrencies } = useCurrencyConversion;

    // TODO - finish layout
    // TODO - finish css
    // TODO - make API call

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log('submitting data');
        // return a value
        const returnValue = 123;
        // set Output
        setOutput(returnValue);
    }

    const copyToClipboard = ():void => {
        console.log('copied to clipboard');
        const text: string = output.toString();
        navigator.clipboard.writeText(text);
        setCopiedSuccess(true);
        setTimeout(() => {
            setCopiedSuccess(false)
        }, 3000)
    }

    const saveCurrencySelection = (fromCurrency: string, toCurrency: string):void => {
        localStorage.setItem('fromCurrency', fromCurrency);
        localStorage.setItem('toCurrency', toCurrency);
    }

    const setCurrencyDefaults = (): void => {
        const prevFromCurrency:string | null = localStorage.getItem('fromCurrency');
        const prevToCurrency:string | null = localStorage.getItem('toCurrency');
        // check if local storage exists
        if (prevFromCurrency != null && prevToCurrency != null) {
            console.log('previous value found')
            setFromCurrency(prevFromCurrency);
            setToCurrency(prevToCurrency);
        }
        // set default values
        else {
            console.log('setting default values')
            setFromCurrency('USD');
            setToCurrency('EUR')
        }
    }

    return (
        <div className="currency-converter">
            <h1>Currency Converter</h1>
            <form className="currency-converter__form" onSubmit={onSubmit}>
                <div className='form-field'>
                    <label>Amount</label>
                    <input type="text"/>
                </div>
                <div className="form-field">
                    <label className='form-field__el form-field__label'>From</label>
                    <select>
                        {/* TODO - LABELS & ICONS */}
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                        <option>JPY</option>
                        <option>CNY</option>
                        <option>CHF</option>
                        <option>CAD</option>
                        <option>AUD</option>
                    </select>
                </div>
                <div className='form-field'>
                    <label>To</label>
                    <select>
                        {/* TODO - LABELS & ICONS */}
                        <option>EUR</option>
                        <option>USD</option>
                        <option>GBP</option>
                        <option>JPY</option>
                        <option>CNY</option>
                        <option>CHF</option>
                        <option>CAD</option>
                        <option>AUD</option>
                    </select>
                </div>
                <input className='btn form-submit' type="submit" value="Convert"/>
            </form>
            {output > 0 && <div className='output-container'>
                <p>{output}</p>
                <a onClick={copyToClipboard}><MdOutlineContentCopy/></a>
            </div>
            }   
            {copiedSuccess && 
            <div>
                Copied '{output}' to clipboard
            </div>
            }

        </div>
    )
}

export default CurrencyConverter;