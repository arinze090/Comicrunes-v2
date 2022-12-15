import React from "react";
import { HiLightningBolt } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import { comicData } from "../dummydata";
import { PlusSmIcon } from "@heroicons/react/outline";

export function ComicCards() {
  return comicData.map((cur, i) => (
    <div
      key={i}
      className="w-[186px] h-[335px] bg-[whitesmoke] border border-[rgba(82, 82, 82, 0.3)] rounded-[15px] m-[10px] flex-row mr-[20px] "
    >
      <div className="flex bg-[#3F4347] w-[31px] h-[32px] rounded-[16px] absolute content-center self-center items-center justify-center  ">
        {cur.publisher == "Yes" ? (
          <img src={require("./images/Boxes.png")} />
        ) : (
          <img src={require("./images/Crown.png")} />
        )}
      </div>
      <img src={cur.image} alt="comiImage" className="m-2" />
      <p className="flex break-normal text-[#121426] font-bold w-[186px] h-[45px] italic content-center self-center text-center items-center justify-center uppercase  mb-2 italic font-extrabold text-lg uppercase">
        {cur.name}
      </p>
      <hr />
      <div className="flex flex-row content-center self-center items-center justify-around">
        <div className="flex flex-row justify-center content-center">
          <AiOutlineStar className="mt-1" />
          <p className="text-[#3f4347] text-base font-bold ">{cur.rating}</p>
        </div>
        <HiLightningBolt />
      </div>
    </div>
  ));
}

function Release() {
  return (
    <div className="bg-[#D5F3FC]">
      <div className="m-[20px] p-[30px]">
        <div className="releaseTitle">
          <div className="flex flex-row items-center ">
            <HiLightningBolt className="w-[60px] h-[80px] text-[#2BC3F2]" />
            <h1 className="text-[#3F4347] uppercase leading-[60px] text-[50px] font-bold">
              NEW RELEASES
            </h1>
          </div>
          <p className="w-[530px] text-[#3F4347] leading-[30px] font-[500] text-[22px]">
            Read new comics from Independent artists & creators that are only
            exclusive on Comicrunes.
          </p>
        </div>
      </div>
      <div className="flex overflow-x-scroll m-10">{ComicCards()}</div>
      <div className="flex justify-center self-center content-center items-center">
        <div className="flex flex-row m-20 w-[128px] h-[46px] font-bold bg-[#3F4347] text-white justify-center self-center items-center rounded-[12px]">
          <PlusSmIcon className="w-[20px] h-[20px]" />
          Show More
        </div>
      </div>
    </div>
  );
}

export default Release;
