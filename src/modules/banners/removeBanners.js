const { NotFoundError } = require("../../shared/errors");
const Banners = require("./Banners");
const fs = require("fs");
const path = require("path");

const removeBannersService = async ({ id }) => {
  // Banner mavjudligini tekshirish
  const existing = await Banners.findById(id);
  console.log("Existing portfolio:", existing);

  if (!existing) {
    throw new NotFoundError("Banners Not Found.");
  }

  // Bannerda image maydoni borligini tekshirish va faylni o'chirish
  if (existing.image) {
    let fileId;

    // Agar image object bo'lsa va id mavjud bo'lsa
    if (typeof existing.image === "object" && existing.image.id) {
      fileId = existing.image.id;
    }
    // Agar image string bo'lsa
    else if (typeof existing.image === "string") {
      fileId = existing.image;
    }

    console.log(fileId, "fileID");
    console.log(id, "ID");

    if (fileId) {
      const filePath = path.join(__dirname, "../../../public/", fileId);
      console.log("Fayl yo'li:", filePath);

      // Fayl mavjud bo'lsa o'chirish
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log("Fayl o'chirildi:", filePath);
      } else {
        console.log("Fayl topilmadi:", filePath);
      }
    } else {
      console.log("Fayl ID topilmadi");
    }
  } else {
    console.log("Image maydoni mavjud emas");
  }

  // Bannerni bazadan o'chirish
  let delProd = await Banners.findByIdAndDelete(id);

  return delProd;
};

module.exports = removeBannersService;
