import React from "react";
function Education() {
  return (
    <div className="bg-[#02060c] md:px-20 text-white pb-20 xl:px-32 h-max">
      <main>
        <h1 className="text-xl font-semibold px-3 py-3  pb-8">
          My Educational Background
        </h1>
        <div className="grid grid-cols-1 gap-5 px-5 md:gap-14 md:grid-cols-2 xl:grid-cols-3">
          <div className="m-3 p-3 border-[1px] border-solid rounded-md shadow-md shadow-[#00abf0] hover:scale-105   md:m-0 xl:hover:scale-105 duration-500">
            <div className="">
              <img src="/images/nit.png" alt="" className="rounded-md" />
            </div>
            <div className="md:py-5">
              <h2 className="font-bold mt-1">BTech CGPA : 8.63</h2>
              <h3 className="font-semibold">Computer Science & Engineering</h3>
              <p>Nagpur Institute Of Technology</p>
              <p>Nagpur University : 2021 - 2024</p>
            </div>
          </div>

          <div className="m-3 p-3 border-[1px] border-solid shadow-md shadow-[#00abf0] hover:scale-105 rounded-md md:m-0 xl:hover:scale-105 duration-500">
            <div>
              <img src="/images/img2.jpg" alt="" className="rounded-md" />
            </div>
            <div className="md:py-5">
              <h2 className="font-bold mt-1">12th : 72.42% ( State Board )</h2>
              <h3 className="font-semibold">
                Bhalerao Junior Science College, saoner
              </h3>
              <p>General Science : 2020</p>
            </div>
          </div>
          <div className="m-3 p-3 border-[1px] border-solid shadow-md shadow-[#00abf0] hover:scale-105 rounded-md  md:m-0 xl:hover:scale-105 duration-500">
            <div>
              <img src="/images/img2.jpg" alt="" className="rounded-md" />
            </div>
            <div className="md:py-5">
              <h2 className="font-bold mt-1">10th : 92.20% ( State Board )</h2>
              <h3 className="font-semibold">
                Bhikulal Chandak High-School, Kelwad
              </h3>
              <p>2018</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Education;
