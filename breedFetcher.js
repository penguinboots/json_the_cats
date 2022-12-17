const request = require('request');
let catName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  let parsedBody = JSON.parse(body);
  
  if (parsedBody[0]) {
    console.log(parsedBody[0].description);
  } else {
    console.log("Breed not found!");
  }
});