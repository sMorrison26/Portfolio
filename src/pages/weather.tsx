import { useEffect } from "react";

function Weather() {
  useEffect(() => {
    // var confirm = window.confirm("May we use your location to provide weather services?");
    //throw a button asking for location - https://stackoverflow.com/questions/47581575/only-request-geolocation-information-in-response-to-a-user-gesture
    if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition(getPosSuccess, getPosErr);
    } else {
      window.alert("error: not located");
    }
  }, []);
  function getPosErr(err: GeolocationPositionError) {
    switch (err.code) {
      case err.PERMISSION_DENIED:
        alert("Error: denied request to location");
        break;
      case err.POSITION_UNAVAILABLE:
        alert("Error: position unavailable at this time");
        break;
      case err.TIMEOUT:
        alert("Error: timeout");
        break;
      default:
        alert("Error: an unknown error occured");
        break;
    }
  }

  function getPosSuccess(pos: GeolocationPosition) {
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    getWeather(lat, long);
  }

  async function getWeather(lat: number, long: number) {
    // var req = `/weather?lat=${lat}&long=${long}`;
    // var req = `/weather/:${lat},:${long}`;
    var apiKey = "675d1b2e0a2648be92614732231505";
    var req = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${long}&aqi=no`;
    // console.log(req);
    //pull data
    try {
      const response = await fetch(req);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      renderWeatherData(data);
      conditionalBackground(data);
    } catch (error) {
      alert("Error: There was a problem");
    }
  }
  function renderWeatherData(data: any) {
    const boxElement = document.querySelector(".box");
    if (boxElement) {
      boxElement.innerHTML = `<h1>${data.location.name}</h1>
            <div className="flex justify-evenly">
              <img src=${data.current.condition.icon} className="icon" />
              <h1 className="m-0">${data.current.temp_f}&#176;</h1>
              <img src=${data.current.condition.icon} className="icon" />
            </div>
            <h3>${data.current.condition.text}</h3>
            <div className="wind_precip">
              <div className="wind"></div>
              <div className="precip"></div>
            </div>`;

      const windElement = document.querySelector(".wind");
      if (windElement) {
        windElement.innerHTML = `<h3>Wind</h3><p>${data.current.wind_mph} mph</p><p>${data.current.wind_dir}</p>`;
      }

      const precipElement = document.querySelector(".precip");
      if (precipElement) {
        precipElement.innerHTML = `<h3>Precipitation</h3><p>${data.current.precip_in} in</p>`;
      }
    }
  }

  function conditionalBackground(data) {
    var color = "rgb(0,0,0)";
    switch (data.current.condition.code) {
      case 1000: //sunny
        color = "rgb(84, 84, 239)";
        break;
      case 1003: //partly cloudy
        color = "rgb(192,192,192)";
        break;
      case 1066:
      case 1069:
      case 1072:
      case 1114:
      case 1117:
      case 1207:
      case 1210:
      case 1213:
      case 1216:
      case 1219:
      case 1222:
      case 1225:
      case 1237:
      case 1255:
      case 1258:
      case 1261:
      case 1264:
      case 1279:
      case 1282: //white - snow, sleet, etc
        color = "rgb(255,255,255)";
        let title = document.querySelector("h1");
        if (title) {
          title.style.color = "rgb(0,0,0)";
        }
        break;
      default: //grey - cloudy, rainy, thunderstorm, etc
        color = "rgb(82,113,129)";
        break;
    }
    const element = document.getElementById("content");
    if (element) {
      element.style.background = color;
    }
    const headElement = document.getElementById("head");
    if (headElement) {
      element.style.background =
        "linear-gradient(rgb(120, 120, 194,0.5)," + color;
    }
  }
  return (
    // <>
    <div className="flex justify-center items-center h-full mt-24 text-text-white">
      <div
        className="p-4 box bg-gradient-to-t from-transparent via-[rgb(33,103,208)] to-[rgb(0,208,255)] rounded-lg border-3 
                border-black shadow-md flex flex-col justify-start items-center bg-no-repeat bg-size-2000 animate-gradient h-1/2 w-4/5"
      ></div>
    </div>

    /* <footer className="flex justify-between bg-slate-700 p-3 text-text-white ">
                <div className="text-left">
                    <h3>About</h3>
                    <em><p>A project by Sean Morrison. <strong>2023</strong></p>
                        <p>Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></p></em>
                </div>
                <div className="text-right">
                    <h3>Contact</h3>
                    <em><p><a className="underline" href="https://www.linkedin.com/in/sean-morrison-2a7201217/">LinkedIn</a></p>
                        <p><a className="underline" href="mailto:morrisonsean123@gmail.com">morrisonsean123@gmail.com</a></p></em>
                </div>
            </footer> */
    // </>
  );
}
export default Weather;
