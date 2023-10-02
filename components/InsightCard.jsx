'use client';

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, insight_link, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img 
      src={imgUrl}
      alt="planet-01"
      className="md:4-[270px] w-full h-[250px] rounded-[32px] object-cover "
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px] ">
        <h4 
          className="font-normal lg:text-[42px] text-[26px] text-white cursor-pointer"
          onClick={() => window.open(insight_link, "_blank")}
        >{title}</h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white ">{subtitle}</p>
      </div>

      <div 
        className="lg:flex hidden items-center justify-center w-[80px] h-[80px] rounded-full bg-transparent border-[1px] border-white cursor-pointer "
        onClick={() => window.open(insight_link, "_blank")}
      >
        <img 
          src="arrow.svg"
          alt="arrow"
          className="w-[20%] h-[20%] object-contain "
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
