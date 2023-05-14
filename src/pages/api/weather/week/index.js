import geodecodeIp from 'micro-geoip-lite';


async function Forecast(place) {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${place}&days=7&lang=ru`;
    return fetch(url, {
        method: 'GET',
    }).then(response => response.json());
}


export default async function handler(req, res) {

    if (req.body.hasOwnProperty("location")) {
        let weatherData = [];

        for (let day = 0; day <8; day++) {
            const fetchDate = Math.floor(new Date().getTime() / 1000.0) + day * 24 * 60 * 60;
            const FormatDate = `${fetchDate.getFullYear()}-${fetchDate.getMonth() + 1}-${fetchDate.getDate()}`;

            Forecast(req.body.location, FormatDate)
            .then(data => {
                weatherData.push(data)
                res.status(200).json(JSON.stringify(weatherData));
                res.end();
            })
            .catch(error => {
                res.status(503).json(error);
                res.end();
            })
        }
    } else {
        const geo = await geodecodeIp();
        let weatherData = [];

        Forecast(`${geo.ll[0]},${geo.ll[1]}`)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(error => {
                res.status(503).json(error);
                res.end();
            })
    }
}
