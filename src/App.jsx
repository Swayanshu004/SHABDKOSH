import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './Component/Header';
import Result from './Component/Result';


function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [currency, setCurrency] = useState("English");
  const [lighttheme, setLighttheme] = useState(true);

  const dictionaryApi = async ()=>{
    try {
      const apiData = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      // console.log(apiData);
      setMeanings(apiData.data)

    } catch (error) {
      console.log(error);
    }
  };

  // console.log(meanings);
  useEffect(()=>{
    dictionaryApi();
  },[word, currency])

  return (
    <>
    <Header 
    category={currency} 
    setCategory={setCurrency} 
    setTheme={setLighttheme}
    Theme={lighttheme}
    word={word}
    setWord={setWord} />

    <Result 
    word={word}
    LightTheme={lighttheme}
    meanings={meanings}
    category={currency} />
    </>
  )
}

export default App
