import geodecodeIp from 'micro-geoip-lite';

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
    const geo = await geodecodeIp();
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
  };

}