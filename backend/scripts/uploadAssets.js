require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (filePath, filename) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'lostpaws/assets',
      public_id: filename.replace(/\.[^/.]+$/, ''),
      use_filename: true,
      unique_filename: false,
    });
    return result.secure_url;
  } catch (error) {
    console.error(`Error uploading ${filename}:`, error);
    return null;
  }
};

const uploadAllAssets = async () => {
  const assetsPath = path.join(__dirname, '../public/assets');
  const imageUrls = {};

  if (!fs.existsSync(assetsPath)) {
    console.log('Assets folder does not exist!');
    process.exit(1);
  }

  const files = fs.readdirSync(assetsPath);

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png|gif)$/i)) {
      const filePath = path.join(assetsPath, file);
      console.log(`Uploading ${file}...`);
      const url = await uploadImage(filePath, file);
      if (url) {
        imageUrls[file] = url;
        console.log(`✓ Uploaded: ${file}`);
      }
    }
  }

  fs.writeFileSync(
    path.join(__dirname, 'imageUrls.json'),
    JSON.stringify(imageUrls, null, 2)
  );

  console.log('\nAll images uploaded successfully!');
  console.log(`Total images uploaded: ${Object.keys(imageUrls).length}`);
  console.log('URLs saved to scripts/imageUrls.json');
};

uploadAllAssets();
