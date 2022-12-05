import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import Button from './components/Button/Button';


function App() {
  const [nama, setNama] = useState('Uncle Roger');
  const [counter, setCounter] = useState(0);
  const [berat,setBerat] = useState(null);
  const [tinggi,setTinggi] = useState(null);
  const [index, setIndex] = useState(' ');
  const bulan = [
    "Januari", 
    "February", 
    "Maret", 
    "April" , 
    "Mei" , 
    "Juni", 
    "Juli", 
    "Agustus", 
    "September", 
    "Oktober",
    "November",
    "Desember" ]

  const tambahCounter = () => {
    setCounter(counter + 1);
  };
  
    const handleInput = (e) => {
    setNama(e.target.value);
  };

  const resetCounter = () => {
    setCounter(0);
  }
  const kurangCounter = () => {
     counter == 0 ? alert("Cannot Lah") : setCounter(counter - 1 );
    }
    
    const ubahTinggi = (e) => {
      setTinggi(e.target.value/100);
    }
    const ubahBerat = (e) => {
      setBerat(e.target.value);
    }

    const BMI = () => {
      let b = berat;
      let t = tinggi;
      
      let bmi = b / (t * t);

      if (bmi < 18.5){
        setIndex("Kurang");
      }
      else if(bmi>=18.5 && bmi<=22.9){
        setIndex("Normal");
      }
      else if(bmi>=23 && bmi <= 24.9){
        setIndex("Kelebihan Berat Badan");
      }
      else if(bmi>=25 && bmi <= 29.9){
        setIndex("Obesitas tingkat 1");
      }
      else if(bmi >= 30){
        setIndex("Obesitas tingkat 2");
      }
      else{
        setIndex("");
      }
      }


  return (
    <div className="App">
      <div className='Counter'>
      <h1>{counter}</h1>

      <Button budi={kurangCounter} yanto={"kurang"} />
      { counter != 0 && <Button budi={resetCounter} yanto={"reset"} /> }
      <Button budi={tambahCounter} yanto={"tambah"} />
      </div>

      {/* <h1>Nama-Nama Bulan</h1>
      {
        bulan.map((item,index)=>{
        return <p key={index}>{item}</p>
        })
      } */}
      <div className='name'>
      <h1>{nama} said</h1>
      <h1>Is Barbeque pork halal?</h1>
      <h1>YES</h1>
      <input type="text" onChange={handleInput} />
    </div>
    <div className='Calculator'>
        <p>Tinggi Badan (cm)&emsp;<Input isi={ubahTinggi} /></p>
        <p>Berat Badan (kg)&emsp;<Input isi={ubahBerat} /></p>
        <p>Hasil BMI anda: {index}</p>
        <button onClick={BMI}>Hitung</button>
    </div>
    </div>
  );
}

export default App;
