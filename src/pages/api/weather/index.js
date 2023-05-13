import geoip from 'fast-geoip';

async function Forecast(place) {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${place}&days=14&lang=ru`;
  return fetch(url, {
    method: 'GET',
  }).then(response => response.json());
}



export default async function handler(req, res) {
  const ip = (req.connection.remoteAddress != '::1' && req.connection.remoteAddress != undefined ? req.connection.remoteAddres : '88.200.162.3');
  const geo = await geoip.lookup(ip);
  const body = req.body;
  console.log(body);

  if(typeof body.place !== 'undefined'){
  Forecast(body.place)
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
  }else{
    Forecast(`${geo.ll[0]},${geo.ll[1]}`)
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
  }
}