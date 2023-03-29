const Property = require("../models/property");

const fetchProperties = async (req, res) => {
  try {
    const propertyData = await Property.find();
    if (propertyData.length === 0) {
      console.log(propertyData);
      res.sendStatus(404);
    } else {
      res.status(200).send({
        propertyData,
      });
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = fetchProperties;
