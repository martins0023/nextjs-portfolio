'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0'/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexcenter} flex-col`}
    >
      <TypingText title=" | About" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        <span className='font-extrabold text-white'>Aiming to leverage academic experience with mid-level experience in software development technology operations, </span> Areas of expertise include, Web Development (backend using Django), Mobile App development (Front-end), UI/UX wireframe (figma), Software Development using python, Bash scripting, Python, Machine Learning (Natural Language Processing), Linux Administration <span className='font-extrabold text-white'> I have experience of at least 2 years in above mentioned fields and areas, </span> building models of a world of incessant movement in continual transformation and evolution, assuring that I will provide quality services with the aid of proper documentation and guide-through from the team assigned to. 
        
      </motion.p>
      <TypingText title=" | MIRACLE OLADAPO.A" textStyles="text-center font-extrabold" />

    </motion.div>
  </section>
);

export default About;
