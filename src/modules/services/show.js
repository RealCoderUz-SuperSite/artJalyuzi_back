const { NotFoundError } = require("../../shared/errors");
const Services = require("./Services");

const showServicesService = async ({ id }) => {
  try {
    const services = await Services.findById(id);

    if (!services) {
      throw new NotFoundError("Services not found.");
    }

    return services;
  } catch (error) {
    throw error;
  }
};

module.exports = showServicesService;
