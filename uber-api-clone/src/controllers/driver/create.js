const { Driver } = require('../../models');

const create = async (req, res, next) => {
  try {
    const newDriver = await Driver.create(req.body);

    return res.status(201).json(newDriver);
  } catch (error) {
    return next(error);
  }
};

module.exports = create;
