import React from "react";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdHome, MdOutlineEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div className="bg-[#02060c] text-white">
      <div className="p-10 text-center space-y-2 ">
        <h1 className="text-4xl font-semibold">Contact Me</h1>
        {/* <p>Below are details to reach out to me</p> */}
      </div>
      <div className="grid m-auto  2xl:grid-cols-5 2xl:px-20 2xl:py-20 xl:grid-cols-5 xl:px-20 xl:py-20 lg:grid-cols-5 lg:px-20 lg:py-20 md:grid-cols-3">
        <div className="grid grid-rows-3 text-center">
          <div className=" shadow-md shadow-[#00abf0] rounded-full w-fit m-auto  p-2 hover:scale-110 duration-500">
            <MdHome size={30} />
          </div>
          <p className="m-auto">Addres</p>
          <p className="">Nagpur,Maharashtra</p>
        </div>
        <div className="grid grid-rows-3 text-center">
          <div className=" shadow-md shadow-[#00abf0] rounded-full w-fit m-auto p-2 hover:scale-110 duration-500">
            <MdOutlineEmail size={30} />
          </div>
          <p className="m-auto">Email</p>
          <p className="">prajwalkamdi18@gmail.com</p>
        </div>
        <div className="grid grid-rows-3 text-center">
          <div className=" shadow-md shadow-[#00abf0] rounded-full w-fit m-auto  p-2 hover:scale-110 duration-500">
            <FaPhoneAlt size={30} />
          </div>
          <p className="m-auto">Phone Number</p>
          <p className="">+91 9970255658</p>
        </div>
        <div className="grid grid-rows-3 text-center">
          <div className=" shadow-md shadow-[#00abf0] rounded-full w-fit m-auto  p-2 hover:scale-110 duration-500">
            <FaLinkedinIn size={30} />
          </div>
          <p className="m-auto">LinkedIn </p>
          <Link to={"https://www.linkedin.com/in/prajwal-kamdi-b016b3286/"}>
            Click Here
          </Link>
        </div>
        <div className="grid grid-rows-3 text-center">
          <div className=" shadow-md shadow-[#00abf0] rounded-full w-fit m-auto  p-2 hover:scale-110 duration-500">
            <IoLogoGithub size={30} />
          </div>
          <p className="m-auto">GitHub </p>
          <Link to={"https://github.com/PrajwalKamdi"}>Click Here</Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
