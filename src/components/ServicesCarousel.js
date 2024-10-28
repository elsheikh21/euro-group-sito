import React, { useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ServicesCarousel.css";

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  </div>
);

export const servicesData = [
  {
    service_name: "planning",
    title: "Master Planning",
    description:
      "We deliver urban developments and living environments on our insight that places influence wellbeing of individuals. We create attractive urban spaces where people want to live and work. Key to our success is collaboration with client stakeholders and partners to deliver a human-centered innovative and sustainable master plan.",
    imageUrl:
      "/services/pexels-ron-lach-9618450.webp",
  },
  {
    service_name: "planning",
    title: "Feasibility Study",
    description:
      "We provide clients and stakeholders with in-depth financial, technical, operational, and legal detailed reports tailored to meet their needs. Conducted studies provide potential investors with the technical and financial background to know whether they can move forward with the project successfully.",
    imageUrl:
      "/services/pexels-shkrabaanthony-5816299.webp",
  },
  {
    service_name: "engineering",
    title: "Roads Engineering",
    description:
      "We help clients develop Roads and Highways which have economic and social impact. Our projects cut travel times, ease congestion, and improve safety. We develop innovative, long-term sustainable solutions for roads in urban and rural environments.",
    imageUrl:
      "../services/jamar-penny-ZgmGq_eFmUs-unsplash.webp",
  },
  {
    service_name: "engineering",
    title: "Bridges Engineering and Tunneling",
    description:
      "We build Bridges and Tunnels that connect communities, ease pressure on infrastructure systems, and boost economic progress. We ensure minimal environmental impact and maximum efficiency while considering all external forces.",
    imageUrl:
      "../services/brice-cooper-ilLu21dy_-w-unsplash.webp",
  },
  {
    service_name: "engineering",
    title: "Water and Wastewater Engineering",
    description:
      "We build reliable and resilient projects that have environmental, social, and economic value. We manage water schemes for citizens, from potable water provision to stormwater management and wastewater treatment.",
    imageUrl:
      "../services/ivan-bandura-Ac97OqAWDvg-unsplash.webp",
  },
  {
    service_name: "engineering",
    title: "Environmental Engineering",
    description:
      "We provide sustainable solutions that preserve our natural resources and protect public health. Our team ensures resource efficiency, regulatory compliance, and project impact monitoring.",
    imageUrl:
      "../services/Envirnmental engineering.webp",
  },
  {
    service_name: "engineering",
    title: "Building Engineering",
    description:
      "We engineer buildings that inspire. Our buildings are useful, comfortable, efficient, safe, and sustainable, working harmoniously with their surroundings. We use BIM to enable constant collaboration across all project stakeholders.",
    imageUrl:
      "../services/pexels-davidelocatelli-2383650.webp",
  },
  {
    service_name: "engineering",
    title: "MEP",
    description:
      "We offer MEP solutions that are safe, economic, efficient, and easy to maintain. Our approach minimizes water and energy consumption using the latest technologies such as renewable energy and recycling.",
    imageUrl:
      "../services/chuttersnap-_EFvjSgbw1c-unsplash.webp",
  },
  {
    service_name: "engineering",
    title: "Hydrology and Hydrogeology",
    description:
      "We manage water resources for sustainable development, balancing social, economic, and environmental impact throughout the full water cycle. Our solutions help reduce flood risks and protect cities from erosion.",
    imageUrl:
      "../services/thisisengineering-raeng-XDNVBHF-pr0-unsplash.webp",
  },
  {
    service_name: "engineering",
    title: "Geotechnical and Engineering Geology",
    description:
      "We provide structured reports on ground behavior and groundwater influence on design and construction. Our advanced solutions help reduce risk and enable construction in challenging ground conditions.",
    imageUrl:
      "../services/ivan-bandura-ED6eLNiMWY8-unsplash.webp",
  },
  {
    service_name: "engineering",
    title: "Engineering Surveying",
    description:
      "We collect, analyze and manage spatial information of natural and manmade features for planning purposes. We work closely with our clients and stakeholders to help them visualize their project in order to develop better solutions, identify opportunities and reduce risks. Our experts use the latest technologies in surveying, drafting and mapping, to deliver information modelling ranging from GIS measuring and digital terrain modelling to laser scanning and traffic data collection. We ensure project success through delivery of accurate, timely and cost-effective spatial information.",
    imageUrl:
      "../services/valeria-fursa-HWL0b1JTR-4-unsplash.webp",
  },
  {
    service_name: "architecture",
    title: "Architecture and Landscape",
    description:
      "We design buildings and spaces that provide enjoyable experience, unique identity and meet the social needs of the occupants. We offer high performance buildings that are comfortable, purposeful, simple, efficient and beautiful. We carry out early analysis using latest digital tools to provide the client with a 3D demonstration of the structure, the materials used and the relationship with the surroundings. Our experts offer creative solutions that combine architectural requirements and technical excellence to unlock the full potential of each project while minimizing the environmental and ecological impact. We create resilient landscapes that are sustainable, comfortable and improve community well-being. Our strategic thinking and technical understanding of the surrounding systems from water and ecology to energy and waste, enables us to deliver livable cities with improved biodiversity.",
    imageUrl:
      "../services/dario-gomes-RyVIN23zZwg-unsplash.webp",
  },
  {
    service_name: "architecture",
    title: "Sustainability and Green Building",
    description:
      "We develop sustainable buildings and infrastructure that improve the socio-economics, while at the same time meet the architectural requirements of the project. We help our clients to take responsible design choices to create a comfortable, healthy and safe environment that is affordable to build and operate. Our team introduces circular economy principles into design, construction and operation of projects, to ensure consuming less resources and keeping everything in use for longer time. We explore ways to reduce energy consumption, lower carbon emissions, minimize waste and incorporate reusable elements and natural ventilation. We support clients worldwide in achieving the highest levels of green buildings ratings such as LEED.",
    imageUrl:
      "../services/chuttersnap-oqJxJ4TYoQg-unsplash.webp",
  },
  {
    service_name: "transportation",
    title: "Transport Planning",
    description:
      "We design transport networks that improve mobility while creating livable communities. Our strategies ensure safe, fast, comfortable, continent and sustainable movement of people and goods. We work with our clients to find effective solutions that attain budget, goals and policies. We examine the demographic characteristics over a given period of time, predicting future transportation needs. Our leading transport team plan, model, operate and manage all the necessary facilities and services to cater that demand. Our wide range of transport planning is essential for shaping cities, enabling ecological balance, promoting public and environmental health, and enhancing quality of life.",
    imageUrl:
      "../services/patrick-federi-WkAIAf3l4zg-unsplash.webp",
  },
  {
    service_name: "transportation",
    title: "Traffic Impact Studies",
    description:
      "We quantify the impact of a proposed development, redevelopment or land rezoning on existing transportation networks. Our Traffic Engineers use the latest technologies in data collecting and processing to prepare a Traffic Impact Study report. We provide the client with the existing traffic condition, the expected future traffic condition without the development and with the development, in addition to the transportation improvements required in case that the existing network can’t accommodate the new project. Our solutions ensure safe and efficient traffic flow. We help our clients during the development approval process, as we are familiar with the standards and requirements of the development authorities. We provide the decision makers with evaluation of change in land use impact so that they can maintain safety and level of service.",
    imageUrl:
      "../services/sajjad-ahmadi-tOGsoS4ZvDE-unsplash.webp",
  },
  {
    service_name: "proj-mgmt",
    title: "Program and Project Management",
    description:
      "We treat each project as a unique entity, delivering full spectrum of services across every stage of the project. We work closely with our clients and support their interest throughout the whole life-cycle of the project across planning, design and implementation through delivery and operation. Our experienced professionals work with the latest software systems and technologies in order to deliver innovative and cost-efficient projects. We understand that project scope, cost, and schedule must be managed simultaneously to ensure project implementation efficiently, with a sharp focus on cost, schedule, quality and safety. We tackle technical, environmental and commercial issues with insight into the latest concepts and theories in design and planning. We track and report project performance, providing technical understanding and recommendations, to prevent construction errors and facilitate decision making.",
    imageUrl:
      "../services/pexels-tima-miroshnichenko-6614747.webp",
  },
  {
    service_name: "proj-mgmt",
    title: "Construction Supervision",
    description:
      "We turn ambitious concepts on paper into reality. We provide professional knowledge in all aspects of construction, regardless the size and location of the project. We meet our clients’ expectations and the escalading complexity of the project with a sharp focus on cost, schedule, safety and risk management. Our on-site teams closely monitor construction activities and deliver contract administration, design supervision, contractors’ coordination, temporary work requirements, progress assessment, review and approval of contractor proposals, inspection, materials testing and assurance of compliance with quality, safety, health and environmental requirements. We apply our experience and knowledge providing innovative solutions throughout the entire project, overcoming obstacles efficiently. We ensure that the project is completed in accordance with contract documents, specifications and approved plans, complying to codes and standards.",
    imageUrl:
      "../services/pexels-burst-544965.webp",
  },
  {
    service_name: "proj-mgmt",
    title: "Value Engineering",
    description:
      "We analyze the requirements of the projects and optimize it without compromising value. We ensure maintaining the functional performance at the lowest possible costs with required safety, reliability and quality. Our multidisciplinary team deliver significant savings as we utilize 3D modelling and analysis at early stages of the project to identify errors in design and consider alternative solutions without effecting delivery schedules. We investigate savings potentials by proposing alternative materials, methods and approaches during construction phase. Our unique process reduces construction, operation and maintenance costs, while maintaining and enhancing building performance, quality, safety and value. We consider the clients’ requirements and deliver better understanding of design variables, ensuring that our recommended proposals can be built on time, within budget and according to all requirements.",
    imageUrl:
      "../services/pexels-thirdman-5584052.webp",
  },
];

// Filters from ProjectsSection
const filters = [
  { id: "all", name: "All" },
  { id: "planning", name: "Planning" },
  { id: "engineering", name: "Engineering" },
  { id: "architecture", name: "Architecture & Sustainability" },
  { id: "transportation", name: "Transportation" },
  {
    id: "proj-mgmt",
    name: "Project Management & Construction Supervision",
  },
];

const ServicesCarousel = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const navigate = useNavigate(); // Hook to handle navigation

  // Handle filter click
  const handleFilterClick = (filterId) => {
    setSelectedFilter(filterId);
  };

  const handleReadMoreClick = (service) => {
    navigate(`/service/${service.service_name}`, {
      state: {
        service_name: service.service_name,
        service_title: service.title,
        service_image: service.imageUrl,
      },
    });
  };

  // Filter services based on selected filter
  const filteredServices =
    selectedFilter === "all"
      ? servicesData
      : servicesData.filter(
          (service) => service.service_name === selectedFilter
        );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="services-carousel-wrapper">
      {/* Filters Section */}
      <div className="proj-filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`srv-filter-button ${
              selectedFilter === filter.id ? "active" : ""
            }`}
            onClick={() => handleFilterClick(filter.id)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className="container-fluid">
        <div className="row-fluid w-80">
      {/* Carousel Section */}
          <Slider {...settings}>
        {filteredServices.map((service, index) => (
              <div key={index} className="service-slide my_1 ">
            <div className="service-content">
              <div className="service-image-wrapper">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <div className="service-text">
                <h2 className="service-title text-left">{service.title}</h2>
                <p className="service-description truncate-text text-left">
                  {service.description}
                </p>
                <div className="services-read-more-btn">
                  <button
                    className="service-button"
                    onClick={() => handleReadMoreClick(service)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
