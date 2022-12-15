import React from "react";

export function Cards() {
  return (
    <div className="m-10">
      <img src={require("./images/Card.png")} alt="" />
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-red-500 flex-col ">
      <div className="flex flex-row overflow-x-scroll">
        {Cards()}
        {Cards()}
        {Cards()}
        {Cards()}
      </div>
      <div className="flex p-10 justify-center content-center">
        <h1 className="text-[#8d8d8d] align-center font-bold italic text-[40px]">
          Just read Comics. It’s gets{" "}
          <span className="text-[orange]">Colorful</span> in there
        </h1>
      </div>
    </div>
  );
}

export default Banner;
