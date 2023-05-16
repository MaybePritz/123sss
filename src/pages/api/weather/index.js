import geodecodeIp from 'micro-geoip-lite';
import requestIp from 'request-ip';
import { geolocation } from "@vercel/edge";

async function Forecast(place) {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${place}&days=7&lang=ru`;
  return fetch(url, {
    method: 'GET',
  }).then(response => response.json());
}



export default async function handler(req, res) {
  if (req.body.hasOwnProperty("location")) {
    console.log('Location:' + req.body.location);
    Forecast(req.body.location)
      .then(data => {
        if (data) {
          if (res.headersSent !== true) {
            res.status(200).json(data);
            res.end();
          }
        } else {
          if (res.headersSent !== true) {
            res.status(503);
            res.end();
          }
        }
      })
      .catch(error => res.status(503).json(error))
  } else {
    let location = req.nextUrl.searchParams.get("location");
    if (!location) {
      const { city } = geolocation(req);
      location = city || "San Francisco";
    } 
    Forecast(location)
      .then(data => {
        if (data) {
          if (res.headersSent !== true) {
            res.status(200).json(data);
            res.end();
          }
        } else {
          if (res.headersSent !== true) {
            res.status(503);
            res.end();
          }
        }
      })
  };

}