const request = require('request');

const query = process.argv.slice(2)[0];

request(`https://api.thecatapi.com/v1/breeds/ddsearch?q=${query}`, (error, response, body) => {
  console.log(error);
  if (error !== undefined) {
    console.log('Invalid Request', error);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed Not Found');
  } else {
    console.log(data[0].description);
  }
  
});