import { useState, useEffect } from 'react';

const Adopt = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/animals`);
      const data = await response.json();
      setAnimals(data);
    } catch (err) {
      console.error('Failed to load animals');
    } finally {
      setLoading(false);
    }
  };

  const filteredAnimals = animals.filter(animal => {
    if (filter === 'all') return animal.status === 'Reported';
    return animal.type === filter && animal.status === 'Reported';
  });

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="container mx-auto px-5 py-20">
      <h1 className="text-4xl font-bold text-center mb-8">Adopt a Pet</h1>
      
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-orange-primary text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('Dog')}
          className={`px-4 py-2 rounded ${filter === 'Dog' ? 'bg-orange-primary text-white' : 'bg-gray-200'}`}
        >
          Dogs
        </button>
        <button
          onClick={() => setFilter('Cat')}
          className={`px-4 py-2 rounded ${filter === 'Cat' ? 'bg-orange-primary text-white' : 'bg-gray-200'}`}
        >
          Cats
        </button>
        <button
          onClick={() => setFilter('Other')}
          className={`px-4 py-2 rounded ${filter === 'Other' ? 'bg-orange-primary text-white' : 'bg-gray-200'}`}
        >
          Others
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAnimals.length === 0 ? (
          <p className="col-span-3 text-center text-gray-600">No animals available for adoption</p>
        ) : (
          filteredAnimals.map((animal) => (
            <div key={animal._id} className="bg-cream-card rounded-lg overflow-hidden shadow-md">
              {animal.imageUrl && (
                <img 
                  src={animal.imageUrl} 
                  alt={animal.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{animal.name}</h3>
                <p className="text-gray-600 mb-2">{animal.type}</p>
                <p className="text-sm text-gray-500 mb-4">{animal.description}</p>
                <button className="w-full bg-orange-primary text-white py-2 rounded hover:bg-orange-600 transition">
                  Contact for Adoption
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Adopt;
