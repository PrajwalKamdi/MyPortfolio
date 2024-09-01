import React from "react";
function Skills() {
  return (
    <>
      <div className="bg-[#02060c] text-white p-5 md:pb-10 md:px-20 xl:px-24 2xl:px-40">
        <h1 className="font-semibold text-xl xl:text-2xl sm: px-5 pb-3">
          My Coding & Developement Skills
        </h1>
        <h1 className="text-4xl"></h1>
        <div className="grid grid-cols-1 sm: px-5 md:px-8 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
          <div className="flex flex-col justify-between border border-solid border-[#00abf0] shadow-md shadow-[#00abf0] hover:scale-105 p-2 xl:hover:scale-105 duration-500">
            <div className="">
              <img src="src/assets/pngegg (8).png" alt="" />
            </div>
            <div className="m-auto w-[100px] md:w-[100px]">
              <img src="src/assets/pngegg (6).png" alt="" />
            </div>
            <div className="m-auto pt-5">
              <p>
                Competent in Fronted Developement with Html, Css, Javascript,
                and React.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between border border-solid border-[#00abf0] shadow-md shadow-[#00abf0] hover:scale-105 p-2 xl:hover:scale-105 duration-500">
            <div>
              <img src="src/assets/pngegg (2).png" />
            </div>
            <div>
              <p>Skilled In Java Programing Languange.</p>
            </div>
          </div>
          <div className="flex flex-col justify-between border border-solid border-[#00abf0] shadow-md shadow-[#00abf0] hover:scale-105 p-2 xl:hover:scale-105 duration-500">
            <div className="">
              <img src="src/assets/pngegg (10).png" className="" alt="" />
            </div>
            <div className="capitalize">
              <p>
                Competent in backend development with spring, springboot, and
                mysql database.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between border border-solid border-[#00abf0] shadow-md shadow-[#00abf0] hover:scale-105 p-2 xl:hover:scale-105 duration-500">
            <div className="mx-3 my-14">
              <img src="src/assets/pngwingcom.png" className="" alt="" />
            </div>
            <div className="capitalize">
              <p>
                Skilled in tailwind css framework and also have knowledge about
                bootstrap framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
