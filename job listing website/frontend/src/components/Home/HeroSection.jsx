import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,00,000 +",
      subTitle: "Live Job",
      icon: <FaSuitcase style={{color:"#a100ff"}}/>,
    },
    {
      id: 2,
      title: "90000 +",
      subTitle: "Companies",
      icon: <FaBuilding style={{color:"#a100ff"}}/>,
    },
    {
      id: 3,
      title: "2,00,00 +",
      subTitle: "Job Seekers",
      icon: <FaUsers style={{color:"#a100ff"}}/>,
    },
    {
      id: 4,
      title: "1,00,000 +",
      subTitle: "Employers",
      icon: <FaUserPlus style={{color:"#a100ff"}}/>,
    },
  ];
  return (
    <>
      <div className="heroSection h-screen mt-14">
        <div className="container h-full flex items-center justify-center">
          <div className="title w-full">
            <h1 className="lg:text-6xl sm:text-5xl my-2 font-medium">Find a job that suits</h1>
            <h1 className="lg:text-4xl sm:text-3xl">your interests and skills</h1>
            <p className="text-xl">
            Explore thousands of job listings tailored to your skills and preferences on our platform. With intuitive search filters, personalized recommendations, and effortless applications, finding your dream job has never been easier. Start your journey to professional fulfillment with us!
            </p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details text-black">
          {details.map((element) => {
            return (
              <div className="card rounded hover:cursor-pointer scale transition-all" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
