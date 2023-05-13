import geoip from 'fast-geoip';


async function Forecast(place, date) {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${place}&dt=${date}&lang=ru`;
    return fetch(url, {
        method: 'GET',
    }).then(response => response.json());
}


export default async function handler(req, res){
    const reqDate = req.query.date;
    const fetchDate = new Date(Number(reqDate) * 1000);
    const FormatDate = `${fetchDate.getFullYear()}-${fetchDate.getMonth() + 1}-${fetchDate.getDate()}`;

    const ip = (req.connection.remoteAddress != '::1' && req.connection.remoteAddress != undefined ? req.connection.remoteAddres : '88.200.162.3');
    const geo = await geoip.lookup(ip);
    
    const body = req.body
    
    if(body.place){
        Forecast(body.place, FormatDate)
        .then(data => {
            delete data.forecast.forecastday[0].hour;
            res.status(200).json(data.forecast.forecastday[0]);
            res.end();
        })
        .catch(error => {
            res.status(503).json(error);
            res.end();
        })
    }else{
        Forecast(`${geo.ll[0]},${geo.ll[1]}`, FormatDate)
        .then(data => {
            delete data.forecast.forecastday[0].hour;
            res.status(200).json(data.forecast.forecastday[0]);
            res.end();
        })
        .catch(error => {
            res.status(503).json(error);
            res.end();
        })
    }
}
