const { NotFoundError } = require("../../shared/errors");
const Banners = require("./Banners");

const removeBannersService = async ({ id }) => {
  const existing = await Banners.findById(id);

  if (!existing) {
    throw new NotFoundError("Banners Not Found.");
  }

  let delProd = await Banners.findByIdAndDelete(id);

  return delProd;
};

module.exports = removeBannersService;
