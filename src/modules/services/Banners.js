const mongoose = require("mongoose");

const BannersSchema = new mongoose.Schema(
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
    link: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    image: {
      type: mongoose.SchemaTypes.String,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const Banners = mongoose.model("Banners", BannersSchema);

module.exports = Banners;
