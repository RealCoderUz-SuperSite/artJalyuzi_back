const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema(
  {
    name_uz: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    name_ru: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    description_uz: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    description_ru: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    image: [
      {
        url: {
          type: mongoose.SchemaTypes.String,
          required: true,
        },
        id: {
          type: mongoose.SchemaTypes.String,
          required: true,
        },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const Services = mongoose.model("Services", ServicesSchema);

module.exports = Services;
