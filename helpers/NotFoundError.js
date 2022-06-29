class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ErrorNotFound';
  }
}

module.exports = {
  NotFoundError,
};
