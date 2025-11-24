require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const Animal = require('../models/Animal');
const Shelter = require('../models/Shelter');
const fs = require('fs');
const path = require('path');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for seeding');
  } catch (error) {
    console.log('Error:', error.message);
    process.exit(1);
  }
};

const getImageUrls = () => {
  const imageUrlsPath = path.join(__dirname, '../scripts/imageUrls.json');
  if (fs.existsSync(imageUrlsPath)) {
    return JSON.parse(fs.readFileSync(imageUrlsPath, 'utf8'));
  }
  return null;
};

const seedData = async () => {
  try {
    await connectDB();

    await User.deleteMany({});
    await Animal.deleteMany({});
    await Shelter.deleteMany({});

    console.log('Cleared existing data');

    const imageUrls = getImageUrls();

    const users = await User.create([
      {
        name: 'Admin User',
        email: 'admin@lostpaws.com',
        password: 'password123',
        isAdmin: true,
      },
      {
        name: 'Manku',
        email: 'manku@example.com',
        password: 'password123',
        isAdmin: false,
      },
      {
        name: 'Sofu',
        email: 'sofu@example.com',
        password: 'password123',
        isAdmin: false,
      },
    ]);

    console.log('Users created');

    const shelters = await Shelter.create([
      {
        name: 'Happy Paws Animal Shelter',
        description: 'A loving shelter dedicated to rescuing and rehoming stray animals in Sacramento area.',
        address: 'Hillcrest, Sacramento, CA 95825',
        location: {
          type: 'Point',
          coordinates: [-121.4195, 38.5937],
        },
        contactEmail: 'contact@happypaws.org',
        phone: '+1-916-555-0100',
        website: 'https://happypaws.org',
        imageUrl: imageUrls?.['both1.jpeg'] || 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6',
      },
      {
        name: 'Sacramento Animal Care Center',
        description: 'Community-driven shelter providing care and adoption services for homeless animals.',
        address: 'Downtown, Sacramento, CA 95814',
        location: {
          type: 'Point',
          coordinates: [-121.4944, 38.5816],
        },
        contactEmail: 'info@sacramentoanimals.org',
        phone: '+1-916-555-0200',
        website: 'https://sacramentoanimals.org',
        imageUrl: imageUrls?.['both2.jpeg'] || 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7',
      },
      {
        name: 'Paws & Hearts Rescue',
        description: 'Non-profit organization focused on rescue, rehabilitation, and adoption of stray animals.',
        address: 'East Sacramento, CA 95816',
        location: {
          type: 'Point',
          coordinates: [-121.4547, 38.5781],
        },
        contactEmail: 'help@pawshearts.org',
        phone: '+1-916-555-0300',
        website: 'https://pawshearts.org',
        imageUrl: imageUrls?.['cats4.jpeg'] || 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b',
      },
      {
        name: 'Golden State Animal Sanctuary',
        description: 'Large sanctuary providing temporary and permanent homes for rescued animals.',
        address: 'North Highlands, CA 95660',
        location: {
          type: 'Point',
          coordinates: [-121.3761, 38.6746],
        },
        contactEmail: 'sanctuary@goldenstate.org',
        phone: '+1-916-555-0400',
        imageUrl: imageUrls?.['dogs1.jpeg'] || 'https://images.unsplash.com/photo-1534361960057-19889db9621e',
      },
    ]);

    console.log('Shelters created');

    const animals = await Animal.create([
      {
        name: 'Max',
        type: 'Dog',
        description: 'Friendly Golden Retriever found in Hillcrest area. Very playful and good with kids.',
        imageUrl: imageUrls?.['dog1.jpeg'] || 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24',
        location: {
          type: 'Point',
          coordinates: [-121.4195, 38.5937],
        },
        reportedBy: users[1]._id,
        status: 'Reported',
      },
      {
        name: 'Bella',
        type: 'Cat',
        description: 'Beautiful Tabby cat found near downtown. Appears to be well-groomed and friendly.',
        imageUrl: imageUrls?.['cat1.jpeg'] || 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
        location: {
          type: 'Point',
          coordinates: [-121.4944, 38.5816],
        },
        reportedBy: users[2]._id,
        status: 'Reported',
      },
      {
        name: 'Charlie',
        type: 'Dog',
        description: 'Young German Shepherd mix, very energetic and loves to play fetch.',
        imageUrl: imageUrls?.['dog2.jpeg'] || 'https://images.unsplash.com/photo-1568572933382-74d440642117',
        location: {
          type: 'Point',
          coordinates: [-121.4547, 38.5781],
        },
        reportedBy: users[1]._id,
        status: 'Reported',
      },
      {
        name: 'Luna',
        type: 'Cat',
        description: 'Sweet Persian cat found in East Sacramento. Very calm and affectionate.',
        imageUrl: imageUrls?.['cat2.jpeg'] || 'https://images.unsplash.com/photo-1543852786-1cf6624b9987',
        location: {
          type: 'Point',
          coordinates: [-121.4547, 38.5781],
        },
        reportedBy: users[2]._id,
        status: 'Reported',
      },
      {
        name: 'Rocky',
        type: 'Dog',
        description: 'Large mixed breed dog, appears to be lost. Wearing a blue collar.',
        imageUrl: imageUrls?.['dog3.jpeg'] || 'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
        location: {
          type: 'Point',
          coordinates: [-121.3761, 38.6746],
        },
        reportedBy: users[1]._id,
        status: 'Reported',
      },
      {
        name: 'Whiskers',
        type: 'Cat',
        description: 'Orange tabby cat found in North Highlands. Very friendly and loves attention.',
        imageUrl: imageUrls?.['cat3.jpeg'] || 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2',
        location: {
          type: 'Point',
          coordinates: [-121.3761, 38.6746],
        },
        reportedBy: users[2]._id,
        status: 'Reported',
      },
      {
        name: 'Buddy',
        type: 'Dog',
        description: 'Small Beagle mix, very friendly and well-behaved. Found wandering in the park.',
        imageUrl: imageUrls?.['dog4.jpeg'] || 'https://images.unsplash.com/photo-1505628346881-b72b27e84530',
        location: {
          type: 'Point',
          coordinates: [-121.4195, 38.5937],
        },
        reportedBy: users[1]._id,
        status: 'Adopted',
      },
      {
        name: 'Mittens',
        type: 'Cat',
        description: 'Black and white cat with distinctive mittens pattern on paws.',
        imageUrl: imageUrls?.['cat4.jpeg'] || 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13',
        location: {
          type: 'Point',
          coordinates: [-121.4944, 38.5816],
        },
        reportedBy: users[2]._id,
        status: 'Reported',
      },
      {
        name: 'Shadow',
        type: 'Dog',
        description: 'Energetic black Labrador, loves to play and run around.',
        imageUrl: imageUrls?.['dog5.jpeg'] || 'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
        location: {
          type: 'Point',
          coordinates: [-121.4195, 38.5937],
        },
        reportedBy: users[1]._id,
        status: 'Reported',
      },
      {
        name: 'Fluffy',
        type: 'Cat',
        description: 'Beautiful long-haired white cat, very gentle and calm.',
        imageUrl: imageUrls?.['cat5.jpeg'] || 'https://images.unsplash.com/photo-1543852786-1cf6624b9987',
        location: {
          type: 'Point',
          coordinates: [-121.4944, 38.5816],
        },
        reportedBy: users[2]._id,
        status: 'Reported',
      },
      {
        name: 'Rex',
        type: 'Dog',
        description: 'Strong and loyal German Shepherd, well-trained and obedient.',
        imageUrl: imageUrls?.['dog6.jpeg'] || 'https://images.unsplash.com/photo-1568572933382-74d440642117',
        location: {
          type: 'Point',
          coordinates: [-121.4547, 38.5781],
        },
        reportedBy: users[1]._id,
        status: 'Reported',
      },
      {
        name: 'Oliver',
        type: 'Dog',
        description: 'Playful and friendly puppy, loves to cuddle.',
        imageUrl: imageUrls?.['dog7.jpeg'] || 'https://images.unsplash.com/photo-1568572933382-74d440642117',
        location: {
          type: 'Point',
          coordinates: [-121.4195, 38.5937],
        },
        reportedBy: users[1]._id,
        status: 'Reported',
      },
    ]);

    console.log('Animals created');

    console.log('\nSeed data created successfully!');
    console.log('\nTest Login Credentials:');
    console.log('Admin: admin@lostpaws.com / password123');
    console.log('User: manku@example.com / password123');
    console.log('User: sofu@example.com / password123');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
