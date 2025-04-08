const Banners = require("./Banners");

let SITE_URL = process.env.SITE_URL;
const addBannersService = async (req) => {
  try {
    const { name_uz, name_ru, description_uz, description_ru, link } = req.body;

    console.log(req, "req");

    // Rasmlarni saqlash
    const image = `${SITE_URL}/${req.file.filename}`; // Rasm URL to'g'ri
    console.log("Image Path:", image); // Tekshirish uchun

    const banners = new Banners({
      name_uz,
      name_ru,
      description_uz,
      description_ru,
      link,
      image: image, // Rasm maydoni
    });

    await banners.save();
    console.log("Banners saved successfully:", banners); // Tekshirish uchun

    return banners;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add banners");
  }
};

module.exports = addBannersService;
