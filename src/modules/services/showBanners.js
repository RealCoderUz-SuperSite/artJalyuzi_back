const { NotFoundError } = require("../../shared/errors");
const Banners = require("./Banners");

const showBannersService = async ({ id }) => {
  try {
    const banners = await Banners.findById(id);

    if (!banners) {
      throw new NotFoundError("Banners not found.");
    }

    return banners;
  } catch (error) {
    throw error;
  }
};

module.exports = showBannersService;
