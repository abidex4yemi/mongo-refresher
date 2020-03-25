const { Artist } = require('../models');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
  const artistWithMinAge = Artist.find({})
    .sort({ age: 1 })
    .limit(1)
    .then(([artist]) => artist.age);

  const artistWithMaxAge = Artist.find({})
    .sort({ age: -1 })
    .limit(1)
    .then(([artist]) => artist.age);

  return Promise.all([artistWithMinAge, artistWithMaxAge]).then((ages) => {
    return {
      min: ages[0],
      max: ages[1]
    };
  });
};
