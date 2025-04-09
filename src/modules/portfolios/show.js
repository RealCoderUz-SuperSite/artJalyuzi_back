const { NotFoundError } = require("../../shared/errors");
const Portfolios = require("./Portfolios");

const showPortfoliosService = async ({ id }) => {
  try {
    const portfolios = await Portfolios.findById(id);

    if (!portfolios) {
      throw new NotFoundError("Portfolios not found.");
    }

    return portfolios;
  } catch (error) {
    throw error;
  }
};

module.exports = showPortfoliosService;
