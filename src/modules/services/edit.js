const { NotFoundError } = require("../../shared/errors");
const Services = require("./Services");

const editServicesService = async ({ id, ...changes }) => {
  console.log(changes.changes);
  try {
    const updatedServices = await Services.findByIdAndUpdate(
      id,
      changes.changes,
      {
        new: true,
      }
    );

    if (!updatedServices) {
      throw new NotFoundError("Services Not Found.");
    }

    return updatedServices;
  } catch (error) {
    throw error;
  }
};

module.exports = editServicesService;
