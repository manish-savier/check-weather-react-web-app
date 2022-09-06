import React, { useEffect } from "react";
import Search from "./components/Search"
import CurrentTemp from "./components/CurrentTemp";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [location, setLocation] = useState("Delhi");

  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
      const response = await fetch(url);
      const resJson = await response.json();
      setData(resJson)
    };
    fetchApi();
    setLocation("")
  }, []);

  function newlocation(event){
    setLocation(event.target.value);
  }

  function getTemperature(event){
    if(event.key === "Enter" || event.type === "click"){
      axios.get(baseURL).then((response) => {
      setData(response.data);
      setLocation("");
    }).catch(error => { 
      setData("");
  });
    }
  }

  let infoDiv = <>
    <CurrentTemp 
          name={data.name}
          temp={data.main?.temp}
          img={`http://openweathermap.org/img/wn/${data.weather && data.weather[0]?.icon}@2x.png`}
          climate={data.weather && data.weather[0].main}
          desc={data.weather && data.weather[0].description}
        />
  </>

  return (
    <>
    <div className="background">
    <div className="main-div">
      <div className="flex-div">
        <Search 
          location={newlocation}
          value={location}
          getTemp={getTemperature}
          click={getTemperature}
        />
        {data ? infoDiv: (<h3 className="error">No Data Found</h3>)}
      </div>
      </div>
    </div>
    </>
  );
}

export default App;