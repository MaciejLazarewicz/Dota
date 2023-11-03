import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const evenRowStyle = {};

export const oddRowStyle = {};

function HeroGrid({ name, img, alt, prim, icon, rowStyle }) {
  const transformBackendAttributeIntoReadableOne = (attr) => {
    switch (attr) {
      case 'agi':
        return 'agility';
      case 'str':
        return 'strength';
      case 'int':
        return 'intelligence';
      case 'all':
        return 'all';
      default:
        throw new Error("Attribute doesn't exist");
    }
  };
  const attributeIconUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${transformBackendAttributeIntoReadableOne(
    prim
  )}`;

  const transformAttributeIntoIconSrc = (attr) => {
    switch (attr) {
      case 'agi':
        return `${attributeIconUrl}.png`;
      case 'str':
        return `${attributeIconUrl}.png`;
      case 'int':
        return `${attributeIconUrl}.png`;
      case 'all':
        return 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png';
    }
  };

  const RowAnimation = ({ children, evenRow, oddRow }) => {
    const animationVariants = {
      initial: {
        x: evenRow ? '0%' : '-550%',
      },
      animate: {
        x: evenRow ? '-400%' : '400%',
        transition: {
          duration: '15',
          ease: 'linear',
          repeat: 'Infinity',
        },
      },
    };
    return (
      <motion.div
        initial="initial"
        animate="animate"
        variants={animationVariants}
        style={{
          width: '460%',
        }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <RowAnimation evenRow={rowStyle === evenRowStyle}>
      <Box display="flex" style={rowStyle}>
        <Box display="flex">
          <img width="250px" height="125px" src={img} alt={alt} />
          {/* <p width="50px" height="50px">
            {name}
          </p> */}

          {/* <p width="50px" height="50px">
            {transformBackendAttributeIntoReadableOne(prim)}
          </p>
          <img
            src={transformAttributeIntoIconSrc(prim)}
            width="24px"
            height="24px"
          /> */}
        </Box>
      </Box>
    </RowAnimation>
  );
}

export default HeroGrid;
