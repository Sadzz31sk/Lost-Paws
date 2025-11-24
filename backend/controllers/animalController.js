const Animal = require('../models/Animal');

exports.reportAnimal = async (req, res) => {
  try {
    const animalData = {
      name: req.body.name,
      type: req.body.type,
      description: req.body.description,
      imageUrl: req.file ? req.file.path : null,
      reportedBy: req.user.id,
      status: 'Reported',
    };

    if (req.body.latitude && req.body.longitude) {
      animalData.location = {
        type: 'Point',
        coordinates: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
      };
    }

    const animal = new Animal(animalData);
    const saved = await animal.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find().populate('reportedBy', 'name email');
    res.json(animals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAnimalById = async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id).populate('reportedBy', 'name email');
    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(animal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(animal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByIdAndDelete(req.params.id);
    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json({ message: 'Animal deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
