'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const getyear = new Date().getFullYear();
const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient " />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white"> Have a discussion with me</h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
          onClick={() => window.open('mailto:oladapom4@gmail.com', '_blank')}
        >
          <img
            src="/headset.svg" alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">Contact me</span>
        </button>
        <div
          className="lg:flex hidden items-center justify-center w-[40px] h-[40px] rounded-full bg-transparent border-[1px] border-white cursor-pointer"
          onClick={() => window.open('https://medium.com/@oladapomiracle/tips-to-mastering-the-art-of-python-677aff8ac579')}
        >
          <img
            src="arrow.svg"
            alt="arrow"
            className="w-[20%] h-[20%] object-contain "
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Miracle O.A | Software Developer</h4>
          <p className="font-normal text-[14px] text-white opacity-50"> Copyright &copy; {getyear} All rights reserved.
            <Link href="https://medium.com/@oladapomiracle/tips-to-mastering-the-art-of-python-677aff8ac579" className="lg:hidden font-semibold text-[14px] text-white">
              | Download Resume
            </Link>
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                onClick={() => window.open(social.source_code_link, '_blank')}
                key={social.name}
                src={social.url}
                alt={social.name}
                className=" font-bold w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
