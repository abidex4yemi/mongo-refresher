const { Driver } = require('../../models');

const find = async (req, res, next) => {
  const { lng, lat } = req.query;

  try {
    const driverNearLocation = await Driver.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)]
          },
          $maxDistance: 200000
        }
      }
    });

    return res.status(201).json(driverNearLocation);
  } catch (error) {
    return next(error);
  }
};

module.exports = find;
