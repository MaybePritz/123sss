async function Search(query) {
  const url = `http://api.weatherapi.com/v1/search.json?key=${process.env.API_KEY}&q=${query}`;
  return fetch(url, {
    method: 'GET',
  }).then(response => response.json());
}



export default async function handler(req, res) {
    const _query = req.query.place;
    Search(_query)
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
    .catch(error => res.status(503).json(error));
    
}