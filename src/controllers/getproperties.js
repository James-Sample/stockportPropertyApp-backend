const Property = require("../models/property");

const fetchProperties = async (req, res) => {
  try {
    const search = req.query.search || "";
    let sort = req.query.sort || "price";
    let postcode = req.query.postcode || "All";

    const postcodeOptions = [
      "SK1",
      "SK2",
      "SK3",
      "SK4",
      "SK5",
      "SK6",
      "SK7",
      "SK8",
      "SK9",
      "SK10",
      "SK11",
      "SK12",
      "SK13",
      "SK14",
      "SK15",
      "SK16",
      "SK17",
      "SK22",
      "SK23",
    ];

    postcode === "All"
      ? (postcode = [...postcodeOptions])
      : (postcode = req.query.postcode.split(","));
    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = "asc";
    }

    const propertyData = await Property.find({
      title: { $regex: search, $options: "i" },
    })
      .where("postcode")
      .in([...postcode])
      .sort(sortBy);

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
