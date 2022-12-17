const { fetchBreedDescription } = require('./breedFetcher');

let query = process.argv.slice(2);
let catName = query.join("_");

fetchBreedDescription(catName, (error, data) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log(data);
  }
});