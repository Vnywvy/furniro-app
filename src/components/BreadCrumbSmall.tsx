import React, { FC } from "react";
import insideImg from "../images/bread-crumb-inside-img.png";
import { Link } from "react-router-dom";

interface BreadCrumbSmallProps {
  title: string;
}

const BreadCrumbSmall: FC<BreadCrumbSmallProps> = (props) => {
  return (
    <div className="bg-[#F9F1E7] h-[80px] md:h-[100px] flex items-center pl-[20px]">
      <div className="flex container mx-auto items-center gap-[20px] md:gap-[30px]">
        <Link
          className="text-customGray1 font-poppins font-normal text-[14px] md:text-[16px]"
          to="/">
          Home
        </Link>
        <img src={insideImg} alt="insideImg" className="w-[6px] md:w-[8px]" />
        <Link
          className="text-customGray1 font-poppins font-normal text-[14px] md:text-[16px]"
          to="/shop">
          Shop
        </Link>
        <img src={insideImg} alt="insideImg" className="w-[6px] md:w-[8px]" />
        <p className="pl-[20px] md:pl-[30px] border-l-[2px] border-l-customGray1 py-[4px] md:py-[6px] font-poppins text-[#000000] text-[14px] md:text-[16px] font-normal">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default BreadCrumbSmall;
