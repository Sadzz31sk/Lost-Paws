require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log('Cloudinary config present:', {
  cloud_name: !!process.env.CLOUDINARY_CLOUD_NAME,
  api_key_length: process.env.CLOUDINARY_API_KEY
    ? process.env.CLOUDINARY_API_KEY.length
    : 0,
  api_secret_length: process.env.CLOUDINARY_API_SECRET
    ? process.env.CLOUDINARY_API_SECRET.length
    : 0,
});

(async () => {
  try {
    const res = await cloudinary.api.resources({ max_results: 1 });
    console.log('API call successful. Resource count:', res.resources.length);
  } catch (err) {
    console.error('API call failed:', err);
  }
})();
