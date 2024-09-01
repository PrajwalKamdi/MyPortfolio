import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="grid md:grid-cols-2 justify-start px-3 md:p-20 bg-[#02060c] h-[100vh] md:pt-20">
        <div className=" text-white space-y-3 m-auto">
          <p className="text-2xl md:text-3xl font-semibold ">
            Hello, I'm Prajwal Kamdi
          </p>
          <p className="text-xl md:text-2xl font-semibold text-[#00abf0]">
            Java Full Stack Developer
          </p>
          <p className="pb-2">
            Passionate and adaptable fresher committed to mastering Java Full
            Stack Developement.
          </p>

          <Link className="mr-3 " to={"contact"}>
            <button className="p-2 border-[1px] border-solid border-[#00abf0] hover:bg-[#00abf0] duration-300">
              Let's Connect
            </button>
          </Link>
          <Link
            to={
              "https://drive.google.com/file/d/154CZubpMmh3z3xnJChmF4PHdyQRyZsuL/view?usp=sharing"
            }
          >
            <button className="p-2 border-[1px] border-solid border-[#00abf0] hover:bg-[#00abf0] duration-300">
              Resume
            </button>
          </Link>
        </div>
        <div className="mx-auto">
          <img
            src="/src/Images/img1.jpg"
            alt=""
            className="h-[180px] w-[180px] hover:scale-105 duration-500 md:h-[400px] md:w-[400px] 
            border border-solid  rounded-full shadow-md shadow-[#00abf0] xl:shadow-lg  xl:shadow-[#00abf0] xl:hover:scale-105"
          />
        </div>
      </div>
      <p></p>
    </>
  );
}

export default Home;
