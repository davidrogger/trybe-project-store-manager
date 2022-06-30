const status = require('../helpers/status');

module.exports = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ErrorNotFound': {
      res.status(status.HTTP_NOT_FOUND).json({ message });
      break;
    }
    default:
      res.status(status.HTTP_INTERNAL_ERROR).json({ message });
  }
};
