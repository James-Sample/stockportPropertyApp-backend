const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const {
  REACT_APP_AWS_S3_ACCESS_KEY_ID,
  REACT_APP_AWS_S3_SECRET_KEY,
  REACT_APP_AWS_S3_REGION,
  REACT_APP_S3_BUCKET_NAME,
} = process.env;

AWS.config.update({
  accessKeyId: `${REACT_APP_AWS_S3_ACCESS_KEY_ID}`,
  secretAccessKey: `${REACT_APP_AWS_S3_SECRET_KEY}`,
  region: `${REACT_APP_AWS_S3_REGION}`,
  signatureVersion: "v4",
});

const uploadImage = async (req, res) => {
  // let uploadFile = req.files.file;
  // const fileName = req.files.file.name;
  console.log("hi");
  console.log(req.body);
  console.log(req.data);
  // console.log(fileName);
  // const params = {
  //   Bucket: `${REACT_APP_S3_BUCKET_NAME}`,
  //   Key: `${Date.now()}.${file.name}`,
  //   Body: file,
  // };
  // try {
  //   const { Location } = await s3.upload(params).promise();
  //   res.send(Location).status(201);
  // } catch {
  //   res.sendStatus(501);
  // }
};
module.exports = uploadImage;

// const imageUpload = () => {
//   AWS.config.update({
//     accessKeyId: `${REACT_APP_AWS_S3_ACCESS_KEY_ID}`,
//     secretAccessKey: `${REACT_APP_AWS_S3_SECRET_KEY}`,
//     region: `${REACT_APP_AWS_S3_REGION}`,
//     signatureVersion: "v4",
//   });

//   const s3 = new AWS.S3();

//   const uploadToS3 = async (event) => {
//     if (!file) {
//       return;
//     }
//     const params = {
//       Bucket: `${REACT_APP_S3_BUCKET_NAME}`,
//       Key: `${Date.now()}.${file.name}`,
//       Body: file,
//     };
//     const { Location } = await s3.upload(params).promise();
//     event.preventDefault();
//     setImageUrl(Location);
//     setFields((prevState) => ({ ...prevState, image: Location }));
//     console.log("uploading to s3", Location);
//   };
// };

// export default imageUpload;
