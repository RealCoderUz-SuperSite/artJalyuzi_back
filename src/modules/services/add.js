const Services = require("./Services");

const addServicesService = async (req) => {
  try {
    const { name_uz, name_ru, description_uz, description_ru, image } =
      req.body;

    console.log(req.body, "BODY");

    const services = new Services({
      name_uz,
      name_ru,
      description_uz,
      description_ru,
      image,
    });

    await services.save();
    console.log("Services saved successfully:", services);

    return services;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add services");
  }
};

module.exports = addServicesService;
