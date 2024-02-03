import React from 'react';
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img4 from "../../assets/img4.png";

const items = [
  {
    id: 1,
    title: "Kanban Board",
    img: img1,
    desc: "En Kanban Board",
    link: "https://shimmering-centaur-7659ab.netlify.app"
  },
  {
    id: 2,
    title: "Blog",
    img: img2,
    desc: "Semesterdagbok",
    link:"https://fantastic-snickerdoodle-858891.netlify.app"
  },
  {
    id: 3,
    title: "Wedding Planer",
    img: img4,
    desc: "Website for a Wedding Planer Company",
    link: "https://marvelous-dolphin-c08a2d.netlify.app"
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
            <a href={item.link}>
            <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;