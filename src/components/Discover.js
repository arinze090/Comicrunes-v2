import React, { useState, useEffect } from "react";
import { HiLightningBolt } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import { comicData } from "../dummydata";
import { XIcon, PlusSmIcon } from "@heroicons/react/outline";
import useWindowDimensions from "./utils/Dimensions";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: window.innerWidth / 1.2,
  height: window.innerHeight,
  bgcolor: "#FDE3D4",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

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

function Discover() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="bg-[#fde3d4]">
      <div className="m-[20px] p-[30px]">
        <div className="releaseTitle">
          <div className="flex flex-row items-center mb-5 ">
            <img
              src={require("./images/discover.png")}
              alt=""
              className="mr-3"
            />
            <h1 className="text-[#3F4347] uppercase leading-[60px] text-[50px] font-bold">
              DISCOVER
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
        <div
          onClick={handleOpen}
          className="flex flex-row cursor-pointer m-20 w-[128px] h-[46px] font-bold bg-[#3F4347] text-white justify-center self-center items-center rounded-[12px]"
        >
          <PlusSmIcon className="w-[20px] h-[20px]" />
          Show More
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="overflow-y-scroll" sx={style}>
          <div className="flex flex-row justify-between ">
            <div />
            <div className="flex flex-row self-center content-center items-center ">
              <img
                src={require("./images/discover.png")}
                alt=""
                className="mr-3"
              />
              <h1 className="text-[#3F4347] uppercase leading-[60px] text-[50px] font-bold">
                DISCOVER
              </h1>
            </div>
            <div
              onClick={handleClose}
              className="flex bg-[#3F4347] cursor-pointer w-[54px] h-[54px] rounded-[23px] content-center self-center items-center justify-center "
            >
              <XIcon className="w-[30px] h-[30px] text-white" />
            </div>
          </div>
          <div className="flex content-center justify-center mt-5">
            <p>
              Read new comics from Independent artists & creators that are only
              exclusive on Comicrunes.
            </p>
          </div>
          <div className="flex flex-wrap m-6">{ComicCards()}</div>
        </Box>
      </Modal>
    </div>
  );
}

export default Discover;
