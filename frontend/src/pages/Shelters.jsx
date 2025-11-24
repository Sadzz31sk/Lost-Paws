import { useState, useEffect } from 'react';

const Shelters = () => {
  const [shelters, setShelters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchShelters();
  }, []);

  const fetchShelters = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/shelters`);
      const data = await response.json();
      setShelters(data);
    } catch (err) {
      setError('Failed to load shelters');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-5 py-20">
      <h1 className="text-4xl font-bold text-center mb-8">Animal Shelters</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shelters.map((shelter) => (
          <div key={shelter._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {shelter.imageUrl && (
              <img 
                src={shelter.imageUrl} 
                alt={shelter.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{shelter.name}</h3>
              <p className="text-gray-600 mb-3">{shelter.description}</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <span>📍</span>
                  <span>{shelter.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📧</span>
                  <span>{shelter.contactEmail}</span>
                </p>
                {shelter.phone && (
                  <p className="flex items-center gap-2">
                    <span>📞</span>
                    <span>{shelter.phone}</span>
                  </p>
                )}
              </div>
              {shelter.website && (
                <a 
                  href={shelter.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-orange-primary text-white px-4 py-2 rounded"
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shelters;
