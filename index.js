const express = require("express");
const cors = require("cors");
const db = require("./src/db");
const config = require("./src/shared/config");
const handleError = require("./src/shared/errors/handle");
//
const Uploader = require("./src/modules/upload");
const UserRoute = require("./src/modules/users/_api");
const BannersRoute = require("./src/modules/banners/_api");
const PortfolioRoute = require("./src/modules/portfolios/_api");
const ServicesRoute = require("./src/modules/services/_api");
const ContactRoute = require("./src/modules/contacts/_api");

const app = express();

app.use(cors());
app.options("*", cors());

app.use(express.json());

app.use("/public", express.static("public"));

app.use(Uploader);
app.use(UserRoute);
app.use(BannersRoute);
app.use(PortfolioRoute);
app.use(ServicesRoute);
app.use(ContactRoute);

app.use(handleError);

db();
app.listen(config.port, () => {
  console.log(`Server ${config.port}-portda ishlayapti.`);
});
