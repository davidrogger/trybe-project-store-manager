const status = require('../helpers/status');

module.exports = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ErrorNotFound': {
      res.status(status.HTTP_NOT_FOUND).json({ message });
      break;
    }
    case 'ValidationError': {
      if (message.includes('must be')) {
        res.status(422).json({ message });
        break;
      }
      res.status(status.HTTP_BAD_REQUEST).json({ message });
      break;
    }
    default:
      res.status(status.HTTP_INTERNAL_ERROR).json({ message });
  }
};
