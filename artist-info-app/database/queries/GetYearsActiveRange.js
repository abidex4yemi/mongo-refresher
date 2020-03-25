const { Artist } = require('../models');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () => {
  const artistWithMinActiveYear = Artist.find({})
    .sort({ yearsActive: 1 })
    .limit(1)
    .then(([artist]) => artist.yearsActive);

  const artistWithMaxActiveYear = Artist.find({})
    .sort({ yearsActive: -1 })
    .limit(1)
    .then(([artist]) => artist.yearsActive);

  return Promise.all([artistWithMinActiveYear, artistWithMaxActiveYear]).then(
    (ages) => {
      return {
        min: ages[0],
        max: ages[1]
      };
    }
  );
};
