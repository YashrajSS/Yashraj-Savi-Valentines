import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function CascadingText({ text }) {
  const [key, setKey] = useState(0); // Used to reset animation

  // Split text into individual letters
  const letters = text.split("").map((char) => (char === " " ? "\u00A0" : char));

  // Animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
    exit: (i) => ({
      opacity: 0,
      y: -10,
      transition: { delay: i * 0.1 },
    }),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1); // Reset animation key to restart effect
    }, 3000); // Restart animation every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={key}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ display: "flex", fontSize: "2rem", fontWeight: "bold" }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function App() {
  return <CascadingText text="You have a new message !" />;
}
