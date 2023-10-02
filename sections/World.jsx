'use client';

import { motion } from 'framer-motion';
import { NewFeatures, TitleText, TypingText } from '../components';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: "false", amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Access from anywhere in the World" textStyles="text-center" />
      <TitleText 
        title={(<>Available to work remotely from anywhere around the World.</>)}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img 
          src="/map.png"
          alt="map"
          className='w-full h-full object-contain'
        />

        
        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img 
            src="people-03.png" alt="people" 
            className='w-full h-full object-contain'
          />
        </div>
        <div className='absolute bottom-1/2 left-[5%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] '>
          <img 
            src="people-01.png" alt="participants" 
            className='w-full h-full '
          />
        </div>
        <div className='absolute bottom-1/2 right-[5%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] '>
          <img 
            src="people-01.png" alt="participants" 
            className='w-full h-full '
          />
        </div>
        <div className='absolute top-40 right-40 w-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img 
            src="people-02.png" alt="participants" 
            className='w-full h-full object-contain'
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
