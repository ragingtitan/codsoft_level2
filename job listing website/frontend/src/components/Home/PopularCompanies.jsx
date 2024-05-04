import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "123 Main Street, Suite 1000, New York, NY 10001, USA",
      openPositions: 10,
      icon: <FaMicrosoft style={{color:"#a100ff"}}/>,
    },
    {
      id: 2,
      title: "Tesla",
      location: "15 Rue de Rivoli, Paris 75004, France",
      openPositions: 5,
      icon: <SiTesla style={{color:"#a100ff"}}/>,
    },
    {
      id: 3,
      title: "Apple",
      location: "101 Friedrichstraße, Berlin 10117, Germany",
      openPositions: 20,
      icon: <FaApple style={{color:"#a100ff"}}/>,
    },
  ];
  return (
    <div className="companies bg-[#a100ff]">
      <div className="container">
        <h3 className="lg:text-5xl sm:text-4xl">TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card scale rounded transition-all hover:cursor-pointer text-black w-full text-center" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p className="text-center">{element.location}</p>
                  </div>
                </div>
                <span className="text-black font-semibold text-xl">Open Positions {element.openPositions}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
