import React from "react";

const categories = [
  {
    id: 1,
    title: "Our  Publishers",
    image: require("./images/publisher.png"),
    nickname: "publish",
  },
  {
    id: 2,
    title: "Featured Publishers",
    image: require("./images/Fpublisher.png"),
    nickname: "Fpublish",
  },
  {
    id: 3,
    title: "Featured Mangas",
    image: require("./images/Mangas.png"),
    nickname: "Mangas",
  },
  {
    id: 4,
    title: "Featured Manhwas",
    image: require("./images/Manhas.png"),
    nickname: "Manhwas",
  },
];

export function CatCards() {
  return categories.map((item, i) => (
    <div
      key={i}
      style={{
        backgroundColor:
          item.nickname == "publish"
            ? "#FDE3D4"
            : item.nickname == "Fpublish"
            ? "#D5F3FC"
            : item.nickname == "Mangas"
            ? "#F0F1F1"
            : "#FFF3CD",
      }}
      className="flex flex-col w-[200px] h-[313px] m-5 rounded-[16px] justify-center self-center content-center items-center"
    >
      <img className="mb-[40px]" src={item.image} alt="" />
      <h1 className="w-[127px] flex justify-center content-center items-center text-center italic text-[22px] text-[#3F4347] leading-[32px] font-extrabold">
        {item.title}
      </h1>
    </div>
  ));
}

function Categories() {
  return (
    <div className="m-10">
      <h1 className="flex justify-center content-center items-center mb-[20px] text-[#3F4347] font-bold leading-[80px] text-[50px]">
        Browse By Categories
      </h1>
      <p className=" flex text-center justify-center content-center items-center self-center mb-5 text-[#3F4347] font-medium leading-[30px] text-[22px]">
        Explore Our curated list of the biggest comic brands to <br /> celebrate
        the comics, mangas, graphic mangas that we all love.
      </p>
      <div className="flex flex-row m-12 justify-center content-center mb-20">
        {CatCards()}
      </div>
    </div>
  );
}

export default Categories;
