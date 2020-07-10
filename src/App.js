import React,{useEffect,useState} from 'react';
import {Cards,Chart,CountryPicker} from './components'
import styles from './App.module.css';
import {fetchData} from './api';


function App() {
  const [data, setdata] = useState({});
  const [country,setCountry] = useState("");
  
  const handleCountryChange  = async(country)=>{
    const data  = await fetchData(country);

    setCountry(country);
    setdata(data);
  }

  useEffect(()=>{

    async function GetData(){
      const data = await fetchData();
      setdata(data);
    }
    GetData();
  },[])
    return (
        <div className={styles.container}>
          <Cards data={data}/>
          <CountryPicker handleCountryChange = {handleCountryChange}/> 
          <Chart data={data} country={country}/>
        </div>
    )
}

export default App
