const { NotFoundError } = require("../../shared/errors");
const Portfolios = require("./Portfolios");
const fs = require("fs");
const path = require("path");

const removePortfoliosService = async ({ id }) => {
  // Portfolio mavjudligini tekshirish
  const existing = await Portfolios.findById(id);
  console.log("Existing portfolio:", existing);

  if (!existing) {
    throw new NotFoundError("Portfolios Not Found.");
  }

  // Portfolioda image maydoni borligini tekshirish va fayllarni o'chirish
  if (existing.image && Array.isArray(existing.image)) {
    // Har bir rasm faylini o'chirish uchun sikl
    for (const img of existing.image) {
      let fileId;

      // Agar image ob'ekt bo'lsa va id mavjud bo'lsa
      if (typeof img === "object" && img.id) {
        fileId = img.id;
      }
      // Agar image string bo'lsa (eski format uchun)
      else if (typeof img === "string") {
        fileId = img;
      }

      console.log(fileId, "fileID");

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
    }
  } else {
    console.log("Image maydoni mavjud emas yoki array emas");
  }

  // Portfolioni bazadan o'chirish
  let delProd = await Portfolios.findByIdAndDelete(id);

  return delProd;
};

module.exports = removePortfoliosService;
