const Property = require("../models/property");

const insertProperty = async (req, res) => {
  const title = req.body.title;
  const postcode = req.body.postcode;
  const type = req.body.type;
  const bedrooms = req.body.bedrooms;
  const bathrooms = req.body.bathrooms;
  const price = req.body.price;
  const email = req.body.email;
  const image = req.body.image;

  try {
    const formData = new Property({
      title: title,
      postcode: postcode,
      type: type,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      price: price,
      email: email,
      image: image,
    });
    await formData.save();
    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
};

module.exports = insertProperty;
