import React,{useState} from 'react';
import './index.css';
import axios from 'axios';
import image from './images/1.png'

const App = () => {
    
    const [quote, setQuote] = useState('Life is a journey, not a destination.');
    const [author, setAuthor] = useState('Ralph Waldo Emerson');

    
    const getData = async() => {
        const response = await axios.get(`https://type.fit/api/quotes`);
        const data = response.data;
        const randomizedData = data[Math.floor(Math.random() * 1642)];
        setQuote(randomizedData.text);
        setAuthor(randomizedData.author);
        console.log(randomizedData);
    }

    return (
        <>
            <div className='main-div' style={{backgroundImage: `url(${image})`}}>
                <div className='center-div'>
                    <div className='content'>
                        <div className='quote'>{quote}</div>
                        <div className='author'>-{author}</div>
                    </div>
                    <button onClick={getData}>Get Qoute</button>
                </div>
            </div>
        </>
    );
}

export default App;

