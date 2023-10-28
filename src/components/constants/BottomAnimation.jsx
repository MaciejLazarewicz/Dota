import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BottomAnimation = ({ children }) => {
  const [ref, inView] = useInView();
  const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  };
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      style={textStyle}
    >
      {children}
    </motion.div>
  );
};

export default BottomAnimation;
