const { NotFoundError } = require("../../shared/errors");
const Banners = require("./Banners");

const editBannersService = async ({ id, ...changes }) => {
  console.log(changes);
  // _id ni changes dan olib tashlash
  if (changes._id) {
    delete changes._id;
  }
  try {
    const updatedBanners = await Banners.findByIdAndUpdate(id, changes, {
      new: true,
    });

    if (!updatedBanners) {
      throw new NotFoundError("Banners Not Found.");
    }

    return updatedBanners;
  } catch (error) {
    throw error;
  }
};

module.exports = editBannersService;
