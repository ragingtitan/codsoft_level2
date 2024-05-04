import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks bg-[#a100ff]">
        <div className="container">
          <h3 className="lg:text-5xl sm:text-4xl">How CareerVista Works?</h3>
          <div className="banner w-full">
            <div className="card rounded">
              <FaUserPlus style={{color:"#a100ff"}}/>
              <p>Create Account</p>
              <p className="text-black">
              Create an Account
              </p>
            </div>
            <div className="card rounded">
              <MdFindInPage style={{color:"#a100ff"}}/>
              <p className="text-black">Find a Job/Post a Job</p>
            </div>
            <div className="card rounded">
              <IoMdSend style={{color:"#a100ff"}}/>
              <p className="text-black">Apply For Job/Recruit Suitable Candidates</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
