const { Driver } = require('../../models');

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateDriverInfo = await Driver.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );

    return res.status(200).json(updateDriverInfo);
  } catch (error) {
    return next(error);
  }
};

module.exports = update;
