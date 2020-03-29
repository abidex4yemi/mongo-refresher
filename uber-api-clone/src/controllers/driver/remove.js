const { Driver } = require('../../models');

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      const error = new Error('You must provide driver id');
      error.status = 400;
      return next(error);
    }

    const deletedDriver = await Driver.findOneAndDelete({ _id: id });

    if (!deletedDriver) {
      const error = new Error('could not delete driver');
      error.status = 400;
      return next(error);
    }

    return res.status(200).json({
      message: 'driver deleted successfully',
      ...deletedDriver.toObject()
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = remove;
