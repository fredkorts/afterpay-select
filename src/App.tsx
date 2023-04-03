import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'
import SwiperComponent from './components/Select/Swiper/SwiperComponent'

interface SwiperComponentProps {
  options: number[];
  value: number | null;
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  subtitle: string;
  keyboardEnabled: boolean;
  onselectValue: (val: number) => void;
}

function App() {

  // A random array of values for our options array.
  const options = Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000));

  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  // Set the chosen value.
  const handleSelectValue = (val: number) => {
    setSelectedValue(val);
  }

  // Fetch some random numbers data from an API. This works locally, but not on hosted pages.
  /**
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [options, setOptions] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=30');
        const data = await response.json();
        setOptions(data);

      } catch (error) {
        console.log(`Failed to fetch the data: ${error}`);
      }
    }
    fetchData();
  },[])
   */
  

  return (
    <div className="App">
      <div className="card">
        <SwiperComponent
                options={options} 
                value={selectedValue}
                backgroundColor={"#fff"}
                primaryColor={"#474747"} 
                secondaryColor={"#00817a"} 
                subtitle={"€/Month"} 
                keyboardEnabled
                onSelectValue={handleSelectValue}
          />
      </div>
    </div>
  )
}

export default App
