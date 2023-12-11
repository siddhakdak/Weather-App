import React from 'react'
import cloud from "../assests/clouds.png"
import clear from "../assests/clear.png"
import drizzle from "../assests/drizzle.png"
import cloud from "../assests/clouds.png"
import {HiMagnifyingGlass, HiSearch} from "react-icons/hi"

const Main = () => {
    const search = async() =>{
        const [image, setImage] = useState("cloud")
        let element = document.getElementById("inputt");
        if(element[0].value == 0){
            return 0;
        }
        
        let api = "6e7852226f33cb0166e6d058a657cea4";
        let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&apId=${api}&q=${element[0].value}`;
        const response = await url.fetch();
        const result = await response.json();

        const temperature = document.getElementById("temp");        
        const humidity = document.getElementById("humidity");        
        const city = document.getElementById("city");        
        const wind = document.getElementById("wind"); 
        
        temperature[0].innerHTML = result.main.temp;
        humidity[0].innerHTML = result.main.humidity;
        city[0].innerHTML = result.name;
        wind[0].innerHTML = result.wind.speed;
    }


  return (
    <div className="flex my-24 justify-center items-center">
      <div
        className="bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 w-[400px] flex-col h-[550px] p-5 rounded-3xl mx-[50px]"
      >
        <div className="item-center h-10 mt-5 gap-2 flex justify-center">
          <input
          id="inputt"
            className="outline-none p-2 rounded-3xl px-4 font-bold"
            type="text"
            placeholder="Search City here"
          />
          <button
          id="buttonn" onClick={()=>{}}>
              <HiSearch className='bg-white text-blue rounded-2xl h-9 w-9 p-2'/>
          </button>

        </div>
        <div className="flex justify-center items-center my-5 flex-col">
          <img
            id="image"
            className="h-[200px] w-[200px]"
            src={cloud}
            alt=""
          />
          <h1 className="text-7xl text-white font-bold" id="temp" >22&deg;C</h1>
          <h2 className="mt-4 text-3xl text-white font-bold" id="city" >Delhi</h2>
        </div>
        <div className="flex gap-9 justify-center text-white pt-5">
          <div className="flex-col items-center justify-center">
            <p className="text-xl font-semibold" >Humidity</p>
            <p className="text-xl font-semibold  flex justify-center" id="humidity"> 53%</p>
          </div>
          <div className="flex-col justify-center items-center">
            <h2 className="text-xl font-semibold">Wind Speed</h2>
            <h4 className="text-xl font-semibold flex justify-center" id="wind">3 kmh</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main