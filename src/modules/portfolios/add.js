const Portfolios = require("./Portfolios");

const addPortfoliosService = async (req) => {
  try {
    const { name_uz, name_ru, description_uz, description_ru, image } =
      req.body;

    console.log(req.body, "BODY");

    const portfolios = new Portfolios({
      name_uz,
      name_ru,
      description_uz,
      description_ru,
      image,
    });

    await portfolios.save();
    console.log("Portfolios saved successfully:", portfolios);

    return portfolios;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add portfolios");
  }
};

module.exports = addPortfoliosService;
