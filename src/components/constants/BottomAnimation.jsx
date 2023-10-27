import { motion } from 'framer-motion';

const AnimatedText = ({ children }) => {
  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={textStyle}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
