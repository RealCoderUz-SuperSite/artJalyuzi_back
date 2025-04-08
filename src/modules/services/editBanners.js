const { NotFoundError } = require("../../shared/errors");
const Banners = require("./Banners");

const editBannersService = async ({ id, ...changes }) => {
  console.log(changes.changes);
  try {
    const updatedBanners = await Banners.findByIdAndUpdate(
      id,
      changes.changes,
      {
        new: true,
      }
    );

    if (!updatedBanners) {
      throw new NotFoundError("Banners Not Found.");
    }

    return updatedBanners;
  } catch (error) {
    throw error;
  }
};

module.exports = editBannersService;
