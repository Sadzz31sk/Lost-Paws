import React from 'react';

const RecentReports = () => {
  const reports = [
    {
      id: 1,
      name: 'Max',
      type: 'Golden Retriever',
      location: 'Hillcrest, Sacramento',
      image: '/assets/dog6.jpeg',
      isNew: true
    },
    {
      id: 2,
      name: 'Max',
      type: 'Tabby Retriever',
      location: 'Hillcrest, Sacramento',
      image: '/assets/cat5.jpeg',
      isNew: false
    },
    {
      id: 3,
      name: 'Max',
      type: 'Golden Retriever',
      location: 'Hillcrest, Sacramento',
      image: '/assets/dog4.jpeg',
      isNew: true
    }
  ];

  return (
    <section className="px-5 py-[50px] text-center">
      <h2 className="text-[32px] mb-[30px] flex items-center justify-center gap-2.5">
        Recent Reports 
        <img src="/assets/logo_lostpaws.png" alt="Paw Icon" className="w-[30px] h-[30px]" />
      </h2>
      
      <div className="flex justify-between gap-5">
        {reports.map((report) => (
          <div key={report.id} className="bg-cream-card rounded-[15px] overflow-hidden flex-1 relative">
            {report.isNew && (
              <div className="bg-orange-primary text-white px-2 py-0.5 rounded absolute top-2.5 right-2.5 text-xs">
                New
              </div>
            )}
            
            <img 
              src={report.image} 
              alt={report.name} 
              className="w-full h-[200px] object-cover"
            />
            
            <div className="bg-cream-card-dark p-[15px] text-left">
              <h3 className="font-semibold text-lg mb-1.5">{report.name}</h3>
              <p className="text-[#777] text-sm mb-2.5">{report.type}</p>
              
              <div className="flex items-center gap-1.5 text-sm text-[#555] mb-[15px]">
                <img src="/assets/location.png" alt="Location" className="w-4 h-4" />
                <span>{report.location}</span>
              </div>
              
              <a 
                href="#" 
                className="bg-orange-primary text-white px-4 py-2 rounded-[5px] text-sm inline-block"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentReports;
