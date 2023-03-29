import AWS from "aws-sdk";
const {
  REACT_APP_DEFAULT_IMAGE,
  REACT_APP_AWS_S3_ACCESS_KEY_ID,
  REACT_APP_AWS_S3_SECRET_KEY,
  REACT_APP_AWS_S3_REGION,
  REACT_APP_S3_BUCKET_NAME,
} = process.env;

const imageUpload = () => {
  AWS.config.update({
    accessKeyId: `${REACT_APP_AWS_S3_ACCESS_KEY_ID}`,
    secretAccessKey: `${REACT_APP_AWS_S3_SECRET_KEY}`,
    region: `${REACT_APP_AWS_S3_REGION}`,
    signatureVersion: "v4",
  });

  const s3 = new AWS.S3();

  const uploadToS3 = async (event) => {
    if (!file) {
      return;
    }
    const params = {
      Bucket: `${REACT_APP_S3_BUCKET_NAME}`,
      Key: `${Date.now()}.${file.name}`,
      Body: file,
    };
    const { Location } = await s3.upload(params).promise();
    event.preventDefault();
    setImageUrl(Location);
    setFields((prevState) => ({ ...prevState, image: Location }));
    console.log("uploading to s3", Location);
  };
};

export default imageUpload;
