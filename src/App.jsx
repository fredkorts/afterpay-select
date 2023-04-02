import { useState, useEffect } from 'react'
import './App.css'
import SwiperComponent from './components/Select/Swiper/SwiperComponent'

function App() {

  // Let's create a random array of numbers for our select component.
  // const options = Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000));

  const handleSelectValue = (val) => {
    setSelectedValue(val);
  }

  // Fetch some random numbers data from an API.
  const [selectedValue, setSelectedValue] = useState(null);
  const [options, setOptions] = useState([])

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
