const mongoose = require("mongoose");

const PortfoliosSchema = new mongoose.Schema(
  {
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

const Portfolios = mongoose.model("Portfolios", PortfoliosSchema);

module.exports = Portfolios;
