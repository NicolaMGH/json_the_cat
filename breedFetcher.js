const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback('Invalid Request', null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, 'Breed Not Found');
    } else {
      callback(null, data[0].description);
    }
  
  });

};

module.exports = { fetchBreedDescription };