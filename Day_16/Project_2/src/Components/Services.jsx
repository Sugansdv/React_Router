import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building fast, responsive, and scalable web applications using modern technologies.",
      icon: "💻",
    },
    {
      title: "Responsive Design",
      description: "Creating websites that work seamlessly on desktops, tablets, and smartphones.",
      icon: "📱",
    },
  ];

  return (
    <div className="services-container container py-5">
      <h2 className="text-center mb-5">My Services</h2>
      <div className="row d-flex justify-content-center">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="service-card text-center p-4">
              <div className="service-icon mb-3">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
