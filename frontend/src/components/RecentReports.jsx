import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const RecentReports = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentAnimals();
  }, []);

  const fetchRecentAnimals = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/animals`);
      const data = await response.json();
      setAnimals(data.slice(0, 6));
    } catch (err) {
      console.error('Failed to load recent reports');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return null;

  return (
    <section className="py-20 px-5 bg-cream">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Recent Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <div key={animal._id} className="bg-cream-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow relative">
              <div className="absolute top-4 right-4 bg-orange-primary text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                New
              </div>
              {animal.imageUrl && (
                <img 
                  src={animal.imageUrl} 
                  alt={animal.name}
                  className="w-full h-56 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{animal.name}</h3>
                <p className="text-gray-700 mb-3">{animal.type}</p>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">Hillcrest, Sacramento</span>
                </div>
                <button className="w-full bg-orange-primary text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentReports;
