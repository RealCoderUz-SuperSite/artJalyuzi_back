const { NotFoundError } = require("../../shared/errors");
const Portfolios = require("./Portfolios");

const editPortfoliosService = async ({ id, ...changes }) => {
  if (changes._id) {
    delete changes._id;
  }
  try {
    const updatedPortfolios = await Portfolios.findByIdAndUpdate(
      id,
      changes.changes,
      {
        new: true,
      }
    );

    if (!updatedPortfolios) {
      throw new NotFoundError("Portfolios Not Found.");
    }

    return updatedPortfolios;
  } catch (error) {
    throw error;
  }
};

module.exports = editPortfoliosService;
