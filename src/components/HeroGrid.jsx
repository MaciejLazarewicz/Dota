import { Box, Image, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const evenRowStyle = {
  animation: 'moveEvenRow 180s linear infinite',
};

export const oddRowStyle = {
  animation: 'moveOddRow 180s linear infinite',
  flexDirection: 'row-reverse',
};

const customStyles = `
  @keyframes moveEvenRow {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(-400%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes moveOddRow {
    0% {
      transform: translateX(-410%);
    }
    50% {
      transform: translateX(-75%);
    }
    100% {
      transform: translateX(-410%);
    }
  }
`;

function HeroGrid({ name, img, alt, prim, icon, rowStyle }) {
  const RowAnimation = ({ children }) => {
    return (
      <>
        <style>{customStyles}</style>
        <motion.div
          style={{
            width: '460%',
          }}
        >
          {children}
        </motion.div>
      </>
    );
  };

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

  return (
    <RowAnimation rowStyle={rowStyle}>
      <Box display="flex" style={rowStyle}>
        <Box display="flex">
          <Image width="250px" height="125px" src={img} alt={alt} />

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
