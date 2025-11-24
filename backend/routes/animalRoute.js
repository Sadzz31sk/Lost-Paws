const express = require('express');
const router = express.Router();
const { reportAnimal, getAllAnimals, getAnimalById, updateAnimal, deleteAnimal } = require('../controllers/animalController');
const { protect } = require('../middlewares/authMiddleware');
const { upload } = require('../config/cloudinary');

router.post('/', protect, upload.single('image'), reportAnimal);
router.get('/', getAllAnimals);
router.get('/:id', getAnimalById);
router.put('/:id', protect, updateAnimal);
router.delete('/:id', protect, deleteAnimal);

module.exports = router;
