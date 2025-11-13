import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="px-5 py-[50px] flex items-center gap-10 min-h-[350px]">
      <div className="flex-1 h-[400px]">
        <img 
          src="/assets/both1.jpeg" 
          alt="Dog and cat" 
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>
      
      <div className="flex-1">
        <h2 className="text-[32px] mb-2.5">Get In Touch With Us</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-3 border border-[#ddd] rounded-[5px] text-base"
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-3 border border-[#ddd] rounded-[5px] text-base"
            required
          />
          
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 mb-3 border border-[#ddd] rounded-[5px] text-base"
            required
          />
          
          <textarea
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 mb-3 border border-[#ddd] rounded-[5px] text-base h-[120px] resize-none"
            required
          ></textarea>
          
          <button 
            type="submit"
            className="bg-orange-primary text-white px-6 py-3 border-none rounded-[5px] font-semibold cursor-pointer text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
