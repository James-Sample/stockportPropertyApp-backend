const Property = require("../models/property");

const filterProperties = async (req, res) => {
  try {
    let query;
    const reqQuery = { ...req.query };
    const removeFields = ["sort"];

    removeFields.forEach((value) => delete reqQuery[value]);

    let queryStr = JSON.stringify(reqQuery);

    queryStr = queryStr.replace(
      /\b(gt|get|lt|lte|in)\b/g,
      (match) => `$${match}`
    );

    query = Property.find(JSON.parse(queryStr));
    console.log(query);

    if (req.query.sort) {
      const sortByArr = req.query.sort.split(",");

      const sortByStr = sortByArr.join(" ");

      query = query.sort(sortByStr);
    }

    // // const propertyData = await Property.find(JSON.parse(queryStr));

    // const reqQuery = { ...req.query };
    // console.log(reqQuery);

    // const propertyData = await Property.find();

    const propertyData = await query;

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

module.exports = filterProperties;
